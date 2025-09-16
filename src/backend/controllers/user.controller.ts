import { connectDB } from "../config/db";
import { userService } from "../services/user.service";
import { UserType } from "@/backend/types/user.types";

export const userController = {
    async buyTokens(userId: string, amount: number): Promise<UserType> {
        await connectDB();
        const user = await userService.addTokens(userId, amount);
        return {
            _id: user._id.toString(),
            name: user.name,
            email: user.email,
            role: user.role,
            tokens: user.tokens,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        };
    },
};
