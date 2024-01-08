import { InputSelectEnumType, InputTypeEnum } from "./inputs.interface"

export type PaymentGatewayType<T = undefined> = {
    _id?: string,
    name: string,
    image: string,
    key: PaymentGatewayEnum,
    credentials: T extends undefined ? any : T,
    validations: PaymentGatewayValidationType[],
    availableTo: PaymentGatewayAvailableToType
    isActive: boolean,
    isTempDown: boolean,
    tempDownMessage?: string,
    CreatedAt?: Date,
    UpdatedAt?: Date
}

export type PaymentGatewayAvailableToType = {
    byCustomers: boolean,
    byAdmin: boolean,
    bySubscription: boolean
}

export type PaymentGatewayValidationType = {
    isRequired: boolean,
    title: string,
    placeholder?: string
    key: string,
    type: InputTypeEnum,
    enum: InputSelectEnumType[],
    regex?: string
}

export enum PaymentRequestByEnum {
    WEB_DASHBOARD = 'WEB_DASHBOARD',
    MOBILE_APP_ANDROID = 'MOBILE_APP_ANDROID',
    WEB_DIRECTPAY = 'WEB_DIRECTPAY',
    WEB_CUSTOMER_DASHBOARD = 'WEB_CUSTOMER_DASHBOARD',
}

export type RezorpayGatewayType = {
    clientId: string,
    secretKey: string,
    callBackUrl: string,
    theamColor: string,
}

export type PaytmGatewayType = {
    mId: string,
    mKey: string,
    website: string,
    industryType: string,
    channelId: PaytmChannelIdEnum,
    callBackUrl: string,
    paymentUrl: string,
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
    REZORPAY = 'REZORPAY',
    OFFLINE = 'OFFLINE'
}

export enum PaytmChannelIdEnum {
    WEB = 'WEB',
    WAP = 'WAP',
}

export type PaytmGatewayResponseType = {
    BANKTXNID: string;
    CHECKSUMHASH: string;
    CURRENCY: string;
    GATEWAYNAME?: string;
    MID: string;
    ORDERID: string;
    PAYMENTMODE?: string;
    RESPCODE: string;
    RESPMSG: string;
    STATUS: PaytmGatewayResponseStatusEnum;
    TXNAMOUNT: string;
    TXNDATE?: string;
    TXNID: string;
}

export enum PaytmGatewayResponseStatusEnum {
    TXN_SUCCESS = 'TXN_SUCCESS',
    TXN_FAILURE = 'TXN_FAILURE',
    PENDING = 'PENDING',
}

export type QRPaymentInstance = {
    gatewatType: PaymentGatewayEnum,
    orderId: string,
    payment: QRPaymentAmount,
    qrImage: string,
    expireAt: Date | string,
    qrContent?: string,
}

export type QRPaymentAmount = {
    amount: string,
    inNumber: number
    inWord: string
}

export enum CreditTypeEnum {
    IN = 'IN',
    OUT = 'OUT'
}