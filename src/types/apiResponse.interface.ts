import { RolesEnum } from "./roles.interface"
import { TableHeaderType } from "./table.interface"

export type RecordsOutputType = {
    records: any[],
    totalCount: number,
    roles: RolesEnum,
    tableHeader: TableHeaderType[]
}

export type RecordOutputType = {
    records: any,
    roles: RolesEnum,
}

export type UpsetOutputType = {
    _id: string
    record: any,
}