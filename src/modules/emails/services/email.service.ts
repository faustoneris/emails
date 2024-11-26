import { Injectable } from "@nestjs/common";
import { createTransport } from 'nodemailer';
import { EmailModel } from "../models/email.model";
import { EMAIL_CONTENTS } from "src/utils/email-content/email-content";
import { EmailRequest } from "../models/email-request.model";
import { AuctionStatus } from "../models/email-feedback.enum";

export const transporter = createTransport({
    service: 'gmail',
    port: 25,
    secure: false, // true for 465, false for other ports
    auth: { //add to envoriment variables
        user: "equipefier@gmail.com",
        pass: "stoxnyzsvwfaroim",
    },
    tls: { rejectUnauthorized: false },
});

@Injectable()
export class EmailService {
    async sendEmail(emailRequest: EmailRequest): Promise<void> {
        switch (emailRequest.auctionStatus) {
            case AuctionStatus.ACCEPT: return await this.emailAccept(emailRequest);
            case AuctionStatus.REFUSED: return await this.emailRefused(emailRequest);
            default:
                return await this.emailReceived(emailRequest);
        }
    }

    private async emailRefused(emailRequest: EmailRequest): Promise<void> {
        const mailOptions = this.buildEmailOptions(
            "equipefier@gmail.com",
            emailRequest.userEmail,
            "FIER - Atualização do Lance", "Seu lance foi recusado :(",
            EMAIL_CONTENTS.NOTIFICATION_AUCTION_REFUSE
                .replace("[Nome do Cliente]", emailRequest.username)
                .replace("[Nome do Produto]", emailRequest.productName)
                .replace("[Valor do Lance]", emailRequest.auctionPrice.toString())
                .replace("[Link para a plataforma]", "http://localhost:4200")
        );
        await transporter.sendMail(mailOptions);
    }

    private async emailAccept(emailRequest: EmailRequest): Promise<void> {
        const mailOptions = this.buildEmailOptions(
            "equipefier@gmail.com",
            emailRequest.userEmail,
            "FIER - Atualização do Lance", "Parabéns! Seu lance foi aceito",
            EMAIL_CONTENTS.NOTIFICATION_AUCTION_APPROVE
                .replace("[Nome do Cliente]", emailRequest.username)
                .replace("[Nome do Produto]", emailRequest.productName)
                .replace("[Valor do Lance]", emailRequest.auctionPrice.toString())
                .replace("[Link para a plataforma]", "http://localhost:4200")
        );
        await transporter.sendMail(mailOptions);
    }

    private async emailReceived(emailRequest: EmailRequest): Promise<void> {
        const mailOptions = this.buildEmailOptions(
            "equipefier@gmail.com",
            emailRequest.userEmail,
            "FIER - Atualização do Lance", "Lance recebido",
            EMAIL_CONTENTS.NOTIFICATION_AUCTION
                .replace("[Nome do Cliente]", emailRequest.username)
                .replace("[Nome do Produto]", emailRequest.productName)
                .replace("[Valor do Lance]", emailRequest.auctionPrice.toString())
                .replace("[Link para a plataforma]", "http://localhost:4200")
        );
        await transporter.sendMail(mailOptions);
    }

    private buildEmailOptions(from: string,
        to: string,
        subject: string,
        text: string,
        html: string): EmailModel {
        return EmailModel.of(from, to, subject, text, html)
    }
}
