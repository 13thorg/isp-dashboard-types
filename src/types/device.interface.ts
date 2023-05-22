
export type DevicesType = {
    _id?: string,
    name: string,
    description?: string,
    device: DevicesDetailsType,
    health: DevicesHealthType,
    configuration?: Record<DeviceConfigurationEnum, string>,
    type: string,
    images: string[],
    customer?: string,
    createdAt?: string | Date,
    updatedAt?: string | Date
}

export type DevicesDetailsType = {
    deviceName: string,
    companyName?: string,
    model: string,
    manufactureAt: string | Date,
    price: number,
    warranty: number,
}

export type DevicesHealthType = {
    working: boolean,
    repair?: DevicesRepairType[]
}

export type DevicesRepairType = {
    date: Date
    note?: string,
    price?: number
}

export enum DeviceConfigurationEnum {
    ip = 'ip',
    port = 'port',
    mac = 'mac',
    uid = 'uid',
    setupBoxKey = 'setupBoxKey',
}