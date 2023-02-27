import { PricingType } from "./common.interface";
export type PlansType = {
    _id?: string;
    title: string;
    isp: string;
    icon: string;
    description: string;
    keyPoints: string[];
    pricing: PricingType[];
    defaultPrice: RepeatEnum;
    popular: boolean;
    visibleTo: VisibleTo;
    ott: string[];
    repeat: RepeatType[];
    groupBy: string[];
    CreatedAt?: Date;
    UpdatedAt?: Date;
};
export type VisibleTo = {
    customer_mobile: boolean;
    customer_web: boolean;
    customer_Care: boolean;
    customer_Promotion: boolean;
};
export type RepeatType = {
    type: RepeatEnum;
    discount: number;
};
export declare enum RepeatEnum {
    ONE_TIME = 0,
    WEEKLY = 1,
    MONTHLY = 2,
    QUARTERLY = 3,
    SEMIANNUALLY = 4,
    ANNUALLY = 5
}
