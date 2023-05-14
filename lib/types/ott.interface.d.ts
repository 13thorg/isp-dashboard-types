import { PricingType } from "./common.interface";
import { GroupType } from "./group.interface";
import { RepeatEnum, VisibleTo } from "./plans.interface";
export type OttType = {
    _id?: string;
    title: string;
    icon: string;
    description: string;
    pricing: PricingType[];
    defaultPrice: RepeatEnum;
    VisibleTo: VisibleTo;
    groupBy: string;
    createdAt?: Date;
    updatedAt?: Date;
};
export type OttOneType = {
    _id?: string;
    title: string;
    icon: string;
    description: string;
    pricing: PricingType[];
    defaultPrice: RepeatEnum;
    VisibleTo: VisibleTo;
    groupBy: GroupType;
    createdAt?: Date;
    updatedAt?: Date;
};
