// app/api/transfermit/webhook/route.ts
import crypto from "crypto";
import { NextResponse } from "next/server";
import { userController } from "@/backend/controllers/user.controller";

export const runtime = "nodejs";

function env(name: string) {
    const v = process.env[name];
    if (!v) throw new Error(`Missing env ${name}`);
    return v;
}

function verify(raw: string, signature: string) {
    const hash = crypto
        .createHmac("sha256", env("TRANSFERMIT_SIGNING_KEY"))
        .update(raw)
        .digest("hex");

    return hash === signature;
}

export async function POST(req: Request) {
    const raw = await req.text();
    const signature = req.headers.get("signature") || "";

    if (!verify(raw, signature)) {
        return new NextResponse("invalid_signature", { status: 401 });
    }

    const payload = JSON.parse(raw);
    const payment = payload.result ?? payload;

    const state = payment.state; // COMPLETED | DECLINED | PENDING
    const userId = payment.additionalParameters?.userId;
    const tokens = Number(payment.additionalParameters?.tokens);

    if (state === "COMPLETED") {
        await userController.buyTokens(userId, tokens);
    }

    return new NextResponse("ok", { status: 200 });
}
