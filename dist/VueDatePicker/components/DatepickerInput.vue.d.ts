import type { PropType } from 'vue';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    internalRangePickedName: {
        type: StringConstructor;
        default: string;
    };
    presetRangePickedName: {
        type: StringConstructor;
        default: null;
    };
    presetRangesDynamic: {
        type: PropType<import("@/interfaces").DynamicListData>;
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
        type: PropType<import("@/interfaces").ModelValue>;
        default: null;
    };
    modelType: {
        type: PropType<string>;
        default: null;
    };
    position: {
        type: PropType<import("@/interfaces").OpenPosition>;
        default: string;
    };
    dark: {
        type: PropType<boolean>;
        default: boolean;
    };
    format: {
        type: PropType<import("@/interfaces").IFormat>;
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
        type: PropType<import("@/interfaces").CustomAltPosition>;
        default: null;
    };
    transitions: {
        type: PropType<boolean | Partial<import("@/interfaces").Transition>>;
        default: boolean;
    };
    formatLocale: {
        type: PropType<Locale>;
        default: null;
    };
    utc: {
        type: PropType<boolean | "preserve">;
        default: boolean;
    };
    ariaLabels: {
        type: PropType<Partial<import("@/interfaces").AriaLabels>>;
        default: () => {};
    };
    offset: {
        type: PropType<string | number>;
        default: number;
    };
    hideNavigation: {
        type: PropType<import("@/interfaces").Flow[]>;
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
        type: PropType<string[] | Date[] | import("@/interfaces").IDisableDates>;
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
        type: PropType<import("@/interfaces").TimeModel | import("@/interfaces").TimeModel[] | null>;
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
        type: PropType<import("@/interfaces").IMarker[]>;
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
        type: PropType<import("@/interfaces").PresetRange[]>;
        default: () => never[];
    };
    flow: {
        type: PropType<import("@/interfaces").Flow[]>;
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
        type: PropType<import("@/interfaces").DateFilter>;
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
        type: PropType<import("@/interfaces").WeekStartNum | import("@/interfaces").WeekStartStr>;
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
        type: PropType<import("@/interfaces").IFormat>;
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
        type: PropType<import("@/interfaces").TimeModel>;
        default: null;
    };
    maxTime: {
        type: PropType<import("@/interfaces").TimeModel>;
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
        type: PropType<Partial<import("@/interfaces").TextInputOptions>>;
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
    isMenuOpen: {
        type: PropType<boolean>;
        default: boolean;
    };
    inputValue: {
        type: PropType<string>;
        default: string;
    };
}, {
    focusInput: () => void;
    setParsedDate: (date: Date) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("open" | "close" | "blur" | "focus" | "toggle" | "select-date" | "clear" | "update:input-value" | "set-input-date" | "set-empty-date" | "focus-prev")[], "open" | "close" | "blur" | "focus" | "toggle" | "select-date" | "clear" | "update:input-value" | "set-input-date" | "set-empty-date" | "focus-prev", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    internalRangePickedName: {
        type: StringConstructor;
        default: string;
    };
    presetRangePickedName: {
        type: StringConstructor;
        default: null;
    };
    presetRangesDynamic: {
        type: PropType<import("@/interfaces").DynamicListData>;
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
        type: PropType<import("@/interfaces").ModelValue>;
        default: null;
    };
    modelType: {
        type: PropType<string>;
        default: null;
    };
    position: {
        type: PropType<import("@/interfaces").OpenPosition>;
        default: string;
    };
    dark: {
        type: PropType<boolean>;
        default: boolean;
    };
    format: {
        type: PropType<import("@/interfaces").IFormat>;
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
        type: PropType<import("@/interfaces").CustomAltPosition>;
        default: null;
    };
    transitions: {
        type: PropType<boolean | Partial<import("@/interfaces").Transition>>;
        default: boolean;
    };
    formatLocale: {
        type: PropType<Locale>;
        default: null;
    };
    utc: {
        type: PropType<boolean | "preserve">;
        default: boolean;
    };
    ariaLabels: {
        type: PropType<Partial<import("@/interfaces").AriaLabels>>;
        default: () => {};
    };
    offset: {
        type: PropType<string | number>;
        default: number;
    };
    hideNavigation: {
        type: PropType<import("@/interfaces").Flow[]>;
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
        type: PropType<string[] | Date[] | import("@/interfaces").IDisableDates>;
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
        type: PropType<import("@/interfaces").TimeModel | import("@/interfaces").TimeModel[] | null>;
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
        type: PropType<import("@/interfaces").IMarker[]>;
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
        type: PropType<import("@/interfaces").PresetRange[]>;
        default: () => never[];
    };
    flow: {
        type: PropType<import("@/interfaces").Flow[]>;
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
        type: PropType<import("@/interfaces").DateFilter>;
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
        type: PropType<import("@/interfaces").WeekStartNum | import("@/interfaces").WeekStartStr>;
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
        type: PropType<import("@/interfaces").IFormat>;
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
        type: PropType<import("@/interfaces").TimeModel>;
        default: null;
    };
    maxTime: {
        type: PropType<import("@/interfaces").TimeModel>;
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
        type: PropType<Partial<import("@/interfaces").TextInputOptions>>;
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
    isMenuOpen: {
        type: PropType<boolean>;
        default: boolean;
    };
    inputValue: {
        type: PropType<string>;
        default: string;
    };
}>> & {
    onOpen?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
    onToggle?: ((...args: any[]) => any) | undefined;
    "onSelect-date"?: ((...args: any[]) => any) | undefined;
    onClear?: ((...args: any[]) => any) | undefined;
    "onUpdate:input-value"?: ((...args: any[]) => any) | undefined;
    "onSet-input-date"?: ((...args: any[]) => any) | undefined;
    "onSet-empty-date"?: ((...args: any[]) => any) | undefined;
    "onFocus-prev"?: ((...args: any[]) => any) | undefined;
}, {
    format: import("@/interfaces").IFormat;
    name: string;
    internalRangePickedName: string;
    presetRangePickedName: string;
    presetRangesDynamic: import("@/interfaces").DynamicListData;
    qweqweqwe: Function;
    multiCalendars: string | number | boolean;
    modelValue: import("@/interfaces").ModelValue;
    modelType: string;
    position: import("@/interfaces").OpenPosition;
    dark: boolean;
    closeOnScroll: boolean;
    autoPosition: boolean;
    closeOnAutoApply: boolean;
    altPosition: import("@/interfaces").CustomAltPosition;
    transitions: boolean | Partial<import("@/interfaces").Transition>;
    formatLocale: Locale;
    utc: boolean | "preserve";
    ariaLabels: Partial<import("@/interfaces").AriaLabels>;
    offset: string | number;
    hideNavigation: import("@/interfaces").Flow[];
    timezone: string;
    vertical: boolean;
    disableMonthYearSelect: boolean;
    menuClassName: string;
    dayClass: (date: Date) => string;
    yearRange: number[];
    multiCalendarsSolo: boolean;
    calendarCellClassName: string;
    enableTimePicker: boolean;
    autoApply: boolean;
    disabledDates: string[] | Date[] | import("@/interfaces").IDisableDates;
    monthNameFormat: "long" | "short";
    startDate: string | Date;
    startTime: import("@/interfaces").TimeModel | import("@/interfaces").TimeModel[] | null;
    hideOffsetDates: boolean;
    autoRange: string | number;
    noToday: boolean;
    disabledWeekDays: string[] | number[];
    allowedDates: string[] | Date[];
    showNowButton: boolean;
    nowButtonLabel: string;
    markers: import("@/interfaces").IMarker[];
    modeHeight: string | number;
    escClose: boolean;
    spaceConfirm: boolean;
    monthChangeOnArrows: boolean;
    presetRanges: import("@/interfaces").PresetRange[];
    flow: import("@/interfaces").Flow[];
    partialFlow: boolean;
    preventMinMaxNavigation: boolean;
    minRange: string | number;
    maxRange: string | number;
    multiDatesLimit: string | number;
    reverseYears: boolean;
    keepActionRow: boolean;
    weekPicker: boolean;
    filters: import("@/interfaces").DateFilter;
    arrowNavigation: boolean;
    multiStatic: boolean;
    disableTimeRangeValidation: boolean;
    highlight: string[] | Date[] | number[] | ((date: Date) => boolean);
    highlightWeekDays: number[];
    highlightDisabledDays: boolean;
    teleport: string | boolean;
    teleportCenter: boolean;
    locale: string;
    weekNumName: string;
    weekStart: import("@/interfaces").WeekStartNum | import("@/interfaces").WeekStartStr;
    weekNumbers: "iso" | "local" | ((date: Date) => string | number);
    calendarClassName: string;
    noSwipe: boolean;
    monthChangeOnScroll: boolean | "inverse";
    dayNames: string[] | ((lang: string, weekStart: number) => string[]);
    monthPicker: boolean;
    customProps: Record<string, unknown>;
    yearPicker: boolean;
    modelAuto: boolean;
    selectText: string;
    cancelText: string;
    previewFormat: import("@/interfaces").IFormat;
    multiDates: boolean;
    partialRange: boolean;
    ignoreTimeValidation: boolean;
    minDate: string | Date;
    maxDate: string | Date;
    minTime: import("@/interfaces").TimeModel;
    maxTime: import("@/interfaces").TimeModel;
    placeholder: string;
    hideInputIcon: boolean;
    clearable: boolean;
    state: boolean;
    required: boolean;
    autocomplete: string;
    inputClassName: string;
    inlineWithInput: boolean;
    textInputOptions: Partial<import("@/interfaces").TextInputOptions>;
    fixedStart: boolean;
    fixedEnd: boolean;
    timePicker: boolean;
    enableSeconds: boolean;
    is24: boolean;
    noHoursOverlay: boolean;
    noMinutesOverlay: boolean;
    noSecondsOverlay: boolean;
    hoursGridIncrement: string | number;
    minutesGridIncrement: string | number;
    secondsGridIncrement: string | number;
    hoursIncrement: string | number;
    minutesIncrement: string | number;
    secondsIncrement: string | number;
    range: boolean;
    uid: string;
    disabled: boolean;
    readonly: boolean;
    inline: boolean;
    textInput: boolean;
    onClickOutside: (validate: () => boolean) => void;
    noDisabledRange: boolean;
    sixWeeks: boolean;
    isMenuOpen: boolean;
    inputValue: string;
}>, {
    trigger: (_: {}) => any;
    'dp-input': (_: {
        value: string;
        onInput: (event: Event) => void;
        onEnter: () => void;
        onTab: () => void;
        onClear: ((...args: any[]) => any) & (() => void);
        onBlur: () => void;
    }) => any;
    'input-icon': (_: {}) => any;
    'clear-icon': (_: {
        clear: ((...args: any[]) => any) & (() => void);
    }) => any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
