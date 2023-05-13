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
  color = "color",
  date = "date",
  agoDate = "agoDate",
  image = "image",
}

export type TableModelType = {
  _id: string,
  aid: string,
  collectionName: string,
  structure: TableHeaderType[]
  createdAt?: Date
  updatedAt?: Date
} 