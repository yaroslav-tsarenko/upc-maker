import { qrService } from "../services/qr.service";

export const qrController = {
    async createOrderQR(userId: string, email: string, prompt: string, response: string) {
        return await qrService.processQROrder(userId, email, prompt, response);
    },
};
