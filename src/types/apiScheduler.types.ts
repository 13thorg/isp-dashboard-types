export type ApiSchedulerType = {
    id?: number
    uid?: string
    method?: ApiSchedulerMethods
    callBackUrl?: string
    payload?: string,
    headers?: string
    executeAfterDate?: Date,
    status?: boolean,
    createdAt?: Date,
    updatedAt?: Date
}

export enum ApiSchedulerMethods {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE',
}

export type ApiSchedulerInputType = {
    method?: ApiSchedulerMethods
    callBackUrl: string
    payload?: Record<string, any>,
    headers?: Record<string, any>
    executeAfterDate: Date
}

export type APISchedulerResponseType = {
    uid: string,
    id: number
}