import { PricingType } from "./common.interface"
import { PlansType, RepeatType } from "./plans.interface"

export type ActivePlansType = {
    _id?: string,
    Plan: string | PlansType,
    repeat: RepeatType,
    price: PricingType,
    startFrom: string,
    EndAt: string,
    nextBilling: NextBillingType,
    status: PlanStatusEnum,
    CreatedAt?: Date,
    UpdatedAt?: Date
}


export type NextBillingType = {
    enable: boolean,
    generateBefore: number,
}


export enum PlanStatusEnum {
    ENABLE,
    DISABLE
}