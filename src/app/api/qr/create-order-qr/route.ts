import {NextRequest, NextResponse} from "next/server";
import {qrController} from "@/backend/controllers/qr.controller";
import {requireAuth} from "@/backend/middlewares/auth.middleware"; // optional

export async function POST(req: NextRequest) {
    try {
        const user = await requireAuth(req);

        const body = await req.json();
        const {userId, email, prompt, response} = body;

        const order = await qrController.createOrderQR(userId, email, prompt, response);
        return NextResponse.json({order}, {status: 200});
    } catch (err: any) {
        return NextResponse.json(
            {message: err.message || "Failed to create QR order"},
            {status: 400}
        );
    }
}
