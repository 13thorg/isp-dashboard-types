import { PricingType } from "./common.interface"
import { RepeatEnum, VisibleTo } from "./plans.interface"

export type OttType = {
    _id?: string,
    title: string,
    icon: string,
    description: string,
    pricing: PricingType[],
    defaultPrice: RepeatEnum
    VisibleTo:VisibleTo
    groupBy: string,
    CreatedAt?: Date,
    UpdatedAt?: Date
}