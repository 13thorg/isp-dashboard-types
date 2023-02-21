import { PaymentGatewayEnum } from "./paymentGateway.interface";
export declare type TranslationType = {
    _id?: string;
    orderId: string;
    transactionId: string;
    gateway: PaymentGatewayEnum;
    amount: number;
    refund: number;
    status: TransactionStatusEnum;
    message: string;
    CreatedAt?: Date;
    UpdatedAt?: Date;
};
export declare enum TransactionStatusEnum {
    SUCCESS = 0,
    PENDING = 1,
    FAILED = 2
}
