import { ObjectType } from "./common.interface"

export type TemplatesUpdateType = {
    _id?: string,
    about: TemplateAboutType,
    title: string,
    message: string,
    active: boolean,
    description: string,
}

export type TemplatesType = {
    _id?: string,
    about: TemplateAboutType,
    title: string,
    message: string,
    deleteable: boolean,
    active: boolean,
    keys: TemplatesRequiredKeysType[],
    description: string,
    sendBy: SendByEnum,
    templateFor: TemplateForEnum,
    sms?: TemplateSmsType,
    email?: TemplateEmailType,
    notification?: TemplateNotificationType,
    createdAt?: Date,
    updatedAt?: Date
}

export type TemplatesRequiredKeysType = {
    key: string,
    template: string,
}

export type TemplateAboutType = {
    title: string,
    description: string,
}

export type TemplateSmsType = {
    url: string,
    token: string,
    flowId: string,
    sender: string,
}

export type TemplateEmailType = {
    user: string,
    pass: string,
    service: string,
}

export type TemplateNotificationType = {
    url: string,
    token: string,
    mutable_content?: boolean,
    sound?: string,
    action: TemplateNotificationClickType[],
    icon: string
}

export type TemplateNotificationClickType = {
    label: string,
    onClick: string
}
export enum TemplateForEnum {
    CUSTOMER_EMAIL_VERIFICATION = "CUSTOMER_EMAIL_VERIFICATION",
    CUSTOMER_PHONE_VERIFICATION = "CUSTOMER_PHONE_VERIFICATION",
    CUSTOMER_PENDING_DUE = "CUSTOMER_PENDING_DUE",
    CUSTOMER_TRANSACTION_SUCCESS = "CUSTOMER_TRANSACTION_SUCCESS",
    CUSTOMER_TRANSACTION_FAILED = "CUSTOMER_TRANSACTION_FAILED",
    CUSTOMER_WELCOME_LETTER = "CUSTOMER_WELCOME_LETTER",
    CUSTOMER_INTERNET_CONNECTION_LOST = "CUSTOMER_INTERNET_CONNECTION_LOST",
    CUSTOMER_INTERNET_CONNECTION_DONE = "CUSTOMER_INTERNET_CONNECTION_DONE",

    ADMIN_LOGIN_ALERT = "ADMIN_LOGIN_ALERT",
}

export enum SendByEnum {
    SMS = "SMS",
    EMAIL = "EMAIL",
    PUSH_NOTIFICATION = "PUSH_NOTIFICATION",
}


export enum TemplatesDataTypeEnum {
    STRING_TYPE = "STRING_TYPE",
    ARRAY_TYPE = "ARRAY_TYPE",
}

