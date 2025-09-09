import { authService } from "../services/auth.service";
import { verifyJwt } from "../utils/jwt";
import { User } from "../models/user.model";
import { AuthError, AuthResponse, LogoutResponse } from "@/backend/types/auth.types";
import { UserType } from "@/backend/types/user.types";
import { connectDB } from "../config/db";

export const authController = {
    async register(body: { name: string; email: string; password: string }): Promise<AuthResponse | AuthError> {
        await connectDB();
        try {
            const { user, token } = await authService.register(body);
            const { _id, name, email, role, createdAt, updatedAt } = user;
            return {
                user: {
                    _id: _id.toString(),
                    name,
                    email,
                    role,
                    createdAt,
                    updatedAt,
                },
                token,
            };
        } catch (e) {
            return { type: "EmailAlreadyRegistered", message: (e as Error).message };
        }
    },

    async login(body: { email: string; password: string }): Promise<AuthResponse | AuthError> {
        await connectDB();
        try {
            const { user, token } = await authService.login(body.email, body.password);
            const { _id, name, email, role, createdAt, updatedAt } = user;
            return {
                user: {
                    _id: _id.toString(),
                    name,
                    email,
                    role,
                    createdAt,
                    updatedAt,
                },
                token,
            };
        } catch (e) {
            return { type: "InvalidCredentials", message: (e as Error).message };
        }
    },

    async me(token: string): Promise<UserType | AuthError> {
        await connectDB();
        const payload = verifyJwt(token);
        if (!payload) return { type: "Unauthorized", message: "Unauthorized" };

        const user = await User.findById(payload.id).select("-password");
        if (!user) return { type: "UserNotFound", message: "User not found" };

        const { _id, name, email, role, createdAt, updatedAt } = user;
        return {
            _id: _id.toString(),
            name,
            email,
            role,
            createdAt,
            updatedAt,
        };
    },

    async logout(): Promise<LogoutResponse> {
        await connectDB();
        return { message: "Logged out successfully" };
    },
};