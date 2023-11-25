import { SocketPurpose, SocketPathDecodeType } from './../types/socket.interface';
import { UserTypeEnum } from './../types/common.interface';

export const generateSocketPath = (userType: UserTypeEnum, purpose: SocketPurpose, str: string = '!') => {
    return `${userType}:::${purpose}:::${str}`;
}

export const decodeSocketPath = (path: string): SocketPathDecodeType => {
    const [userType, purpose, string] = path.split(':::') as any[];
    return {
        purpose,
        string,
        userType
    }
}