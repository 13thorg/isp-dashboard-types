export type TableHeaderType = {
  title: string;
  key: string;
  type: TableDataEnum;
  actions?: TableClicksType[];
  middleware?: Function;
  isActive: boolean
};

export type TableClicksType = {
  title: string;
  icon: string;
  action: Function;
};

export enum TableDataEnum {
  string = "string",
  badge = "badge",
  status = "status",
  date = "date",
  agoDate = "agoDate",
}

export type TableModelType = {
  _id: string,
  aid: string,
  collection: string,
  structure: TableHeaderType[]
  createdAt?: Date
  updatedAt?: Date
} 