import type { ModelValue } from '@/interfaces';
/**
 * =========================================================================================================================
 * Provide type checks when there is a parameter with multiple types, since ts doesn't know on which type we are working on
 * =========================================================================================================================
 */
export declare const isModelValueRange: (value: ModelValue) => value is Date[];
export declare const isNumberArray: (value: number | number[]) => value is number[];
export declare const isRange: (value: ModelValue) => value is Date[];
