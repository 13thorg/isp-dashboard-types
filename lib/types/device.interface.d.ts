import { GroupType } from "./group.interface";
export type DevicesType = {
    _id?: string;
    name: string;
    description?: string;
    device: DevicesDetailsType;
    health: DevicesHealthType;
    configuration?: Record<DeviceConfigurationEnum, string>;
    type: string;
    deleteable: boolean;
    editable: boolean;
    rootDevice: boolean;
    images: string[];
    customer?: string;
    createdAt?: string | Date;
    updatedAt?: string | Date;
};
export type DevicesDetailsType = {
    deviceName: string;
    companyName?: string;
    model: string;
    manufactureAt: string | Date;
    price: number;
    warranty: number;
};
export type DevicesHealthType = {
    working: boolean;
    repair?: DevicesRepairType[];
};
export type DevicesRepairType = {
    date: Date;
    note?: string;
    price?: number;
};
export type DeviceMappedType = {
    _id?: string;
    name: string;
    description?: string;
    device: DevicesDetailsType;
    health: DevicesHealthType;
    type: Partial<GroupType>;
    child: DeviceMappedType[];
};
export declare enum DeviceConfigurationEnum {
    ip = "ip",
    port = "port",
    mac = "mac",
    uid = "uid",
    setupBoxKey = "setupBoxKey"
}
export type DtType = {
    _id?: string;
    typeName: string;
    description?: string;
    configurations: DtConfigType[];
    linkableDeviceType: string[];
    linkedDevices?: number;
    createdAt?: string | Date;
    updatedAt?: string | Date;
};
export type DtConfigType = {
    displayName: string;
    key: string;
    isRequired: boolean;
    placeholder?: string;
    regex?: string;
};
