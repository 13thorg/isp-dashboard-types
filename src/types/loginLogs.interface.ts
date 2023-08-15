import { UserTypeEnum } from "./common.interface"

export type LoginLogType = {
    _id?: string,
    uid?: string,
    uType?: UserTypeEnum,
    version: string,
    agent: string,
    ip: string,
    platform: string,
    isMobile: boolean,
    createdAt?: string | Date,
    updatedAt?: string | Date
}
