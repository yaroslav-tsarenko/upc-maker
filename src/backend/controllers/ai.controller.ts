import { connectDB } from "../config/db";
import { aiService } from "../services/ai.service";
import { CreateAiOrderRequest, CreateAiOrderResponse, GetAiOrdersResponse, GetAiOrderResponse } from "@/backend/types/ai.types";
import {sendEmail} from "@/backend/utils/sendEmail";

export const aiController = {
    async createOrder(userId: string, email: string, body: CreateAiOrderRequest): Promise<CreateAiOrderResponse> {
        await connectDB();
        const order = await aiService.processPrompt(userId, email, body.prompt);
        sendEmail(email, "Order created successfully!", "Your order has been created successfully. We will notify you once it's completed.");
        return { order };
    },

    async getOrders(userId: string) {
        await connectDB();
        return aiService.getOrders(userId);
    },

    async getOrder(userId: string, orderId: string): Promise<GetAiOrderResponse> {
        await connectDB();
        const order = await aiService.getOrderById(userId, orderId);
        return { order };
    },
};
