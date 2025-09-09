import { NextRequest, NextResponse } from "next/server";
import { authController } from "@/backend/controllers/auth.controller";
import { requireAuth } from "@/backend/middlewares/auth.middleware";
import {AuthError } from "@/backend/types/auth.types";
import {UserType} from "@/backend/types/user.types";

export async function GET(req: NextRequest) {
    const payload = requireAuth(req);
    const result: UserType | AuthError = await authController.me(payload.id);
    if ("type" in result) {
        return NextResponse.json(result, { status: 401 });
    }
    return NextResponse.json(result);
}