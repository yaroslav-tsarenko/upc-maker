import {upcService} from "@/backend/services/upc.service";

export const upcController = {
    async createOrderUPC(userId: string, email: string, prompt: string, response: string) {
        return await upcService.processUPCOrder(userId, email, prompt, response);
    },
};
