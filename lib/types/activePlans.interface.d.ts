import { PricingType } from "./common.interface";
import { PlansType, RepeatType } from "./plans.interface";
export declare type ActivePlansType = {
    _id?: string;
    Plan: string | PlansType;
    repeat: RepeatType;
    price: PricingType;
    startFrom: string;
    EndAt: string;
    nextBilling: NextBillingType;
    status: PlanStatusEnum;
    CreatedAt?: Date;
    UpdatedAt?: Date;
};
export declare type NextBillingType = {
    enable: boolean;
    generateBefore: number;
};
export declare enum PlanStatusEnum {
    ENABLE = 0,
    DISABLE = 1
}
