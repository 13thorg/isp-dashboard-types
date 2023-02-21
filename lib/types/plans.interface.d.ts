import { PricingType } from "./common.interface";
import { OttType } from "./ott.interface";
export declare type PlansType = {
    _id?: string;
    title: string;
    isp: string;
    description: string;
    keyPoints: string[];
    price: PricingType;
    popular: boolean;
    ott: OttType[];
    repeat: RepeatType[];
    groupBy: string;
    CreatedAt?: Date;
    UpdatedAt?: Date;
};
export declare type RepeatType = {
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
