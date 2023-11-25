import { ObjectType } from "./common.interface"

export type SmsConfigType = {
    url: string,
    token: string,
    flowId: string,
    sender: string
}

export type SmsPayloadType = {
    to: string,
    replacement: ObjectType
}