import type { PropType } from 'vue';
import type { IDefaultSelect, Transition, AriaLabels, Flow } from '@/interfaces';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    ariaLabel: {
        type: PropType<string>;
        default: string;
    };
    showSelectionGrid: {
        type: PropType<boolean>;
        default: boolean;
    };
    modelValue: {
        type: PropType<number>;
        default: null;
    };
    items: {
        type: PropType<IDefaultSelect<number>[][]>;
        default: () => never[];
    };
    disabledValues: {
        type: PropType<number[]>;
        default: () => never[];
    };
    minValue: {
        type: PropType<number | null>;
        default: null;
    };
    maxValue: {
        type: PropType<number | null>;
        default: null;
    };
    slotName: {
        type: PropType<string>;
        default: string;
    };
    overlaySlot: {
        type: PropType<string>;
        default: string;
    };
    headerRefs: {
        type: PropType<(HTMLElement | null)[]>;
        default: () => never[];
    };
    escClose: {
        type: PropType<boolean>;
        default: boolean;
    };
    type: {
        type: PropType<"month" | "year">;
        default: null;
    };
    transitions: {
        type: PropType<Transition>;
        default: boolean;
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
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("toggle" | "update:model-value" | "set-ref")[], "toggle" | "update:model-value" | "set-ref", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    ariaLabel: {
        type: PropType<string>;
        default: string;
    };
    showSelectionGrid: {
        type: PropType<boolean>;
        default: boolean;
    };
    modelValue: {
        type: PropType<number>;
        default: null;
    };
    items: {
        type: PropType<IDefaultSelect<number>[][]>;
        default: () => never[];
    };
    disabledValues: {
        type: PropType<number[]>;
        default: () => never[];
    };
    minValue: {
        type: PropType<number | null>;
        default: null;
    };
    maxValue: {
        type: PropType<number | null>;
        default: null;
    };
    slotName: {
        type: PropType<string>;
        default: string;
    };
    overlaySlot: {
        type: PropType<string>;
        default: string;
    };
    headerRefs: {
        type: PropType<(HTMLElement | null)[]>;
        default: () => never[];
    };
    escClose: {
        type: PropType<boolean>;
        default: boolean;
    };
    type: {
        type: PropType<"month" | "year">;
        default: null;
    };
    transitions: {
        type: PropType<Transition>;
        default: boolean;
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
    "onSet-ref"?: ((...args: any[]) => any) | undefined;
    "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: number;
    transitions: Transition;
    ariaLabels: AriaLabels;
    hideNavigation: Flow[];
    autoApply: boolean;
    escClose: boolean;
    arrowNavigation: boolean;
    textInput: boolean;
    type: "month" | "year";
    ariaLabel: string;
    items: IDefaultSelect<number>[][];
    disabledValues: number[];
    minValue: number | null;
    maxValue: number | null;
    headerRefs: (HTMLElement | null)[];
    showSelectionGrid: boolean;
    slotName: string;
    overlaySlot: string;
}>, Record<string, (_: {
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
}) => any> & Record<string, (_: {}) => any> & Record<string, (_: {}) => any> & {
    default: (_: {}) => any;
    'calendar-icon': (_: {}) => any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
