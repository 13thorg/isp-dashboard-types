import { Customer } from "./customers.interface"
import { ServiceType } from "./service.interface"

export type InvoiceItemType = {
    label: string,
    customPrice: number,
    customTax: number,
    quantity: number,
    total: number,
}

export type InvoiceDiscountType = {
    name: string,
    amount: number,
    percentage: number,
}

export type InvoiceType = {
    _id?: string,
    cid: string,
    sid?: string,
    invNo: number,
    Items: InvoiceItemType[],
    discount: InvoiceDiscountType[],
    total: number,
    note: string,
    status: InvoiceStatusEnum,
    dueDate: Date,
    CreatedAt?: Date,
    UpdatedAt?: Date
}

export type InvoiceOneType = {
    _id?: string,
    cid: Customer,
    sid?: string,
    invNo: number,
    Items: InvoiceItemType[],
    discount: InvoiceDiscountType[],
    total: number,
    note: string,
    status: InvoiceStatusEnum,
    dueDate: Date,
    CreatedAt?: Date,
    UpdatedAt?: Date
}

export enum InvoiceStatusEnum {
    UNPAID = 'UNPAID',
    PAID = 'PAID',
    CANCELLED = 'CANCELLED',
    REFUND = 'REFUND',
    DRAFT = 'DRAFT'
}