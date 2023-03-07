import { DatabaseName } from "./database.interfaces"
import { RepeatEnum } from "./plans.interface"

export type AddressType = {
    line1: string,
    line2: string,
    pin: string,
    city: string,
    state: string,
    country: string,
    groupBy: string,
}

export type NameType = {
    fname: string,
    lname: string
}


export type PricingType = {
    repeat: RepeatEnum,
    amount: number,
    tax: TaxType[],
    total: number
}


export type DiscountType = {
    rate: number,
    amount: number,
    type: string
}

export type TaxType = {
    enable: boolean,
    rate: number,
    name: string
}

export type Objects = {
    [key: string]: string
}

export type ReferenceType = {
    dbName: DatabaseName,
    refId: string
}

export type ObjectType = {
    [key: string]: any | ObjectType
}



export type NotificationPayloadType = {
    sendTo: string[],
    userId: string,
    data: ObjectType
}