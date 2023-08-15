import { AddressOneType, AddressType, NameType, OnlineStatusEnum } from "./common.interface"
import { RolesOnAttendanceType, RolesType } from "./roles.interface"

export type AdminsType = {
    _id?: string,
    role: string,
    profile: string,
    name: NameType,
    email: string,
    phone: string,
    password: string,
    address: AddressType,
    deleteable: boolean,
    active: boolean,
    status: OnlineStatusEnum,
    notifications?: AdminNotificationConfigType,
    createdAt?: Date,
    updatedAt?: Date
}

export type AdminsOneType = {
    _id?: string,
    role: RolesType,
    profile: string,
    name: NameType,
    email: string,
    phone: string,
    password: string,
    address: AddressOneType,
    deleteable: boolean,
    active: boolean,
    status: OnlineStatusEnum,
    notifications?: AdminNotificationConfigType,
    createdAt?: Date,
    updatedAt?: Date
}

export type AdminAttendanceType = {
    _id: string,
    profile: string,
    name: NameType,
    phone: string,
    email: string,
    role: RolesOnAttendanceType,
    present: number,
    absent: number,
    active: boolean,
}

export enum AttendanceEnum {
    PRESENT = 'PRESENT',
    ABSENT = 'ABSENT',
}

export type AdminNotificationConfigType = {
    loginAlert: boolean
    communicationAlert: boolean
    transactionAlert: boolean
}
