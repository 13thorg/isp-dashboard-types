export type ConfigType = {
    _id?: string;
    key: ConfigKeyEnum;
    value: any;
    CreatedAt?: Date;
    UpdatedAt?: Date;
};
export declare enum ConfigKeyEnum {
    INVOICE_NOTE = 0,
    COMPANY_NAME = 1,
    COMPANY_IMAGE = 2
}
