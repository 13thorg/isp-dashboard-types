import { AddressType, NameType } from "./common.interface"

export type Customer = {
    _id?: string,
    profile?: string,
    name: NameType,
    companyName?: string,
    email: ContactType,
    phone: ContactType,
    password: string,
    doc: DocumentType,
    address: AddressType,
    groupBy?: string,
    isActive: boolean,
    isDeleted: boolean,
    notification: NotificationConfigForCustomer,
    createdBy?: string,
    updatedBy?: string,
    createdAt?: Date,
    updatedAt?: Date
}

export type ContactType = {
    isVerified: boolean,
    value: string
}

export type DocumentType = {
    docType: DocumentEnum,
    images: string[],
    note: string,
    isVerified: boolean
}

export type NotificationConfigForCustomer = {
    loginAlert: boolean
}

export enum DocumentEnum {
    AADHAR = 'AADHAR',
    DRIVING_LICENCE = 'DRIVING_LICENCE',
    PASSPORT = 'PASSPORT',
    OTHER = 'OTHER'
}