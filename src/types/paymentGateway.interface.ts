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

export enum PaymentRequestByEnum {
    WEB_DASHBOARD = 'WEB_DASHBOARD',
    MOBILE_APP_ANDROID = 'MOBILE_APP_ANDROID',
    WEB_DIRECTPAY = 'WEB_DIRECTPAY',
    WEB_CUSTOMER_DASHBOARD = 'WEB_CUSTOMER_DASHBOARD',
}

export type RezorpayGatewayType = {
    isActive: boolean,
    clientId: string,
    secretKey: string,
    displayName: string,
    callBackUrl: string,
    theamColor: string,
}

export type RezorPayOrderNoteType = {
    instanceId: string
}

export type RezorpayInstanceType = {
    id: string,
    entity: string,
    amount: number,
    amount_paid: number,
    amount_due: number,
    currency: string,
    receipt: string,
    offer_id: any,
    status: RezorpayInstanceStatusEnum,
    attempts: number,
    notes: RezorPayOrderNoteType,
    created_at: number
}

export enum RezorpayInstanceStatusEnum {
    created = 'created',
    attempted = 'attempted',
    paid = 'paid',
}

export enum PaymentGatewayEnum {
    PAYTM_PAYMRNY_BANK = 'PAYTM_PAYMRNY_BANK',
    REZORPAY = 'REZORPAY'
}