import { ordersService } from "../services/orders.service";

export const ordersController = {
    async sendPDF(body: any) {
        const { orderId, email, subject, text, html, attachments } = body;
        await ordersService.sendPDFEmail(email, subject, text, html, attachments);
        const order = await ordersService.updateOrderDate(orderId, 200);

        return order;
    },
};
