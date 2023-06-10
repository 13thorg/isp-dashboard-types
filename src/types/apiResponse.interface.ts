import { RolesEnum } from "./roles.interface"
import { TableHeaderType } from "./table.interface"

export type RecordsOutputType<T = undefined> = {
    records: T extends undefined ? any[] : T[],
    totalCount: number,
    tableHeader: TableHeaderType[],
    roles: { [key in RolesEnum]: boolean },
    [key: string]: any
}

export type RecordOutputType<T = undefined> = {
    record: T extends undefined ? any : T,
    roles: { [key in RolesEnum]: boolean },
    [key: string]: any
}

export type UpsetOutputType = {
    _id: string
    record: any,
}