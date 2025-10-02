import {NextRequest, NextResponse} from "next/server";
import {requireAuth} from "@/backend/middlewares/auth.middleware";
import {upcController} from "@/backend/controllers/upc.controller";

export async function POST(req: NextRequest) {
    try {
        const user = await requireAuth(req);

        const body = await req.json();
        const {userId, email, prompt, response} = body;

        const order = await upcController.createOrderUPC(userId, email, prompt, response);
        return NextResponse.json({order}, {status: 200});
    } catch (err: any) {
        return NextResponse.json(
            {message: err.message || "Failed to download"},
            {status: 400}
        );
    }
}
