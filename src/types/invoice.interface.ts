import { Customer } from "./customers.interface"
import { ServiceType } from "./service.interface"

export type InvoiceItemType = {
    title: string,
    customPrice: number,
    customTax: number,
    quantity: number,
    total: number,
}

export type InvoiceDiscountType = {
    title: string,
    amount: number,
    percentage: number,
}

export type InvoiceType = {
    _id?: string,
    title: string,
    cid: string,
    sid?: string,
    invNo: number,
    items: InvoiceItemType[],
    discount: InvoiceDiscountType[],
    total: number,
    note: string,
    status: InvoiceStatusEnum,
    dueDate: Date | string,
    createdAt?: Date,
    createdBy?: string,
    updatedAt?: Date,
    updatedBy?: string,
    isDeleted?: boolean
}

export type InvoiceOneType = {
    _id?: string,
    title: string,
    cid: Customer,
    sid?: string,
    invNo: number,
    items: InvoiceItemType[],
    discount: InvoiceDiscountType[],
    total: number,
    note: string,
    status: InvoiceStatusEnum,
    dueDate: Date | string,
    createdAt?: Date,
    createdBy?: string,
    updatedAt?: Date,
    updatedBy?: string,
    isDeleted?: boolean
}

export enum InvoiceStatusEnum {
    UNPAID = 'UNPAID',
    PAID = 'PAID',
    CANCELLED = 'CANCELLED',
    REFUND = 'REFUND',
    DRAFT = 'DRAFT'
}

export type InvoicePriseStatusType = {
    status: InvoiceStatusEnum
    totalCount: number
    totalAmount: number
}