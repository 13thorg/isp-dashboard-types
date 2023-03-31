export type InputGroupType = {
    title: string,
    description: string,
    view: GroupViewEnum,
    inputs: InputType[]
}

export type InputType = {
    title: string,
    key: string,
    type: InputTypeEnum,
    enum: InputSelectEnumType[],
    disabled: boolean,
    errorMessages: string[],
    onChange: Function,
    onKeyUp: Function
}

export type InputSelectEnumType = {
    key: string,
    name: string
}

export enum GroupViewEnum {
    list = 'list',
    grid = 'grid'
}

export enum InputTypeEnum {
    text = 'text',
    number = 'number',
    select = 'select',
    checkbox = 'checkbox',
    date = 'date',
    time = 'time',
    color = 'color',
}