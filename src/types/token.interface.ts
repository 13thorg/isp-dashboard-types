import { AssetsAythType } from "./assets.interface"
import { NameType, UserTypeEnum } from "./common.interface"

export type TokenPayloadType = {
    _id: string,
    name: NameType,
    userType: UserTypeEnum,
    assets: AssetsAythType
}