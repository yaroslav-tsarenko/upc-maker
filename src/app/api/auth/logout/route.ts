import { NextResponse } from "next/server";
import { authController } from "@/backend/controllers/auth.controller";
import { LogoutResponse } from "@/backend/types/auth.types";

export async function POST() {
    const result: LogoutResponse = await authController.logout();
    return NextResponse.json(result);
}