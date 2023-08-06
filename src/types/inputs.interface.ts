export type InputGroupType = {
  title: string;
  key: string;
  description: string;
  view: GroupViewEnum;
  inputs: InputType[];
};

export type InputType = {
  title: string;
  placeholder?: string;
  key: string;
  type: InputTypeEnum;
  enum: InputSelectEnumType[];
  disabled: boolean;
  errorMessages: string[];
  zodValidator: any;
  value: any;
  dicumentLimit?: number
  onSearch?: (value: string, page?: number, count?: number) => Promise<{ list: InputSearchSelectEnumType[], totalCount: number }>;
  onChange?: (each: InputType, i: number, value: any) => void;
  onKeyUp?: (each: InputType, i: number, value: any) => void;
};

export type InputSelectEnumType = {
  key: string;
  name: string;
};

export type InputSearchSelectEnumType = {
  key: string;
  name: string;
  description?: string;
  image?: string;
};

export type FilterInputType = {
  title: string,
  description?: string,
  valueType: FilterValueTypeEnum,
  inputType: FilterInputTypeEnum,
  value: any[],
  enum?: InputSelectEnumType[],
  onSearch?: (value: string, page?: number, count?: number) => Promise<InputSearchSelectResp>;
  onChange?: (each: InputType, i: number, value: any) => void;
  onKeyUp?: (each: InputType, i: number, value: any) => void;
}

export type InputSearchSelectResp = { list: InputSearchSelectEnumType[], totalCount: number }

export enum FilterValueTypeEnum {
  boolean = 'boolean',
  date = 'date',
  objectId = 'objectId',
  number = 'number',
  string = 'string'
}

export enum FilterInputTypeEnum {
  date = 'date',
  dateRange = 'dateRange',
  number = 'number',
  numberRange = 'numberRange',
  text = 'text',
  multiSelect = 'multiSelect',
  searchAndMultiSelect = 'searchAndMultiSelect'
}

export enum GroupViewEnum {
  list = "list",
  grid = "grid",
}

export enum InputTypeEnum {
  text = "text",
  number = "number",
  numberAsString = "numberAsString",
  select = "select",
  multiSelect = "multiSelect",
  searchSelect = "searchSelect",
  searchMultiSelect = "searchMultiSelect",
  checkbox = "checkbox",
  date = "date",
  time = "time",
  color = "color",
  image = "image",
  document = "document",
}
