export type EmailType = {
    id?: number
    uid?: string,
    seurce?: boolean
    host?: string
    service?: string,
    authType?: EmailAuthTypeEnum
    auth?: string
    fromTitle?: string
    to?: string
    subject?: string
    html?: string
    text?: string
    errorNote?: string,
    executeAfterDate?: Date,
    extraDate?: string,
    priority?: EmailPriorityEnum
    createdAt?: Date,
    updatedAt?: Date
}

export enum EmailAuthTypeEnum {
    ADV_AUTH = 'ADV_AUTH',
    BASIC_AUTH = 'BASIC_AUTH',
}

export enum EmailPriorityEnum {
    HIGH = '1',
    MEDIUM = '2',
    LOW = '3'
}

export type EmailInputType = {
    configs: EmailConfigInputType
    payloads: EmailPayloadInputType[]
}

export type EmailResponseType = {
    uid: string,
    id: number
}

export type EmailConfigInputType = {
    seurce?: boolean
    host: string
    service: string,
    authType?: EmailAuthTypeEnum
    auth: string
    executeAfterDate: Date,
    priority?: EmailPriorityEnum
}

export type EmailPayloadInputType = {
    fromTitle: string
    to: string
    subject: string
    html?: string
    text?: string
}

