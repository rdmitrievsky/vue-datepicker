import type { AriaLabels, IFormat, Transition, TextInputOptions, DateFilter } from '@/interfaces';
export declare const mergeDefaultTransitions: (conf: Partial<Transition>) => Transition;
export declare const defaultAriaLabels: (labels: Partial<AriaLabels>) => AriaLabels;
export declare const defaultMultiCalendars: (multiCalendars: boolean | string | number | null) => number;
export declare const defaultPreviewFormat: (previewFormat: IFormat, format: IFormat, defaultPattern: string | ((val: Date) => string)) => IFormat;
export declare const defaultTransitions: (transitions: boolean | Partial<Transition>) => Transition;
/**
 * Default options to merge with user provided ones
 */
export declare const getDefaultTextInputOptions: () => TextInputOptions;
/**
 * Default filters to merge with user provided values
 */
export declare const getDefaultFilters: (filters: Partial<DateFilter>) => DateFilter;
