import { EmailPriorityEnum } from '@sahilks/isp-init-notifier-sdk/lib/types/emails.types';
import { EmailAuthTypeEnum } from "@sahilks/isp-init-notifier-sdk";
import { InputSelectEnumType } from "../app";


export const TemplateEmailAuthType: InputSelectEnumType[] = [
    {
        key: 'BASIC_AUTH',
        name: 'Basic Authentication'
    },
    {
        key: 'ADV_AUTH',
        name: 'Advanced Authentication'
    },

]
export const TemplateEmailPriorityType: InputSelectEnumType[] = [
    {
        key: 'HIGH',
        name: 'High'
    },
    {
        key: 'MEDIUM',
        name: 'Medium'
    },
    {
        key: 'LOW',
        name: 'Low'
    },
]