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

export const RepeatText = (e: RepeatEnum) => {
    const data = {
        ONE_TIME: 'One Time',
        WEEKLY: 'Weekly',
        MONTHLY: 'Monthly',
        QUARTERLY: 'Quarterly',
        SEMIANNUALLY: 'Semiannually',
        ANNUALLY: 'Annually',
    }
    return data[e];
}

export const collerPallet = {
    deepblue: '#172b4d',
    deepblueChild: '#455571',

    white: '#ffffff',
    whiteChild: '#f1f1f1',

    gray: '#808080',
    grayChild: '#dddddd',

    red: '#ff5630',
    redChild: '#ffb8a8',

    yellow: '#ffab00',
    yellowChild: '#ffd785',

    green: '#36b37e',
    greenChild: '#8dffcf',

    black: '#000',
    blackChild: '#424242',
}