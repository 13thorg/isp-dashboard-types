import { AddressOneType, AddressType, NameType, OnlineStatusEnum } from "./common.interface"
import { GroupType } from "./group.interface"

export type Customer = {
    _id?: string,
    profile?: string,
    name: NameType,
    companyName?: string,
    email: ContactType,
    phone: ContactType,
    password: string,
    doc: DocumentType,
    address: CustomerAddressType,
    groupBy?: string,
    isActive: boolean,
    isDeleted: boolean,
    notification: NotificationConfigForCustomer,
    status?: OnlineStatusEnum,
    createdBy?: string,
    updatedBy?: string,
    createdAt?: Date,
    updatedAt?: Date,
    _welcomeNotificationConfig?: WelcomeNotificationConfig
}

export type CustomerOne = {
    _id?: string,
    profile?: string,
    name: NameType,
    companyName?: string,
    email: ContactType,
    phone: ContactType,
    password: string,
    doc: DocumentType,
    address: CustomerAddressOneType,
    groupBy?: GroupType,
    isActive: boolean,
    isDeleted: boolean,
    notification: NotificationConfigForCustomer,
    status?: OnlineStatusEnum,
    createdBy?: string,
    updatedBy?: string,
    createdAt?: Date,
    updatedAt?: Date,
    _welcomeNotificationConfig?: WelcomeNotificationConfig
}

export type WelcomeNotificationConfig = {
    sendMail?: boolean,
    sendSMS?: boolean,
    sendFCM?: boolean,
    sendWhatsAppMessage?: boolean,
}

export type ContactType = {
    isVerified: boolean,
    value: string
}

export type CustomerAddressType = {
    primary: AddressType,
    billing: AddressType
}

export type CustomerAddressOneType = {
    primary: AddressOneType,
    billing: AddressOneType
}

export type DocumentType = {
    docType: DocumentEnum,
    images: string[],
    value: string,
    note?: string,
    isVerified: boolean
}

export type NotificationConfigForCustomer = {
    loginAlert: boolean
}

// export type CustomerListFilterType = {
//     filterBy: CustomerListFilterByRnum
// }

// export type CustomerListFilterByRnum {
//     ACCOUNT_STATUS,
//     KYC_STATUS
//     CREATED_AT,
//     CREATED_BY,
//     MODIFIED_AT,
//     MODIFIED_BY,

// }

export enum DocumentEnum {
    AADHAR = 'AADHAR',
    DRIVING_LICENCE = 'DRIVING_LICENCE',
    PASSPORT = 'PASSPORT',
    VOTER_ID = 'VOTER_ID',
    OTHER = 'OTHER'
}