export declare type AddressType = {
    line1: string;
    line2: string;
    pin: string;
    city: string;
    state: string;
    country: string;
    groupBy: string;
};
export declare type NameType = {
    fname: string;
    lname: string;
};
export declare type IspUser = {
    uid: string;
    isp: string;
};
export declare type PricingType = {
    amount: number;
    tax: TaxType;
    total: number;
};
export declare type DiscountType = {
    rate: number;
    amount: number;
    type: string;
};
export declare type TaxType = {
    enable: boolean;
    rate: number;
    name: string;
};
export declare type Objects = {
    [key: string]: string;
};
