import { AdminsType } from "./admin.interface"
import { RepeatEnum } from "./common.interface"
import { Customer } from "./customers.interface"
import { GroupType } from "./group.interface"
import { PlansType } from "./plans.interface"

export type ServiceType = {
    _id?: string,
    cid: string,
    serviceType: ServiceTypeEnum,
    isDeleted: boolean,
    items: ServiceItemType[],
    discount: ServiceDiscountType[],
    billingScheduleConfig: ServicBillingScheduleConfigType,
    note?: string,
    isp: string,
    status: boolean,
    createdAt?: Date,
    createdBy?: string,
    updatedAt?: Date,
    updatedBy?: string,
}

export type ServiceOneType = {
    _id?: string,
    cid: Customer,
    serviceType: ServiceTypeEnum,
    isDeleted: boolean,
    items: ServiceItemOneType[],
    discount: ServiceDiscountType[],
    billingScheduleConfig: ServicBillingScheduleConfigType,
    note?: string,
    isp: GroupType,
    status: boolean,
    createdAt?: Date,
    createdBy?: AdminsType,
    updatedAt?: Date,
    updatedBy?: AdminsType,
}

export enum ServiceTypeEnum {
    SERVICE_FOR_PLAN = "SERVICE_FOR_PLAN"
}

export type ServiceItemType = {
    itemId: string,
    customPrice: number,
    customTax: number,
    quantity: number,
    total: number,
}

export type ServiceItemOneType = {
    itemId: PlansType,
    customPrice: number,
    customTax: number,
    total: number,
    quantity: number,
}

export type ServiceDiscountType = {
    title: string,
    amount: number,
    percentage: number,
}

export type ServicBillingScheduleConfigType = {
    startDate: Date | string,
    endDate?: Date | string,
    billingCycle: RepeatEnum,
    nextScheduledDate: Date | string,
    nextScheduledStatus: boolean,
}