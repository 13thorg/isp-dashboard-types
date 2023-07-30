import { AddressOneType, AddressType, NameType } from "./common.interface";
import { GroupType } from "./group.interface";
export type Customer = {
    _id?: string;
    profile?: string;
    name: NameType;
    companyName?: string;
    email: ContactType;
    phone: ContactType;
    password: string;
    doc: DocumentType;
    address: CustomerAddressType;
    groupBy?: string;
    isActive: boolean;
    isDeleted: boolean;
    notification: NotificationConfigForCustomer;
    createdBy?: string;
    updatedBy?: string;
    createdAt?: Date;
    updatedAt?: Date;
};
export type CustomerOne = {
    _id?: string;
    profile?: string;
    name: NameType;
    companyName?: string;
    email: ContactType;
    phone: ContactType;
    password: string;
    doc: DocumentType;
    address: CustomerAddressOneType;
    groupBy?: GroupType;
    isActive: boolean;
    isDeleted: boolean;
    notification: NotificationConfigForCustomer;
    createdBy?: string;
    updatedBy?: string;
    createdAt?: Date;
    updatedAt?: Date;
};
export type ContactType = {
    isVerified: boolean;
    value: string;
};
export type CustomerAddressType = {
    primary: AddressType;
    billing: AddressType;
};
export type CustomerAddressOneType = {
    primary: AddressOneType;
    billing: AddressOneType;
};
export type DocumentType = {
    docType: DocumentEnum;
    images: string[];
    value: string;
    note?: string;
    isVerified: boolean;
};
export type NotificationConfigForCustomer = {
    loginAlert: boolean;
};
export declare enum DocumentEnum {
    AADHAR = "AADHAR",
    DRIVING_LICENCE = "DRIVING_LICENCE",
    PASSPORT = "PASSPORT",
    OTHER = "OTHER"
}
