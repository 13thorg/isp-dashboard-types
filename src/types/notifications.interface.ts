import { UserTypeEnum } from "./common.interface";

export type NotifyFCMPayload = {
    sendTo: NotifyFCMSendToType[],
    title: string,
    description: string,
    message: string,
};

export type NotifyFCMActionType = {
    label: string;
    onClick: string;
};

export type NotifyFCMSendToType = {
    fcmKeys: string[],
    userId: string
};

export type NotifyFCMConfigType = {
    url: string;
    token: string;
    mutable_content: boolean;
    sound: string;
    action: NotifyFCMActionType[];
    icon: string;
    image: string;
};

export type FCMNotificationType = {
    to?: string;
    registration_ids?: string[];
    data: FCMNotificationData;
    priority?: FCMPriority;
    collapse_key?: string;
    content_available?: boolean;
    mutable_content?: boolean;
    time_to_live?: number;
    restricted_package_name?: string;
    dry_run?: boolean;
};

export declare enum FCMPriority {
    NORMAL = "normal",
    HIGH = "high"
}

export type FCMNotificationData = {
    notification: NotificationComposeType;
    actions: NotifyFCMActionType[];
};

export type NotificationComposeType = {
    title: string;
    descricption: string;
    message?: string;
    icon?: string;
    image?: string;
};


export type Notification = {
    _id?: string
    userType: UserTypeEnum,
    userIds: string[],
    payload: NotificationPayloadType,
    readByIds: string[],
    makeAsRead?: boolean, /*THIS IS TEMP KEY*/
    createdAt?: Date,
    updatedAt?: Date
};

export type NotificationPayloadType = {
    title: string,
    description: string,
    message: string,
    icon: string,
    image?: string
    actions: NotifyFCMActionType[]
}
