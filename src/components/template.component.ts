import { InputSelectEnumType } from "../app";
import { EmailAuthTypeEnum, EmailPriorityEnum } from "../types/emails.types";


export const TemplateEmailAuthType: InputSelectEnumType[] = [
    {
        key: EmailAuthTypeEnum.BASIC_AUTH,
        name: 'Basic Authentication'
    },
    {
        key: EmailAuthTypeEnum.ADV_AUTH,
        name: 'Advanced Authentication'
    },

]
export const TemplateEmailPriorityType: InputSelectEnumType[] = [
    {
        key: EmailPriorityEnum.HIGH,
        name: 'High'
    },
    {
        key: EmailPriorityEnum.MEDIUM,
        name: 'Medium'
    },
    {
        key: EmailPriorityEnum.LOW,
        name: 'Low'
    },
]