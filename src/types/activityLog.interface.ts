import { AdminsType } from "./admin.interface"

export type ActivityLogType = {
    _id?: string,
    activityType?: ActivityLogEnum,
    createdBy?: AdminsType,
    difference?: any,
    message?: string,
    createdAt?: Date,
    updatedAt?: Date
}

export type ActivityLogTypeInput = {
    activityType?: ActivityLogEnum,
    createdBy?: string,
    message?: string,
    difference?: any,
}

export enum ActivityLogEnum {
    CUSTOMER_COLLECTION = 'CUSTOMER_COLLECTION',
}