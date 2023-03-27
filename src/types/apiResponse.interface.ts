import { RolesEnum } from "./roles.interface"
import { TableHeaderType } from "./table.interface"

export type RecordsOutputType = {
    records: any[],
    totalCount: number,
    tableHeader: TableHeaderType[],
    roles: { [key in RolesEnum]: boolean },
}

export type RecordOutputType = {
    record: any,
    roles: { [key in RolesEnum]: boolean },
}

export type UpsetOutputType = {
    _id: string
    record: any,
}