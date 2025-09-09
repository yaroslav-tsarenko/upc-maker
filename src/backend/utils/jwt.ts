import jwt, {SignOptions} from "jsonwebtoken";
import { ENV } from "@/backend/config/env";
import {TokenPayload} from "@/backend/types/jwt.types";

export function signJwt(
    payload: object,
    expiresIn: SignOptions["expiresIn"] = "7d"
): string {
    const options: SignOptions = { expiresIn };
    return jwt.sign(payload, ENV.JWT_SECRET, options);
}

export function verifyJwt(token: string): TokenPayload | null {
    try {
        return jwt.verify(token, ENV.JWT_SECRET) as TokenPayload;
    } catch {
        return null;
    }
}
