import type { ExtendedProps, ICalendarDay, IMarker, InternalModuleValue, VueEmit } from '@/interfaces';
import type { UnwrapRef, Ref } from 'vue';
export declare const useCalendar: (props: ExtendedProps, emit: VueEmit, updateFlow: () => void, triggerCalendarTransition: (inst?: number) => void, flowStep: Ref<number>) => {
    time: {
        hours: number | number[];
        minutes: number | number[];
        seconds: number | number[];
    };
    month: import("vue").ComputedRef<(instance: number) => number>;
    year: import("vue").ComputedRef<(instance: number) => number>;
    modelValue: import("vue").WritableComputedRef<InternalModuleValue>;
    calendars: Ref<{
        month: number;
        year: number;
    }[]>;
    monthYearSelect: (isYear?: boolean) => Promise<void>;
    isDisabled: (date: Date) => boolean;
    updateTime: (value: number | number[], isHours?: boolean, isSeconds?: boolean) => void;
    getWeekNum: (days: UnwrapRef<ICalendarDay[]>) => string | number;
    selectDate: (day: UnwrapRef<ICalendarDay>, isNext?: boolean) => void;
    updateMonthYear: (instance: number, val: {
        month: number;
        year: number;
        fromNav?: boolean | undefined;
    }) => void;
    handleScroll: (event: WheelEvent, instance: number) => void;
    getMarker: (date: UnwrapRef<ICalendarDay>) => IMarker | undefined;
    handleArrow: (arrow: 'left' | 'right', instance: number, vertical?: boolean) => void;
    handleSwipe: (direction: 'left' | 'right', instance: number) => void;
    selectCurrentDate: () => void;
    presetDateRange: (hasSlot?: boolean, preset?: string, dates?: Date[] | string[]) => void;
};
