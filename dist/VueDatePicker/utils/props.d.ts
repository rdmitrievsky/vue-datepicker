import type { ExtractPropTypes, PropType } from 'vue';
import type { AriaLabels, Flow, DateFilter, IDisableDates, IFormat, IMarker, TextInputOptions, TimeModel, Transition, ModelValue, OpenPosition, PresetRange, WeekStartNum, WeekStartStr, CustomAltPosition, DynamicListData } from '@/interfaces';
export declare const AllProps: {
    internalRangePickedName: {
        type: StringConstructor;
        default: string;
    };
    presetRangePickedName: {
        type: StringConstructor;
        default: null;
    };
    presetRangesDynamic: {
        type: PropType<DynamicListData>;
        default: {
            dynamic: boolean;
            data: null;
        };
    };
    qweqweqwe: {
        type: FunctionConstructor;
        default: null;
    };
    multiCalendars: {
        type: PropType<string | number | boolean>;
        default: null;
    };
    modelValue: {
        type: PropType<ModelValue>;
        default: null;
    };
    modelType: {
        type: PropType<string>;
        default: null;
    };
    position: {
        type: PropType<OpenPosition>;
        default: string;
    };
    dark: {
        type: PropType<boolean>;
        default: boolean;
    };
    format: {
        type: PropType<IFormat>;
        default: () => null;
    };
    closeOnScroll: {
        type: PropType<boolean>;
        default: boolean;
    };
    autoPosition: {
        type: PropType<boolean>;
        default: boolean;
    };
    closeOnAutoApply: {
        type: PropType<boolean>;
        default: boolean;
    };
    altPosition: {
        type: PropType<CustomAltPosition>;
        default: null;
    };
    transitions: {
        type: PropType<boolean | Partial<Transition>>;
        default: boolean;
    };
    formatLocale: {
        type: PropType<globalThis.Locale>;
        default: null;
    };
    utc: {
        type: PropType<boolean | "preserve">;
        default: boolean;
    };
    ariaLabels: {
        type: PropType<Partial<AriaLabels>>;
        default: () => {};
    };
    offset: {
        type: PropType<string | number>;
        default: number;
    };
    hideNavigation: {
        type: PropType<Flow[]>;
        default: () => never[];
    };
    timezone: {
        type: PropType<string>;
        default: null;
    };
    vertical: {
        type: PropType<boolean>;
        default: boolean;
    };
    disableMonthYearSelect: {
        type: PropType<boolean>;
        default: boolean;
    };
    menuClassName: {
        type: PropType<string>;
        default: null;
    };
    dayClass: {
        type: PropType<(date: Date) => string>;
        default: null;
    };
    yearRange: {
        type: PropType<number[]>;
        default: () => number[];
    };
    multiCalendarsSolo: {
        type: PropType<boolean>;
        default: boolean;
    };
    calendarCellClassName: {
        type: PropType<string>;
        default: null;
    };
    enableTimePicker: {
        type: PropType<boolean>;
        default: boolean;
    };
    autoApply: {
        type: PropType<boolean>;
        default: boolean;
    };
    disabledDates: {
        type: PropType<string[] | Date[] | IDisableDates>;
        default: () => never[];
    };
    monthNameFormat: {
        type: PropType<"long" | "short">;
        default: string;
    };
    startDate: {
        type: PropType<string | Date>;
        default: null;
    };
    startTime: {
        type: PropType<TimeModel | TimeModel[] | null>;
        default: null;
    };
    hideOffsetDates: {
        type: PropType<boolean>;
        default: boolean;
    };
    autoRange: {
        type: PropType<string | number>;
        default: null;
    };
    noToday: {
        type: PropType<boolean>;
        default: boolean;
    };
    disabledWeekDays: {
        type: PropType<string[] | number[]>;
        default: () => never[];
    };
    allowedDates: {
        type: PropType<string[] | Date[]>;
        default: () => never[];
    };
    showNowButton: {
        type: PropType<boolean>;
        default: boolean;
    };
    nowButtonLabel: {
        type: PropType<string>;
        default: string;
    };
    markers: {
        type: PropType<IMarker[]>;
        default: () => never[];
    };
    modeHeight: {
        type: PropType<string | number>;
        default: number;
    };
    escClose: {
        type: PropType<boolean>;
        default: boolean;
    };
    spaceConfirm: {
        type: PropType<boolean>;
        default: boolean;
    };
    monthChangeOnArrows: {
        type: PropType<boolean>;
        default: boolean;
    };
    presetRanges: {
        type: PropType<PresetRange[]>;
        default: () => never[];
    };
    flow: {
        type: PropType<Flow[]>;
        default: () => never[];
    };
    partialFlow: {
        type: PropType<boolean>;
        default: boolean;
    };
    preventMinMaxNavigation: {
        type: PropType<boolean>;
        default: boolean;
    };
    minRange: {
        type: PropType<string | number>;
        default: null;
    };
    maxRange: {
        type: PropType<string | number>;
        default: null;
    };
    multiDatesLimit: {
        type: PropType<string | number>;
        default: null;
    };
    reverseYears: {
        type: PropType<boolean>;
        default: boolean;
    };
    keepActionRow: {
        type: PropType<boolean>;
        default: boolean;
    };
    weekPicker: {
        type: PropType<boolean>;
        default: boolean;
    };
    filters: {
        type: PropType<DateFilter>;
        default: () => {};
    };
    arrowNavigation: {
        type: PropType<boolean>;
        default: boolean;
    };
    multiStatic: {
        type: PropType<boolean>;
        default: boolean;
    };
    disableTimeRangeValidation: {
        type: PropType<boolean>;
        default: boolean;
    };
    highlight: {
        type: PropType<string[] | Date[] | number[] | ((date: Date) => boolean)>;
        default: null;
    };
    highlightWeekDays: {
        type: PropType<number[]>;
        default: null;
    };
    highlightDisabledDays: {
        type: PropType<boolean>;
        default: boolean;
    };
    teleport: {
        type: PropType<string | boolean>;
        default: null;
    };
    teleportCenter: {
        type: PropType<boolean>;
        default: boolean;
    };
    locale: {
        type: PropType<string>;
        default: string;
    };
    weekNumName: {
        type: PropType<string>;
        default: string;
    };
    weekStart: {
        type: PropType<WeekStartNum | WeekStartStr>;
        default: number;
    };
    weekNumbers: {
        type: PropType<"iso" | "local" | ((date: Date) => string | number)>;
        default: null;
    };
    calendarClassName: {
        type: PropType<string>;
        default: null;
    };
    noSwipe: {
        type: PropType<boolean>;
        default: boolean;
    };
    monthChangeOnScroll: {
        type: PropType<boolean | "inverse">;
        default: boolean;
    };
    dayNames: {
        type: PropType<string[] | ((lang: string, weekStart: number) => string[])>;
        default: null;
    };
    monthPicker: {
        type: PropType<boolean>;
        default: boolean;
    };
    customProps: {
        type: PropType<Record<string, unknown>>;
        default: null;
    };
    yearPicker: {
        type: PropType<boolean>;
        default: boolean;
    };
    modelAuto: {
        type: PropType<boolean>;
        default: boolean;
    };
    selectText: {
        type: PropType<string>;
        default: string;
    };
    cancelText: {
        type: PropType<string>;
        default: string;
    };
    previewFormat: {
        type: PropType<IFormat>;
        default: () => string;
    };
    multiDates: {
        type: PropType<boolean>;
        default: boolean;
    };
    partialRange: {
        type: PropType<boolean>;
        default: boolean;
    };
    ignoreTimeValidation: {
        type: PropType<boolean>;
        default: boolean;
    };
    minDate: {
        type: PropType<string | Date>;
        default: null;
    };
    maxDate: {
        type: PropType<string | Date>;
        default: null;
    };
    minTime: {
        type: PropType<TimeModel>;
        default: null;
    };
    maxTime: {
        type: PropType<TimeModel>;
        default: null;
    };
    name: {
        type: PropType<string>;
        default: null;
    };
    placeholder: {
        type: PropType<string>;
        default: string;
    };
    hideInputIcon: {
        type: PropType<boolean>;
        default: boolean;
    };
    clearable: {
        type: PropType<boolean>;
        default: boolean;
    };
    state: {
        type: PropType<boolean>;
        default: null;
    };
    required: {
        type: PropType<boolean>;
        default: boolean;
    };
    autocomplete: {
        type: PropType<string>;
        default: string;
    };
    inputClassName: {
        type: PropType<string>;
        default: null;
    };
    inlineWithInput: {
        type: PropType<boolean>;
        default: boolean;
    };
    textInputOptions: {
        type: PropType<Partial<TextInputOptions>>;
        default: () => null;
    };
    fixedStart: {
        type: PropType<boolean>;
        default: boolean;
    };
    fixedEnd: {
        type: PropType<boolean>;
        default: boolean;
    };
    timePicker: {
        type: PropType<boolean>;
        default: boolean;
    };
    enableSeconds: {
        type: PropType<boolean>;
        default: boolean;
    };
    is24: {
        type: PropType<boolean>;
        default: boolean;
    };
    noHoursOverlay: {
        type: PropType<boolean>;
        default: boolean;
    };
    noMinutesOverlay: {
        type: PropType<boolean>;
        default: boolean;
    };
    noSecondsOverlay: {
        type: PropType<boolean>;
        default: boolean;
    };
    hoursGridIncrement: {
        type: PropType<string | number>;
        default: number;
    };
    minutesGridIncrement: {
        type: PropType<string | number>;
        default: number;
    };
    secondsGridIncrement: {
        type: PropType<string | number>;
        default: number;
    };
    hoursIncrement: {
        type: PropType<string | number>;
        default: number;
    };
    minutesIncrement: {
        type: PropType<string | number>;
        default: number;
    };
    secondsIncrement: {
        type: PropType<string | number>;
        default: number;
    };
    range: {
        type: PropType<boolean>;
        default: boolean;
    };
    uid: {
        type: PropType<string>;
        default: null;
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
    readonly: {
        type: PropType<boolean>;
        default: boolean;
    };
    inline: {
        type: PropType<boolean>;
        default: boolean;
    };
    textInput: {
        type: PropType<boolean>;
        default: boolean;
    };
    onClickOutside: {
        type: PropType<(validate: () => boolean) => void>;
        default: null;
    };
    noDisabledRange: {
        type: PropType<boolean>;
        default: boolean;
    };
    sixWeeks: {
        type: PropType<boolean>;
        default: boolean;
    };
};
export type AllPropsType = ExtractPropTypes<typeof AllProps>;
