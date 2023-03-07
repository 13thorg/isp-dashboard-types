import { ObjectType } from "./common.interface"

export type FcmConfigType = {
    url: string,
    token: string,
    mutable_content: boolean,
    sound: string,
    click_action: string
}

export type FcmPayloadType = {
    to: string[],
    title: string,
    description: string,
}