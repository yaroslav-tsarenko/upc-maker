import { NextRequest, NextResponse } from "next/server";
import { verifyJwt } from "../utils/jwt";

export function requireAuth(req: NextRequest) {
    const authHeader = req.headers.get("authorization");
    if (!authHeader) throw new Error("Missing auth header");

    const token = authHeader.split(" ")[1];
    const payload = verifyJwt(token);
    if (!payload) throw new Error("Invalid or expired token");

    return payload;
}
