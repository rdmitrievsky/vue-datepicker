export declare const useState: () => {
    control: import("vue").ComputedRef<{
        shiftKeyInMenu: boolean;
        menuFocused: boolean;
    }>;
    setMenuFocused: (value: boolean) => void;
    setShiftKey: (value: boolean) => void;
};
