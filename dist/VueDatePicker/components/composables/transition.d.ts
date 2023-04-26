import type { Transition } from '@/interfaces';
export declare const useTransitions: (transitions: Transition | boolean) => {
    transitionName: import("vue").ComputedRef<(isOpen: boolean) => string>;
    showTransition: boolean;
};
