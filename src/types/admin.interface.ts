import { AddressType, NameType } from "./common.interface"

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
    createdAt?: Date,
    updatedAt?: Date
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