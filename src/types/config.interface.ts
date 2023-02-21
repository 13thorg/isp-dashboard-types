export type ConfigType = {
    _id?: string,
    key: ConfigKeyEnum,
    value: any,
    CreatedAt?: Date,
    UpdatedAt?: Date
}

export enum ConfigKeyEnum {
    INVOICE_NOTE,
    COMPANY_NAME,
    COMPANY_IMAGE
}