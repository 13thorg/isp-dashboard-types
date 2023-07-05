import { UserTypeEnum } from "./common.interface";
import { NotificationComposeType } from "./fcm.interface";

export type Notification = {
    _id?: string
    notifyFor: UserTypeEnum,
    ref: string[],
    compose: NotificationComposeType,
    readBy?: string[],
    createdAt?: Date,
    updatedAt?: Date
};