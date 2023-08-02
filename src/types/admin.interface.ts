import { AddressOneType, AddressType, NameType } from "./common.interface"
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
    status: AdminsStatusEnum,
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
    status: AdminsStatusEnum,
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

export type LoginLogType = {
    _id?: string,
    aid?: string,
    version: string,
    agent: string,
    ip: string,
    platform: string,
    isMobile: boolean,
    createdAt: string | Date,
    updatedAt: string | Date
}

export enum AdminsStatusEnum {
    OFFLINE = 'OFFLINE',
    ONLINE = 'ONLINE',
    AWAY = 'AWAY',
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
