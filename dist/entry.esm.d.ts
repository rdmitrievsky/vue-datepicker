import component from './VueDatePicker/VueDatePicker.vue';
import type { Plugin } from 'vue';
type InstallableComponent = typeof component & {
    install: Exclude<Plugin['install'], undefined>;
};
declare const _default: InstallableComponent;
export default _default;
