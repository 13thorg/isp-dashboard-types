import { AddressType, NameType } from "./common.interface";
export declare type AdminsType = {
    _id?: string;
    profile: string;
    name: NameType;
    email: string;
    phone: string;
    password: string;
    address: AddressType;
    CreatedAt?: Date;
    UpdatedAt?: Date;
};
