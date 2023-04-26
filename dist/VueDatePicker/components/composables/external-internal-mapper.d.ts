import type { ModelValue, VueEmit } from '@/interfaces';
import type { AllPropsType } from '@/utils/props';
import type { Ref } from 'vue';
/**
 * Handles values from external to internal and vise versa
 */
export declare const useExternalInternalMapper: (emit: VueEmit, props: AllPropsType, isInputFocused: Ref<boolean>) => {
    inputValue: Ref<string>;
    internalModelValue: Ref<any>;
    internalPresetName: Ref<string>;
    checkBeforeEmit: () => boolean;
    parseExternalModelValue: (value: ModelValue) => void;
    formatInputValue: () => void;
    emitModelValue: (q?: string) => void;
};
