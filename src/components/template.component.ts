import { EmailPriorityEnum } from '@sahilks/isp-init-notifier-sdk/lib/types/emails.types';
import { EmailAuthTypeEnum } from "@sahilks/isp-init-notifier-sdk";
import { InputSelectEnumType } from "../app";


export const TemplateEmailAuthType: InputSelectEnumType[] = Object.keys(EmailAuthTypeEnum).map(each => ({ key: (EmailAuthTypeEnum as any)[each], name: each } as InputSelectEnumType))
export const TemplateEmailPriorityType: InputSelectEnumType[] = Object.keys(EmailPriorityEnum).map(each => ({ key: (EmailPriorityEnum as any)[each], name: each } as InputSelectEnumType))