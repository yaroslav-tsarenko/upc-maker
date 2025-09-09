import { NextRequest, NextResponse } from "next/server";
import { authController } from "@/backend/controllers/auth.controller";
import { AuthResponse, AuthError } from "@/backend/types/auth.types";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const result: AuthResponse | AuthError = await authController.register(body);
    if ("type" in result) {
        return NextResponse.json(result, { status: 400 });
    }
    return NextResponse.json(result);
}