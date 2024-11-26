import { Body, Controller, Post } from "@nestjs/common";
import { EmailService } from "../services/email.service";
import { EmailRequest } from "../models/email-request.model";

@Controller('api/email')
export class EmailController {
    constructor(private readonly emaiLService: EmailService) {}

    @Post()
    async sendEmailCustomer(@Body() email: EmailRequest): Promise<void> {
        await this.emaiLService.sendEmail(email);
    }
}
