import { PricingType, RepeatEnum } from "./common.interface"
import { GroupType } from "./group.interface"
import { OttType } from "./ott.interface"

export type PlansType = {
    _id?: string,
    title: string,
    isp: string,
    icon: string,
    description: string,
    keyPoints: string[],
    pricing: PricingType[],
    defaultPrice: RepeatEnum,
    popular: boolean,
    visibleTo: VisibleTo,
    ott: string[],
    groupBy: string,
    createdAt?: Date,
    updatedAt?: Date,
}
export type PlansOneType = {
    _id?: string,
    title: string,
    isp: GroupType,
    icon: string,
    description: string,
    keyPoints: string[],
    pricing: PricingType[],
    defaultPrice: RepeatEnum,
    popular: boolean,
    visibleTo: VisibleTo,
    ott: OttType[],
    groupBy: GroupType,
    createdAt?: Date,
    updatedAt?: Date,
}

export type VisibleTo = {
    customer_mobile: boolean
    customer_web: boolean
    customer_Care: boolean
    customer_Promotion: boolean
}

export type RepeatType = {
    type: RepeatEnum,
    discount: number
}

