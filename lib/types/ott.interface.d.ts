import { PricingType } from "./common.interface";
export type OttType = {
    _id?: string;
    title: string;
    icon: string;
    description: string;
    price: PricingType;
    groupBy: string;
    CreatedAt?: Date;
    UpdatedAt?: Date;
};
