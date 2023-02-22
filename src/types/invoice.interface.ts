import { DiscountType, PricingType, ReferenceType } from "./common.interface"

export type InvoiceType = {
    _id?: string,
    Items: InvoiceItemsType[],
    discount: DiscountType[],
    lateFee: LateFeeType[],
    price: PricingType,
    note: string,
    status: StatusEnum,
    groupBy: string,
    CreatedAt?: Date,
    UpdatedAt?: Date
}

export type InvoiceItemsType = {
    _id?: string,
    title: string,
    desc: string,
    reference?:ReferenceType
    price: PricingType,
}

export type LateFeeType = {
    title: string,
    desc: string,
    price: PricingType,
}

export enum StatusEnum {
    UNPAID,
    PAID,
    CANCELLED,
    REFUND
}