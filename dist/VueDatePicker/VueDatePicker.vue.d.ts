import type { MonthYearOpt, ModelValue } from '@/interfaces';
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
        type: import("vue").PropType<import("@/interfaces").DynamicListData>;
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
        type: import("vue").PropType<string | number | boolean>;
        default: null;
    };
    modelValue: {
        type: import("vue").PropType<ModelValue>;
        default: null;
    };
    modelType: {
        type: import("vue").PropType<string>;
        default: null;
    };
    position: {
        type: import("vue").PropType<import("@/interfaces").OpenPosition>;
        default: string;
    };
    dark: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    format: {
        type: import("vue").PropType<import("@/interfaces").IFormat>;
        default: () => null;
    };
    closeOnScroll: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    autoPosition: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    closeOnAutoApply: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    altPosition: {
        type: import("vue").PropType<import("@/interfaces").CustomAltPosition>;
        default: null;
    };
    transitions: {
        type: import("vue").PropType<boolean | Partial<import("@/interfaces").Transition>>;
        default: boolean;
    };
    formatLocale: {
        type: import("vue").PropType<Locale>;
        default: null;
    };
    utc: {
        type: import("vue").PropType<boolean | "preserve">;
        default: boolean;
    };
    ariaLabels: {
        type: import("vue").PropType<Partial<import("@/interfaces").AriaLabels>>;
        default: () => {};
    };
    offset: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
    hideNavigation: {
        type: import("vue").PropType<import("@/interfaces").Flow[]>;
        default: () => never[];
    };
    timezone: {
        type: import("vue").PropType<string>;
        default: null;
    };
    vertical: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    disableMonthYearSelect: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    menuClassName: {
        type: import("vue").PropType<string>;
        default: null;
    };
    dayClass: {
        type: import("vue").PropType<(date: Date) => string>;
        default: null;
    };
    yearRange: {
        type: import("vue").PropType<number[]>;
        default: () => number[];
    };
    multiCalendarsSolo: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    calendarCellClassName: {
        type: import("vue").PropType<string>;
        default: null;
    };
    enableTimePicker: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    autoApply: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    disabledDates: {
        type: import("vue").PropType<string[] | Date[] | import("@/interfaces").IDisableDates>;
        default: () => never[];
    };
    monthNameFormat: {
        type: import("vue").PropType<"long" | "short">;
        default: string;
    };
    startDate: {
        type: import("vue").PropType<string | Date>;
        default: null;
    };
    startTime: {
        type: import("vue").PropType<import("@/interfaces").TimeModel | import("@/interfaces").TimeModel[] | null>;
        default: null;
    };
    hideOffsetDates: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    autoRange: {
        type: import("vue").PropType<string | number>;
        default: null;
    };
    noToday: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    disabledWeekDays: {
        type: import("vue").PropType<string[] | number[]>;
        default: () => never[];
    };
    allowedDates: {
        type: import("vue").PropType<string[] | Date[]>;
        default: () => never[];
    };
    showNowButton: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    nowButtonLabel: {
        type: import("vue").PropType<string>;
        default: string;
    };
    markers: {
        type: import("vue").PropType<import("@/interfaces").IMarker[]>;
        default: () => never[];
    };
    modeHeight: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
    escClose: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    spaceConfirm: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    monthChangeOnArrows: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    presetRanges: {
        type: import("vue").PropType<import("@/interfaces").PresetRange[]>;
        default: () => never[];
    };
    flow: {
        type: import("vue").PropType<import("@/interfaces").Flow[]>;
        default: () => never[];
    };
    partialFlow: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    preventMinMaxNavigation: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    minRange: {
        type: import("vue").PropType<string | number>;
        default: null;
    };
    maxRange: {
        type: import("vue").PropType<string | number>;
        default: null;
    };
    multiDatesLimit: {
        type: import("vue").PropType<string | number>;
        default: null;
    };
    reverseYears: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    keepActionRow: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    weekPicker: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    filters: {
        type: import("vue").PropType<import("@/interfaces").DateFilter>;
        default: () => {};
    };
    arrowNavigation: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    multiStatic: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    disableTimeRangeValidation: {
        type: import("vue").PropType<boolean>;
        /**
         * When x button is pressed on input, it will call this function that will emit null
         * for the modelValue and clear internally stored data
         */
        default: boolean;
    };
    highlight: {
        type: import("vue").PropType<string[] | Date[] | number[] | ((date: Date) => boolean)>;
        default: null;
    };
    highlightWeekDays: {
        type: import("vue").PropType<number[]>;
        default: null;
    };
    highlightDisabledDays: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    teleport: {
        type: import("vue").PropType<string | boolean>;
        default: null;
    };
    teleportCenter: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    locale: {
        type: import("vue").PropType<string>;
        default: string;
    };
    weekNumName: {
        type: import("vue").PropType<string>;
        default: string;
    };
    weekStart: {
        type: import("vue").PropType<import("@/interfaces").WeekStartNum | import("@/interfaces").WeekStartStr>;
        default: number;
    };
    weekNumbers: {
        type: import("vue").PropType<"iso" | "local" | ((date: Date) => string | number)>;
        default: null;
    };
    calendarClassName: {
        type: import("vue").PropType<string>;
        default: null;
    };
    noSwipe: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    monthChangeOnScroll: {
        type: import("vue").PropType<boolean | "inverse">;
        default: boolean;
    };
    dayNames: {
        type: import("vue").PropType<string[] | ((lang: string, weekStart: number) => string[])>;
        default: null;
    };
    monthPicker: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    customProps: {
        type: import("vue").PropType<Record<string, unknown>>;
        default: null;
    };
    yearPicker: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    modelAuto: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    selectText: {
        type: import("vue").PropType<string>;
        default: string;
    };
    cancelText: {
        /**
         * When value is selected it will emit an event that will call this function
         * ignoreClose is passed when time is picked or month and year, since they update the value and for
         * the user experience it should not close the menu
         */
        type: import("vue").PropType<string>;
        default: string;
    };
    previewFormat: {
        type: import("vue").PropType<import("@/interfaces").IFormat>;
        default: () => string;
    };
    multiDates: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    partialRange: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    ignoreTimeValidation: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    minDate: {
        type: import("vue").PropType<string | Date>;
        default: null;
    };
    maxDate: {
        type: import("vue").PropType<string | Date>;
        default: null;
    };
    minTime: {
        type: import("vue").PropType<import("@/interfaces").TimeModel>;
        default: null;
    };
    maxTime: {
        type: import("vue").PropType<import("@/interfaces").TimeModel>;
        default: null;
    };
    name: {
        type: import("vue").PropType<string>;
        default: null;
    };
    placeholder: {
        type: import("vue").PropType<string>;
        default: string;
    };
    hideInputIcon: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    clearable: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    state: {
        type: import("vue").PropType<boolean>;
        default: null;
    };
    required: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    autocomplete: {
        type: import("vue").PropType<string>;
        default: string;
    };
    inputClassName: {
        type: import("vue").PropType<string>;
        default: null;
    };
    inlineWithInput: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    textInputOptions: {
        type: import("vue").PropType<Partial<import("@/interfaces").TextInputOptions>>;
        default: () => null;
    };
    fixedStart: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    fixedEnd: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    timePicker: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    enableSeconds: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    is24: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    noHoursOverlay: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    noMinutesOverlay: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    noSecondsOverlay: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    hoursGridIncrement: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
    minutesGridIncrement: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
    secondsGridIncrement: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
    hoursIncrement: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
    minutesIncrement: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
    secondsIncrement: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
    range: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    uid: {
        type: import("vue").PropType<string>;
        default: null;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    readonly: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    inline: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    textInput: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    onClickOutside: {
        type: import("vue").PropType<(validate: () => boolean) => void>;
        default: null;
    };
    noDisabledRange: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    sixWeeks: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, {
    closeMenu: () => void;
    selectDate: () => void;
    clearValue: () => void;
    openMenu: () => void;
    onScroll: () => void;
    formatInputValue: () => void;
    updateInternalModelValue: (value: Date | Date[]) => void;
    setMonthYear: (value: MonthYearOpt) => void;
    parseModel: (value?: ModelValue) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("open" | "blur" | "focus" | "update-month-year" | "preset-range-clicked" | "invalid-fixed-range" | "internal-model-change" | "update:model-value" | "recalculate-position" | "invalid-select" | "tooltip-open" | "tooltip-close" | "flow-step" | "time-picker-open" | "text-submit" | "closed" | "cleared")[], "open" | "blur" | "focus" | "update-month-year" | "preset-range-clicked" | "invalid-fixed-range" | "internal-model-change" | "update:model-value" | "recalculate-position" | "invalid-select" | "tooltip-open" | "tooltip-close" | "flow-step" | "time-picker-open" | "text-submit" | "closed" | "cleared", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    internalRangePickedName: {
        type: StringConstructor;
        default: string;
    };
    presetRangePickedName: {
        type: StringConstructor;
        default: null;
    };
    presetRangesDynamic: {
        type: import("vue").PropType<import("@/interfaces").DynamicListData>;
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
        type: import("vue").PropType<string | number | boolean>;
        default: null;
    };
    modelValue: {
        type: import("vue").PropType<ModelValue>;
        default: null;
    };
    modelType: {
        type: import("vue").PropType<string>;
        default: null;
    };
    position: {
        type: import("vue").PropType<import("@/interfaces").OpenPosition>;
        default: string;
    };
    dark: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    format: {
        type: import("vue").PropType<import("@/interfaces").IFormat>;
        default: () => null;
    };
    closeOnScroll: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    autoPosition: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    closeOnAutoApply: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    altPosition: {
        type: import("vue").PropType<import("@/interfaces").CustomAltPosition>;
        default: null;
    };
    transitions: {
        type: import("vue").PropType<boolean | Partial<import("@/interfaces").Transition>>;
        default: boolean;
    };
    formatLocale: {
        type: import("vue").PropType<Locale>;
        default: null;
    };
    utc: {
        type: import("vue").PropType<boolean | "preserve">;
        default: boolean;
    };
    ariaLabels: {
        type: import("vue").PropType<Partial<import("@/interfaces").AriaLabels>>;
        default: () => {};
    };
    offset: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
    hideNavigation: {
        type: import("vue").PropType<import("@/interfaces").Flow[]>;
        default: () => never[];
    };
    timezone: {
        type: import("vue").PropType<string>;
        default: null;
    };
    vertical: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    disableMonthYearSelect: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    menuClassName: {
        type: import("vue").PropType<string>;
        default: null;
    };
    dayClass: {
        type: import("vue").PropType<(date: Date) => string>;
        default: null;
    };
    yearRange: {
        type: import("vue").PropType<number[]>;
        default: () => number[];
    };
    multiCalendarsSolo: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    calendarCellClassName: {
        type: import("vue").PropType<string>;
        default: null;
    };
    enableTimePicker: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    autoApply: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    disabledDates: {
        type: import("vue").PropType<string[] | Date[] | import("@/interfaces").IDisableDates>;
        default: () => never[];
    };
    monthNameFormat: {
        type: import("vue").PropType<"long" | "short">;
        default: string;
    };
    startDate: {
        type: import("vue").PropType<string | Date>;
        default: null;
    };
    startTime: {
        type: import("vue").PropType<import("@/interfaces").TimeModel | import("@/interfaces").TimeModel[] | null>;
        default: null;
    };
    hideOffsetDates: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    autoRange: {
        type: import("vue").PropType<string | number>;
        default: null;
    };
    noToday: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    disabledWeekDays: {
        type: import("vue").PropType<string[] | number[]>;
        default: () => never[];
    };
    allowedDates: {
        type: import("vue").PropType<string[] | Date[]>;
        default: () => never[];
    };
    showNowButton: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    nowButtonLabel: {
        type: import("vue").PropType<string>;
        default: string;
    };
    markers: {
        type: import("vue").PropType<import("@/interfaces").IMarker[]>;
        default: () => never[];
    };
    modeHeight: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
    escClose: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    spaceConfirm: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    monthChangeOnArrows: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    presetRanges: {
        type: import("vue").PropType<import("@/interfaces").PresetRange[]>;
        default: () => never[];
    };
    flow: {
        type: import("vue").PropType<import("@/interfaces").Flow[]>;
        default: () => never[];
    };
    partialFlow: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    preventMinMaxNavigation: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    minRange: {
        type: import("vue").PropType<string | number>;
        default: null;
    };
    maxRange: {
        type: import("vue").PropType<string | number>;
        default: null;
    };
    multiDatesLimit: {
        type: import("vue").PropType<string | number>;
        default: null;
    };
    reverseYears: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    keepActionRow: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    weekPicker: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    filters: {
        type: import("vue").PropType<import("@/interfaces").DateFilter>;
        default: () => {};
    };
    arrowNavigation: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    multiStatic: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    disableTimeRangeValidation: {
        type: import("vue").PropType<boolean>;
        /**
         * When x button is pressed on input, it will call this function that will emit null
         * for the modelValue and clear internally stored data
         */
        default: boolean;
    };
    highlight: {
        type: import("vue").PropType<string[] | Date[] | number[] | ((date: Date) => boolean)>;
        default: null;
    };
    highlightWeekDays: {
        type: import("vue").PropType<number[]>;
        default: null;
    };
    highlightDisabledDays: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    teleport: {
        type: import("vue").PropType<string | boolean>;
        default: null;
    };
    teleportCenter: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    locale: {
        type: import("vue").PropType<string>;
        default: string;
    };
    weekNumName: {
        type: import("vue").PropType<string>;
        default: string;
    };
    weekStart: {
        type: import("vue").PropType<import("@/interfaces").WeekStartNum | import("@/interfaces").WeekStartStr>;
        default: number;
    };
    weekNumbers: {
        type: import("vue").PropType<"iso" | "local" | ((date: Date) => string | number)>;
        default: null;
    };
    calendarClassName: {
        type: import("vue").PropType<string>;
        default: null;
    };
    noSwipe: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    monthChangeOnScroll: {
        type: import("vue").PropType<boolean | "inverse">;
        default: boolean;
    };
    dayNames: {
        type: import("vue").PropType<string[] | ((lang: string, weekStart: number) => string[])>;
        default: null;
    };
    monthPicker: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    customProps: {
        type: import("vue").PropType<Record<string, unknown>>;
        default: null;
    };
    yearPicker: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    modelAuto: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    selectText: {
        type: import("vue").PropType<string>;
        default: string;
    };
    cancelText: {
        /**
         * When value is selected it will emit an event that will call this function
         * ignoreClose is passed when time is picked or month and year, since they update the value and for
         * the user experience it should not close the menu
         */
        type: import("vue").PropType<string>;
        default: string;
    };
    previewFormat: {
        type: import("vue").PropType<import("@/interfaces").IFormat>;
        default: () => string;
    };
    multiDates: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    partialRange: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    ignoreTimeValidation: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    minDate: {
        type: import("vue").PropType<string | Date>;
        default: null;
    };
    maxDate: {
        type: import("vue").PropType<string | Date>;
        default: null;
    };
    minTime: {
        type: import("vue").PropType<import("@/interfaces").TimeModel>;
        default: null;
    };
    maxTime: {
        type: import("vue").PropType<import("@/interfaces").TimeModel>;
        default: null;
    };
    name: {
        type: import("vue").PropType<string>;
        default: null;
    };
    placeholder: {
        type: import("vue").PropType<string>;
        default: string;
    };
    hideInputIcon: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    clearable: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    state: {
        type: import("vue").PropType<boolean>;
        default: null;
    };
    required: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    autocomplete: {
        type: import("vue").PropType<string>;
        default: string;
    };
    inputClassName: {
        type: import("vue").PropType<string>;
        default: null;
    };
    inlineWithInput: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    textInputOptions: {
        type: import("vue").PropType<Partial<import("@/interfaces").TextInputOptions>>;
        default: () => null;
    };
    fixedStart: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    fixedEnd: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    timePicker: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    enableSeconds: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    is24: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    noHoursOverlay: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    noMinutesOverlay: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    noSecondsOverlay: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    hoursGridIncrement: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
    minutesGridIncrement: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
    secondsGridIncrement: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
    hoursIncrement: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
    minutesIncrement: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
    secondsIncrement: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
    range: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    uid: {
        type: import("vue").PropType<string>;
        default: null;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    readonly: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    inline: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    textInput: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    onClickOutside: {
        type: import("vue").PropType<(validate: () => boolean) => void>;
        default: null;
    };
    noDisabledRange: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    sixWeeks: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>> & {
    onOpen?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
    "onInvalid-select"?: ((...args: any[]) => any) | undefined;
    "onTooltip-open"?: ((...args: any[]) => any) | undefined;
    "onTooltip-close"?: ((...args: any[]) => any) | undefined;
    "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
    "onUpdate-month-year"?: ((...args: any[]) => any) | undefined;
    "onPreset-range-clicked"?: ((...args: any[]) => any) | undefined;
    "onInvalid-fixed-range"?: ((...args: any[]) => any) | undefined;
    "onRecalculate-position"?: ((...args: any[]) => any) | undefined;
    "onFlow-step"?: ((...args: any[]) => any) | undefined;
    "onTime-picker-open"?: ((...args: any[]) => any) | undefined;
    "onInternal-model-change"?: ((...args: any[]) => any) | undefined;
    "onText-submit"?: ((...args: any[]) => any) | undefined;
    onClosed?: ((...args: any[]) => any) | undefined;
    onCleared?: ((...args: any[]) => any) | undefined;
}, {
    format: import("@/interfaces").IFormat;
    name: string;
    internalRangePickedName: string;
    presetRangePickedName: string;
    presetRangesDynamic: import("@/interfaces").DynamicListData;
    qweqweqwe: Function;
    multiCalendars: string | number | boolean;
    modelValue: ModelValue;
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
}>, Record<string, (_: any) => any> & Record<string, (_: {
    text: string;
    value: number;
}) => any>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
