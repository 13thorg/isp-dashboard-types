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
    createdAt?: Date,
    updatedAt?: Date
}