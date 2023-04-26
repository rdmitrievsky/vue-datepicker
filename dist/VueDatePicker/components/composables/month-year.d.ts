import type { ExtendedProps, VueEmit } from '@/interfaces';
export declare const useMontYearPick: (props: {
    month: number;
    year: number;
} & ExtendedProps, emit: VueEmit) => {
    handleMonthYearChange: (isNext: boolean) => void;
    isDisabled: import("vue").ComputedRef<(next: boolean) => boolean>;
    updateMonthYear: (month: number, year: number) => void;
};
