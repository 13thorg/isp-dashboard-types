import { AddressType, IspUser, NameType } from "./common.interface"

export type CustomerType = {
    _id?: string,
    profile: string,
    name: NameType,
    companyName: string,
    email: string,
    phone: string,
    password: string,
    ispUser: IspUser[],
    ip: string,
    address: AddressType,
    groupBy: string,
    CreatedAt?: Date,
    UpdatedAt?: Date
}