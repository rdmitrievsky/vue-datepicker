import type { IDefaultSelect, IMarker, MaybeElementRef, ModelValue } from '@/interfaces';
export declare const getArrayInArray: <T>(list: T[], increment?: number) => T[][];
/**
 * Generate week day names based on locale and in order specified in week start
 */
export declare const getDayNames: (locale: string, weekStart: number) => string[];
/**
 * Generate array of years for selection display
 */
export declare const getYears: (yearRange: number[] | string[], reverse?: boolean) => IDefaultSelect[];
/**
 * Generate month names based on locale for selection display
 */
export declare const getMonths: (locale: string, format: 'long' | 'short') => IDefaultSelect[];
/**
 * Since internally watched values are in 24h mode, this will get am-pm value from set hour
 */
export declare const hoursToAmPmHours: (index: number) => number;
export declare const unrefElement: (elRef: MaybeElementRef) => HTMLElement | null;
export declare const getDefaultMarker: (marker: IMarker) => IMarker;
export declare const isModelAuto: (modelValue: ModelValue) => boolean;
export declare const errors: {
    prop: (name: string) => string;
    dateArr: (name: string) => string;
};
export declare const convertType: <T>(val: any) => T;
export declare const getNumVal: (num?: string | number | null) => number | null;
