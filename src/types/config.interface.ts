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
    ADMIN_DASHBOARD_MENU = "ADMIN_DASHBOARD_MENU",


    COMPANY_PROFIL_PIC = "COMPANY_PROFIL_PIC",
    COMPANY_NAME = "COMPANY_NAME",
    COMPANY_DISPLAY_NAME = "COMPANY_DISPLAY_NAME",
    COMPANY_EMAIL = "COMPANY_EMAIL",
    COMPANY_PHONE1 = "COMPANY_PHONE1",
    COMPANY_PHONE2 = "COMPANY_PHONE2",
    COMPANY_ADDRESS_LINE1 = "COMPANY_ADDRESS_LINE1",
    COMPANY_ADDRESS_LINE2 = "COMPANY_ADDRESS_LINE2",
    COMPANY_ADDRESS_CITY = "COMPANY_ADDRESS_CITY",
    COMPANY_ADDRESS_PIN = "COMPANY_ADDRESS_PIN",
    COMPANY_ADDRESS_STATE = "COMPANY_ADDRESS_STATE",
    COMPANY_ADDRESS_COUNTRY = "COMPANY_ADDRESS_COUNTRY",
}

export type ConfigObjectList = {
    [key in ConfigKeyEnum]: ConfigType
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