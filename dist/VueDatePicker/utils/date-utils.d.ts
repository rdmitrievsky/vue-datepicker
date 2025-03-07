import type { DateTimeSetter, DateValue, TimeModel } from '@/interfaces';
export declare const parseFreeInput: (value: string, pattern: string | string[] | ((value: string) => Date | null), time: TimeModel | TimeModel[], inputVal?: string) => Date | null;
export declare const getDate: (value?: Date | string | number) => Date;
export declare const dateToUtc: (date: Date, preserve: boolean) => string;
export declare const resetDateTime: (value: Date | string) => Date;
export declare const setDateTime: (date: Date | null, hours?: DateTimeSetter, minutes?: DateTimeSetter, seconds?: DateTimeSetter) => Date;
export declare const isDateBefore: (date: DateValue, dateToCompare: DateValue) => boolean;
export declare const isDateEqual: (date: DateValue, dateToCompare: DateValue) => boolean;
export declare const isDateAfter: (date: DateValue, dateToCompare: DateValue) => boolean;
export declare const isDateBetween: (range: Date[], hoverDate: Date | null, dateToCheck: Date) => boolean;
export declare const resetDate: (date: Date | string) => Date;
