import { UserTypeEnum } from "./common.interface"

export enum SocketPurpose {
    ACTIVE_STATUS = 'ACTIVE_STATUS',
    NOTIFICATIONS = 'NOTIFICATIONS',
    LOGOUT_ALL = 'LOGOUT_ALL',
    MESSAGING = 'MESSAGING',
    CONSOLE_LOG = 'CONSOLE_LOG',
    TRANSACTION_UPDATE = 'TRANSACTION_UPDATE'
}

export enum SocketType {
    JOIN_ROOM = 'JoinRoom',
    LEAVE_ROOM = 'leaveRoom',
    DISCONNECT = 'disconnect',
    CONNECT = 'connect',
    CONNECTION = 'connection',
}

export type SocketPathDecodeType = {
    userType: UserTypeEnum
    purpose: SocketPurpose
    string: string
}