import { type } from "os"
import { RolesEnum } from "./roles.interface"

export type ConfigType = {
    _id?: string,
    name: string,
    description: string,
    key: ConfigKeyEnum,
    value: any,
    CreatedAt?: Date,
    UpdatedAt?: Date
}

export enum ConfigKeyEnum {
    DEFAULT_PROFILE_URL = "DEFAULT_PROFILE_URL",
    INVOICE_NOTE = "INVOICE_NOTE",
    COMPANY_NAME = "COMPANY_NAME",
    COMPANY_IMAGE = "COMPANY_IMAGE",
    ADMIN_DASHBOARD_MENU = "ADMIN_DASHBOARD_MENU"
}

export type AdminDashboardMenu = {
    visibleIf: RolesEnum[] | 'ALL',
    name: string,
    desc: string,
    icon: MenuIconType,
    path?: MenuPathType,
    childrens?: AdminDashboardMenu[]
}

export type MenuIconType = {
    type: MenuIconEnum,
    value: string
}

export enum MenuIconEnum {
    CUSTOMICON = "CUSTOMICON",
    FLATICON = "FLATICON",
    IMAGE = "IMAGE",
}

export type MenuPathType = {
    type: MenuPathEnum,
    value: string
}

export enum MenuPathEnum {
    URL = "URL",
    OPEN = "OPEN",
}