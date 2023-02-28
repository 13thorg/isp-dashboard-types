import { AddressType, NameType } from "./common.interface"

export type NewJoiningInputType = {
    _id?: string,
    name: NameType,
    companyName: string,
    email: string,
    phone: string,
    nimberOfConnections: number,
    connectionType: string,
    ispProvider: string,
    plan: string,
    address: AddressType,
    location: AddressType,
    createdAt?: Date,
    updatedAt?: Date
}