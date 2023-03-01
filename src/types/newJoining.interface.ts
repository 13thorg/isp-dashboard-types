import { AddressType, NameType } from "./common.interface"

export type NewJoiningInputType = {
    _id?: string,
    name: NameType,
    companyName: string,
    email: string,
    phone: string,
    ispProvider: string,
    nimberOfConnections: number,
    estimateConnectionDate: Date,
    plan: string,
    planDuration: string,
    address: AddressType,
    location?: string[],
    reason?: string,
    status: NewJoiningEnum,
    createdAt?: Date,
    updatedAt?: Date
}

export enum NewJoiningEnum {
    OPEN = "OPEN",
    READY_FOR_CONNECTION = "READY_FOR_CONNECTION",
    DONE = "DONE",
    REJECTED = "REJECTED"
}