import { Module } from "@nestjs/common";
import { EmailController } from "./controllers/email.controller";
import { EmailService } from "./services/email.service";

@Module({
    imports: [],
    controllers: [EmailController],
    providers: [EmailService],
    exports: []
})
export class EmailModule { }
