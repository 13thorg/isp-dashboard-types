import { EmailPriorityEnum } from '@sahilks/isp-init-notifier-sdk/lib/types/emails.types';
import { EmailAuthTypeEnum } from "@sahilks/isp-init-notifier-sdk";
import { InputSelectEnumType } from "../app";


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