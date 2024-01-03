import { DatabaseName } from "./database.interfaces"
import { GroupType } from "./group.interface"

export type AddressType = {
    line1: string,
    line2: string,
    pin: string,
    city: string,
    state: string,
    country: string,
    groupBy: string,
    geoLocation?: string[],
}

export type AddressOneType = {
    line1: string,
    line2: string,
    pin: string,
    city: string,
    state: string,
    country: string,
    groupBy: GroupType,
    geoLocation?: string[],
}

export type NameType = {
    fname: string,
    lname: string
}


export type PricingType = {
    repeat: RepeatEnum,
    amount: number,
    tax: TaxType[],
    total: number
}


export type DiscountType = {
    rate: number,
    amount: number,
    type: string
}

export type TaxType = {
    enable: boolean,
    rate: number,
    name: string
}

export type Objects = {
    [key: string]: string
}

export type ReferenceType = {
    dbName: DatabaseName,
    refId: string
}

export type ObjectType = {
    [key: string]: any | ObjectType
}

export type SuggestionType = {
    title: string,
    message: string,
    type: SuggestionEnum,
    icon?: string
}

export type NotifySMSPayloadType = {
    sendTo: SendToType
    data: ObjectType
}

export type NotifySMTPPayloadType = {
    sendTo: SendToType
    data: ObjectType
}

export type NotifyFCMPayloadType = {
    userIds: string[]
    data: ObjectType,
}

export type SendToType = {
    userId: string,
    email?: string,
    phone?: string
}

export enum UserTypeEnum {
    CUSTOMER = 'CUSTOMER',
    ADMIN = 'ADMIN'
}

export enum PlatformTypeEnum {
    WEB = 'WEB',
    APP = 'APP'
}

export enum SuggestionEnum {
    SUCCESS = 'success',
    ERROR = 'error',
    WARNING = 'warning',
    INFO = 'info'
}

export enum IconTypeEnum {
    LOGIN_ALERT = 'LOGIN_ALERT'
}

export type TagType = { label: string, icon: string, bg: string }

export type CardInputType = {
    label: string,
    value: string,
    suggession?: CardInputSuggessionType,
    isOneLine?: boolean
}

export type CardInputSuggessionType = {
    icon: string,
    color: string,
    text: string
}

export enum SuggessionTypeEnum {
    INFO = 'INFO',
    SUCCESS = 'SUCCESS',
    WARNING = 'WARNING',
    ERROR = 'ERROR'
}

export enum OnlineStatusEnum {
    ONLINE = 'ONLINE',
    OFFLINE = 'OFFLINE',
    AWAY = 'AWAY',
}

export enum RepeatEnum {
    ONE_TIME = 'ONE_TIME',
    WEEKLY = 'WEEKLY',
    MONTHLY = 'MONTHLY',
    QUARTERLY = 'QUARTERLY',
    SEMIANNUALLY = 'SEMIANNUALLY',
    ANNUALLY = 'ANNUALLY',
}

export enum TimeUnitEnum {
    SECOND = 'SECOND',
    MINUTE = 'MINUTE',
    HOUR = 'HOUR',
    DAY = 'DAY',
}

export enum TimeUnits {
    SECOND = 1,
    MINUTE = 60,
    HOUR = 3600,
    DAY = 86400,
}

export enum TimeUnitsForMongoDBENum {
    SECOND = 'second',
    MINUTE = 'minute',
    HOUR = 'hour',
    DAY = 'day',
}

export type LineBareGraphType = {
    key: string,
    title: string,
    value: string,
    backgroundColor: string
}

export type DropDownMenuGroupType = {
    title?: string,
    options: DropDownMenuType[],
}

export type DropDownMenuType = {
    title: string,
    key: string,
    icon?: string,
    isDisabled: boolean,
    bgColor?: string,
    color?: string,
    onClick?: (data: DropDownMenuType) => void
}