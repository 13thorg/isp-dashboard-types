export type TableHeaderType = {
  title: string;
  key: string;
  type: TableDataEnum;
  actions?: TableClicksType[];
  badgeEnum?: TableHeaderBadgeEnum[]
  middleware?: Function;
  isActive: boolean
};

export type TableClicksType = {
  title: string;
  icon: string;
  action: Function;
};

export type TableHeaderBadgeEnum = {
  color: string,
  bgColor: string,
  title?: string,
  key: string
}

export enum TableDataEnum {
  string = "string",
  currency = "currency",
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