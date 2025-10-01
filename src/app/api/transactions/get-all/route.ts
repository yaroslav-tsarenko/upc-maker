import { NextRequest } from "next/server";
import { connectDB } from "@/backend/config/db";
import { Transaction } from "@/backend/models/transaction.model";
import { requireAuth } from "@/backend/middlewares/auth.middleware";

export async function GET(req: NextRequest) {
    try {
        await connectDB();
        const { sub: userId } = await requireAuth(req);
        const transactions = await Transaction.find({ userId }).sort({ createdAt: -1 });
        return Response.json(transactions, { status: 200 });
    } catch (err: any) {
        return Response.json({ error: err.message }, { status: 401 });
    }
}
