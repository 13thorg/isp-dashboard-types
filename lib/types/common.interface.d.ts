import { DatabaseName } from "./database.interfaces";
import { RepeatEnum } from "./plans.interface";
export type AddressType = {
    line1: string;
    line2: string;
    pin: string;
    city: string;
    state: string;
    country: string;
    groupBy: string;
    geoLocation?: string[];
};
export type NameType = {
    fname: string;
    lname: string;
};
export type PricingType = {
    repeat: RepeatEnum;
    amount: number;
    tax: TaxType[];
    total: number;
};
export type DiscountType = {
    rate: number;
    amount: number;
    type: string;
};
export type TaxType = {
    enable: boolean;
    rate: number;
    name: string;
};
export type Objects = {
    [key: string]: string;
};
export type ReferenceType = {
    dbName: DatabaseName;
    refId: string;
};
export type ObjectType = {
    [key: string]: any | ObjectType;
};
export type SuggestionType = {
    title: string;
    message: string;
    type: SuggestionEnum;
    icon?: string;
};
export type NotifySMSPayloadType = {
    sendTo: SendToType;
    data: ObjectType;
};
export type NotifySMTPPayloadType = {
    sendTo: SendToType;
    data: ObjectType;
};
export type NotifyFCMPayloadType = {
    userIds: string[];
    data: ObjectType;
};
export type SendToType = {
    userId: string;
    email?: string;
    phone?: string;
};
export declare enum UserTypeEnum {
    CUSTOMER = "CUSTOMER",
    ADMIN = "ADMIN"
}
export declare enum PlatformTypeEnum {
    WEB = "WEB",
    APP = "APP"
}
export declare enum SuggestionEnum {
    SUCCESS = "success",
    ERROR = "error",
    WARNING = "warning",
    INFO = "info"
}
export declare enum IconTypeEnum {
    LOGIN_ALERT = "LOGIN_ALERT"
}
export type TagType = {
    label: string;
    icon: string;
    bg: string;
};
