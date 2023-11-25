export type AlertMessageType = {
    type: AlertMessageTypeEnum,
    title: string,
    message: string
}

export enum AlertMessageTypeEnum {
    info = 'info',
    warning = 'warning',
    error = 'error',
    success = 'success'
}