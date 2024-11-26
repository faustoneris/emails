import { AuctionStatus } from "./email-feedback.enum";

export class EmailRequest {
    username: string;
    userCustomerName: string;
    productName: string;
    auctionPrice: number;
    userEmail: string;
    userCustomerEmail: string;
    auctionStatus: AuctionStatus;
}

