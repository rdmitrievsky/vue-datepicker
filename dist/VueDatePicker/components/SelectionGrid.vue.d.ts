import type { PropType } from 'vue';
import type { IDefaultSelect, Flow, AriaLabels } from '@/interfaces';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    items: {
        type: PropType<IDefaultSelect<number>[][]>;
        default: () => never[];
    };
    modelValue: {
        type: PropType<string | number>;
        default: null;
    };
    multiModelValue: {
        type: PropType<Date[]>;
        default: () => never[];
    };
    disabledValues: {
        type: PropType<number[]>;
        default: () => never[];
    };
    minValue: {
        type: PropType<string | number | null>;
        default: null;
    };
    maxValue: {
        type: PropType<string | number | null>;
        default: null;
    };
    year: {
        type: PropType<number>;
        default: number;
    };
    skipActive: {
        type: PropType<boolean>;
        default: boolean;
    };
    headerRefs: {
        type: PropType<(HTMLElement | null)[]>;
        default: () => never[];
    };
    skipButtonRef: {
        type: PropType<boolean>;
        default: boolean;
    };
    monthPicker: {
        type: PropType<boolean>;
        default: boolean;
    };
    yearPicker: {
        type: PropType<boolean>;
        default: boolean;
    };
    escClose: {
        type: PropType<boolean>;
        default: boolean;
    };
    type: {
        type: PropType<Flow>;
        default: null;
    };
    arrowNavigation: {
        type: PropType<boolean>;
        default: boolean;
    };
    autoApply: {
        type: PropType<boolean>;
        default: boolean;
    };
    textInput: {
        type: PropType<boolean>;
        default: boolean;
    };
    ariaLabels: {
        type: PropType<AriaLabels>;
        default: () => {};
    };
    hideNavigation: {
        type: PropType<Flow[]>;
        default: () => never[];
    };
}, {
    focusGrid: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("toggle" | "update:model-value" | "selected" | "reset-flow")[], "toggle" | "update:model-value" | "selected" | "reset-flow", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    items: {
        type: PropType<IDefaultSelect<number>[][]>;
        default: () => never[];
    };
    modelValue: {
        type: PropType<string | number>;
        default: null;
    };
    multiModelValue: {
        type: PropType<Date[]>;
        default: () => never[];
    };
    disabledValues: {
        type: PropType<number[]>;
        default: () => never[];
    };
    minValue: {
        type: PropType<string | number | null>;
        default: null;
    };
    maxValue: {
        type: PropType<string | number | null>;
        default: null;
    };
    year: {
        type: PropType<number>;
        default: number;
    };
    skipActive: {
        type: PropType<boolean>;
        default: boolean;
    };
    headerRefs: {
        type: PropType<(HTMLElement | null)[]>;
        default: () => never[];
    };
    skipButtonRef: {
        type: PropType<boolean>;
        default: boolean;
    };
    monthPicker: {
        type: PropType<boolean>;
        default: boolean;
    };
    yearPicker: {
        type: PropType<boolean>;
        default: boolean;
    };
    escClose: {
        type: PropType<boolean>;
        default: boolean;
    };
    type: {
        type: PropType<Flow>;
        default: null;
    };
    arrowNavigation: {
        type: PropType<boolean>;
        default: boolean;
    };
    autoApply: {
        type: PropType<boolean>;
        default: boolean;
    };
    textInput: {
        type: PropType<boolean>;
        default: boolean;
    };
    ariaLabels: {
        type: PropType<AriaLabels>;
        default: () => {};
    };
    hideNavigation: {
        type: PropType<Flow[]>;
        default: () => never[];
    };
}>> & {
    onToggle?: ((...args: any[]) => any) | undefined;
    "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
    onSelected?: ((...args: any[]) => any) | undefined;
    "onReset-flow"?: ((...args: any[]) => any) | undefined;
}, {
    year: number;
    modelValue: string | number;
    ariaLabels: AriaLabels;
    hideNavigation: Flow[];
    autoApply: boolean;
    escClose: boolean;
    arrowNavigation: boolean;
    monthPicker: boolean;
    yearPicker: boolean;
    textInput: boolean;
    type: Flow;
    items: IDefaultSelect<number>[][];
    multiModelValue: Date[];
    disabledValues: number[];
    minValue: string | number | null;
    maxValue: string | number | null;
    skipActive: boolean;
    headerRefs: (HTMLElement | null)[];
    skipButtonRef: boolean;
}>, {
    header: (_: {}) => any;
    overlay: (_: {}) => any;
    item: (_: {
        item: {
            className: {
                dp__overlay_cell_active: boolean;
                dp__overlay_cell: boolean;
                dp__overlay_cell_disabled: boolean;
                dp__overlay_cell_active_disabled: boolean;
                dp__overlay_cell_pad: boolean;
                dp__cell_in_between: boolean;
            };
            value: number;
            text: string;
        };
    }) => any;
    'button-icon': (_: {}) => any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
