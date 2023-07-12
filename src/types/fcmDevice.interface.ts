import { PlatformTypeEnum, UserTypeEnum } from "./common.interface";

export type FCMDeviceType = {
    _id?: string,
    userId: string,
    userType: UserTypeEnum,
    fcmKey: string,
    platform: PlatformTypeEnum,
    device: FCMDevicePayloadType,
    createdAt?: Date
    updatedAt?: Date
}

export type FCMDevicePayloadType = {
    name: string,
    key: string
}