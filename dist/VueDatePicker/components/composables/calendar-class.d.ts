import type { UnwrapRef, WritableComputedRef } from 'vue';
import type { ExtendedProps, ICalendarDay, InternalModuleValue } from '@/interfaces';
export declare const useCalendarClass: (modelValue: WritableComputedRef<InternalModuleValue>, props: ExtendedProps) => {
    setHoverDate: (day: UnwrapRef<ICalendarDay>) => void;
    clearHoverDate: () => void;
    getDayClassData: (day: ICalendarDay) => Record<string, boolean>;
};
