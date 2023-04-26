import type { ComponentRef, VueEmit } from '@/interfaces';
import type { AllPropsType } from '@/utils/props';
/**
 * Extracted code from the main component, used for calculating the position of the menu
 */
export declare const usePosition: (menuRef: ComponentRef, inputRef: ComponentRef, emit: VueEmit, props: AllPropsType) => {
    openOnTop: import("vue").Ref<boolean>;
    menuPosition: import("vue").Ref<{
        top: string;
        left: string;
        transform: string;
        position?: string | undefined;
    }>;
    setMenuPosition: (recalculate?: boolean) => void;
    setInitialPosition: () => void;
    getScrollableParent: (el: HTMLElement | null) => Window | HTMLElement;
};
