import { ObjectType } from "./common.interface"

export type FcmConfigType = {
    url: string,
    token: string,
    mutable_content: boolean,
    sound: string,
    click_action: string,
    icon: string
}

export type FcmPayloadType = {
    to: string[],
    title: string,
    description: string,
}



export type FcmNotificationType = {
    _id?: string
    notifyFor: NotifyForEnum,
    ref: string,
    compose: NotificationComposeType
    makeAsRead?: boolean,
    readAt?: Date,
    createdAt?: Date,
    updatedAt?: Date
}

export type NotificationComposeType = {
    title: string,
    descricption: string,
    message: string,
    icon: string,
    click_action: string
}

export enum NotifyForEnum {
    ADMIN = "ADMIN",
    CUSTOMER = "CUSTOMER",
}

export type FmcCredForAdminType = {
    userId: string,
    userType: FmcCredUserTypeEnum
    fcmKey: string,
    platform: FmcCredPlatFormEnum,
    createdAt?: Date | string
    updatedAt?: Date | string
}

export enum FmcCredPlatFormEnum {
    WEBAPP = 'WEBAPP',
    MOBILE = 'MOBILE'
}

export enum FmcCredUserTypeEnum {
    CUSTOMER = 'CUSTOMER',
    ADMIN = 'ADMIN'
}