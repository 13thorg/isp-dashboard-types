export type GroupType = {
    _id?: string,
    name: string,
    groupBy: GroupByEnum,
    subGroup?: string[],
    deletable: boolean,
    editable: boolean,
    key: string,
    color: string,
    createdAt?: Date,
    updatedAt?: Date,
}

export enum GroupByEnum {
    FOR_CUSTOMER = 'FOR_CUSTOMER',
    FOR_ADDRESS = 'FOR_ADDRESS',
    FOR_PLANS = 'FOR_PLANS',
    FOR_ISP = 'FOR_ISP',
    FOR_DEVICE_TYPE = 'FOR_DEVICE_TYPE',
}