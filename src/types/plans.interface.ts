import { PricingType } from "./common.interface"
import { OttType } from "./ott.interface"

export type PlansType = {
    _id?: string,
    title: string,
    isp: string,
    description: string,
    keyPoints: string[],
    price: PricingType,
    popular: boolean,
    ott: OttType[],
    repeat: RepeatType[]
    groupBy: string,
    CreatedAt?: Date,
    UpdatedAt?: Date,
}

export type RepeatType = {
    type: RepeatEnum,
    discount: number
}

export enum RepeatEnum {
    ONE_TIME,
    WEEKLY,
    MONTHLY,
    QUARTERLY,
    SEMIANNUALLY,
    ANNUALLY,
}

