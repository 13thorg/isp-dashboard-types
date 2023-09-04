import { RepeatEnum } from "../types/common.interface";

export const getTimeFromRepeatType = (type: RepeatEnum) => {
    if (type === RepeatEnum.WEEKLY) return getTimeFromDays(7);
    if (type === RepeatEnum.MONTHLY) return getTimeFromDays(30);
    if (type === RepeatEnum.QUARTERLY) return getTimeFromDays(90);
    if (type === RepeatEnum.SEMIANNUALLY) return getTimeFromDays(181);
    if (type === RepeatEnum.ANNUALLY) return getTimeFromDays(365);

    return 0;
}

export const getTimeFromDays = (num: number) => {
    return num * 86400 * 1000
}