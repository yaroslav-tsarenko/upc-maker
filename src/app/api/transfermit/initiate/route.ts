import { NextResponse } from "next/server";

export const runtime = "nodejs";

function env(name: string) {
    const v = process.env[name];
    if (!v) throw new Error(`Missing env ${name}`);
    return v;
}

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const amount = Number(body.amount);
        const currency = String(body.currency || "GBP").toUpperCase();
        const tokens = Number(body.tokens);
        const user = body.user;

        if (!amount || amount < 1) {
            return NextResponse.json({ error: "invalid_amount" }, { status: 422 });
        }

        if (!tokens || tokens <= 0) {
            return NextResponse.json({ error: "invalid_tokens" }, { status: 422 });
        }

        if (!user?.id || !user?.email) {
            return NextResponse.json({ error: "user_required" }, { status: 401 });
        }

        const ref = `CS-${user.id}-${Date.now()}`;
        const base = env("NEXT_PUBLIC_SITE_URL").replace(/\/$/, "");

        const payload = {
            referenceId: ref,
            paymentType: "DEPOSIT",
            paymentMethod: "OOB_CARD",

            amount: amount,              // ❗ NUMBER
            currency: currency,

            description: `Top-up ${tokens} tokens`,

            successReturnUrl: `${base}/payment/success`,
            declineReturnUrl: `${base}/payment/decline`,
            pendingReturnUrl: `${base}/payment/pending`,
            returnUrl: `${base}/payment/pending`,

            webhookUrl: `${base}/api/transfermit/webhook`,
            websiteUrl: base,

            customer: {
                referenceId: `user_${user.id}`,
                email: user.email,
                locale: "en",
            },

            billingAddress: {
                addressLine1: "1 Billing St",
                city: "London",
                countryCode: "GB",
                postalCode: "EC1A1BB",
            },

            additionalParameters: {
                user_id: user.id,
                tokens: tokens,
            },
        };

        console.log("[TM PAYLOAD]", payload);

        const res = await fetch(`${env("TRANSFERMIT_API_URL")}/payments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${env("TRANSFERMIT_API_KEY")}`,
            },
            body: JSON.stringify(payload),
        });

        const json = await res.json();

        if (!res.ok) {
            console.error("[TM ERROR]", json);
            return NextResponse.json(
                { error: "transfermit_error", details: json },
                { status: res.status }
            );
        }

        const redirectUrl = json?.result?.redirectUrl;

        if (!redirectUrl) {
            return NextResponse.json(
                { error: "missing_redirect_url", details: json },
                { status: 500 }
            );
        }

        return NextResponse.json({ redirectUrl });

    } catch (e: any) {
        console.error("[TM FATAL]", e);
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
