export type ConfigType = {
    _id?: string;
    name: string;
    description: string;
    key: ConfigKeyEnum;
    value: any;
    CreatedAt?: Date;
    UpdatedAt?: Date;
};
export declare enum ConfigKeyEnum {
    DEFAULT_PROFILE_URL = "DEFAULT_PROFILE_URL",
    INVOICE_NOTE = "INVOICE_NOTE",
    COMPANY_NAME = "COMPANY_NAME",
    COMPANY_IMAGE = "COMPANY_IMAGE"
}
