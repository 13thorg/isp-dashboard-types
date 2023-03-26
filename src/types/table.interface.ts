export type TableHeaderType = {
  title: string;
  key: string;
  type: TableDataEnum;
  actions?: TableClicksType[];
  middleware?: Function;
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
