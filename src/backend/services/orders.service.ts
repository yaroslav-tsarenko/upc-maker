import { AiOrder } from "@/backend/models/aiOrder.model";
import {sendEmail} from "@/backend/utils/sendEmail";

export const ordersService = {
    async sendPDFEmail(email: string, subject: string, text: string, html: string, attachments: any[]) {
        return await sendEmail(email, subject, text, html, attachments);
    },

    async updateOrderDate(orderId: string, yearsToAdd: number) {
        const futureDate = new Date();
        futureDate.setFullYear(futureDate.getFullYear() + yearsToAdd);

        return await AiOrder.findByIdAndUpdate(
            orderId,
            { createdAt: futureDate },
            { new: true }
        );
    },
};
