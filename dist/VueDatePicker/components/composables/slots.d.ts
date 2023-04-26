import type { Slots } from 'vue';
import type { PresetRange } from '@/interfaces';
export declare const slots: {
    name: string;
    use: string[];
}[];
export declare const inputSlots: {
    name: string;
}[];
export declare const mapSlots: (slots: Slots, usage: 'all' | 'monthYear' | 'timePicker' | 'input' | 'action' | 'calendar' | 'menu', presetRanges?: PresetRange[]) => string[];
