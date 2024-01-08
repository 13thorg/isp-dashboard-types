import { CreditTypeEnum, PaymentGatewayEnum, PaymentRequestByEnum } from './paymentGateway.interface';
export type TransactionType = {
    _id?: string,
    cid: string,
    invoiceIds: string[],
    gateway: PaymentGatewayEnum,
    orderId: string,
    transactionId: string,
    externalId: string,
    amount: number,
    refund: number,
    status: TransactionStatusEnum,
    message: string,
    transactionAt: Date,
    meta?: Record<string, any>,
    request: TransactionRequestType,
    createdAt?: Date,
    updatedAt?: Date
}

export type TransactionRequestType = {
    to: string,
    by: PaymentRequestByEnum
}

export enum TransactionStatusEnum {
    SUCCESS = 'SUCCESS',
    PENDING = 'PENDING',
    FAILED = 'FAILED',
    REFUND = 'REFUND',
    AUTHORIZED = 'AUTHORIZED',
}

export type CreditType = {
    _id?: string
    creditType: CreditTypeEnum,
    cid: string,
    transactionId?: string,
    gateway: PaymentGatewayEnum,
    orderId: string,
    externalId: string,
    amount: number,
    refund: number,
    status: TransactionStatusEnum,
    message?: string,
    transactionAt: Date,
    expireAt?: Date
    createdAt?: Date,
    updatedAt?: Date
}