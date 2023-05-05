import { AddressType, NameType } from "./common.interface"
import { RolesOnAttendanceType } from "./roles.interface"

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

export type AdminAttendanceType = {
    _id: string,
    profile: string,
    name: NameType,
    phone: string,
    email: string,
    role: RolesOnAttendanceType,
    present: number,
    absent: number
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