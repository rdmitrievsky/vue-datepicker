export declare const useArrowNavigation: () => {
    buildMatrix: (elements: Array<HTMLElement | null>, set: 'monthYear' | 'time' | 'actionRow') => void;
    buildMultiLevelMatrix: (elements: HTMLElement[][], set: 'calendar' | 'selectionGrid' | 'monthPicker') => void;
    setTimePickerBackRef: (el: HTMLElement | null) => void;
    setSelectionGrid: (value: boolean) => void;
    setTimePicker: (value: boolean, mode?: boolean) => void;
    setTimePickerElements: (elements: HTMLElement[][], order?: 0 | 1) => void;
    arrowRight: () => void;
    arrowLeft: () => void;
    arrowUp: () => void;
    arrowDown: () => void;
    clearArrowNav: () => void;
    setMonthPicker: (value: boolean) => void;
    refSets: {
        monthYear: (HTMLElement | null)[];
        calendar: (HTMLElement | null)[][];
        time: (HTMLElement | null)[];
        actionRow: (HTMLElement | null)[];
        selectionGrid: (HTMLElement | null)[][];
        timePicker: {
            0: (HTMLElement | null)[][];
            1: (HTMLElement | null)[][];
        };
        monthPicker: (HTMLElement | null)[][];
    };
};
