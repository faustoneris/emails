import { AuctionStatus } from "./email-feedback.enum";

export class EmailRequest {
    username: string;
    productName: string;
    auctionPrice: number;
    userEmail: string;
    auctionStatus: AuctionStatus
}

