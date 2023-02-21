import { Objects } from "./common.interface"

export type PaymentGatewayType = {
    _id?: string,
    name: string,
    title: PaymentGatewayEnum,
    credentials: Objects,
    keys: string[],
    CreatedAt?: Date,
    UpdatedAt?: Date
}

export enum PaymentGatewayEnum {
    PAYTM_PAYMRNY_BANK,
    REZORPAY
}