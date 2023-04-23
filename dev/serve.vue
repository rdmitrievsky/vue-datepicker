<template>
    <div class="wrapper">
        <Datepicker
            v-model="selectedDate"
            placeholder="Select Date"
            range
            six-weeks
            locale="ru"
            :format="formatqwe"
            :preset-ranges="presetRanges"
            :preset-ranges-dynamic="{ dynamic: true, data: LIST_DATA_PICKER }"
            @preset-range-clicked="bebebe"
            :preset-range-picked-name="isDateUp"
            :qweqweqwe="renewDate"
            @update:model-value="setDate"
            :partial-range="false"
        >
            <template #right-sidebar="{ value }">
                <div v-for="i in value" :key="i">{{ i && format(i, "dd-MM-yyyy','HH:mm:ss") }}</div>
            </template>
            <template #action-row="{ closePicker, selectDate }">
                <div class="action-row">
                    <button class="select-button" @click="closePicker">Close</button>
                    <button class="select-button" @click="selectDate">Select Date</button>
                </div>
            </template>
            <template #clock-icon>
                <span>time</span>
            </template>
        </Datepicker>
        <button @click="changePresetName('Прошлая неделя')">Прошлая неделя</button>
        <button @click="changePresetName('Сегодня')">Сегодня</button>
    </div>
</template>

<script lang="ts" setup>
    import { ref, computed } from 'vue';
    import { format, startOfMonth, subMonths, endOfMonth, startOfYear } from 'date-fns';
    import Datepicker from '../src/VueDatePicker/VueDatePicker.vue';
    export interface ListData {
        from: { [key: string]: number };
        to: { [key: string]: number };
        txt: string;
        range: number;
        sectionEnd?: boolean;
    }
    const isDateUp = ref('Прошлая неделя');

    const selectedDate2 = ref();
    const presetRanges2 = ref([
        { label: 'Today', range: [new Date(), new Date()] },
        { label: 'This month', range: [startOfMonth(new Date()), endOfMonth(new Date())] },
        {
            label: 'Last month',
            range: [startOfMonth(subMonths(new Date(), 1)), endOfMonth(subMonths(new Date(), 1))],
        },
        { label: 'This year', range: [startOfYear(new Date()), new Date()] },
    ]);
    function changePresetName(q) {
        isDateUp.value = q;
    }
    function setDate(e, q) {
        console.log(q);
        console.log(`DATA IS SET TO ${e}`);
        isDateUp.value = q;
    }
    const LIST_DATA_PICKER: ListData[] = [
        { from: { daysFull: 1 }, to: { daysEnd: 1 }, txt: 'Вчера', range: 1 },
        { from: { daysFull: 2 }, to: { daysEnd: 2 }, txt: 'Позавчера', range: 1 },
        { from: { weeksFull: 1 }, to: { weeksEnd: 1 }, txt: 'Прошлая неделя', range: 1 },
        { from: { monthsFull: 1 }, to: { monthsEnd: 1 }, txt: 'Прошлый месяц', range: 4, sectionEnd: true },
        { from: { daysFull: 0 }, to: { daysEnd: 0 }, txt: 'Сегодня', range: 1 },
        { from: { weeksFull: 0 }, to: { weeksEnd: 0 }, txt: 'Текущая неделя', range: 1 },
        { from: { monthsFull: 0 }, to: { monthsEnd: 0 }, txt: 'Текущий месяц', range: 4 },
        { from: { yearsFull: 3 }, to: { yearsEnd: 0 }, txt: 'Текущий год', range: 4, sectionEnd: true },
        { from: { hours: 24 }, to: { hoursEnd: 0 }, txt: 'Последние 24 часа', range: 1 },
        { from: { days: 2 }, to: { daysEnd: 0 }, txt: 'Последние 2 дня', range: 1 },
        { from: { days: 7 }, to: { daysEnd: 0 }, txt: 'Последние 7 дней', range: 1 },
        { from: { days: 30 }, to: { daysEnd: 0 }, txt: 'Последние 30 дней', range: 4 },
        { from: { months: 3 }, to: { monthsEnd: 0 }, txt: 'Последние 3 месяца', range: 4 },
        { from: { months: 6 }, to: { monthsEnd: 0 }, txt: 'Последние 6 месяцев', range: 4, sectionEnd: true },
        { from: { minutes: 5 }, to: { minutesEnd: 0 }, txt: 'Последние 5 минут', range: 1 },
        { from: { minutes: 15 }, to: { minutesEnd: 0 }, txt: 'Последние 15 минут', range: 1 },
        { from: { minutes: 30 }, to: { minutesEnd: 0 }, txt: 'Последние 30 минут', range: 1 },
        { from: { hours: 1 }, to: { hoursEnd: 0 }, txt: 'Последний час', range: 1 },
        { from: { hours: 4 }, to: { hoursEnd: 0 }, txt: 'Последние 4 часа', range: 1 },
        { from: { hours: 12 }, to: { hoursEnd: 0 }, txt: 'Последние 12 часов', range: 1 },
    ];
    const presetRanges = LIST_DATA_PICKER.map((i) => {
        return { label: i.txt };
    });

    function bebebe(e) {
        console.log(e);
    }

    function testTst(e) {
        console.log(e + ' ' + 'ewrwer');
    }

    interface DateEnter {
        [key: string]: number;
    }
    const findTimeOrDate = (smth: DateEnter, end: DateEnter) => {
        const currDate = new Date();
        let endDate = new Date();
        if (typeof smth === 'object') {
            const key = Object.keys(smth)[0];
            if (key === 'minutes') {
                currDate.setTime(currDate.getTime() - Number(smth[key]) * 60 * 1000);
            }
            if (key === 'hours') {
                currDate.setTime(currDate.getTime() - Number(smth[key]) * 60 * 60 * 1000);
            }
            if (key === 'days') {
                currDate.setDate(currDate.getDate() - Number(smth[key]));
            }
            if (key === 'daysFull') {
                // currDate.getDay()
                currDate.setDate(currDate.getDate() - Number(smth[key]));
                currDate.setHours(0, 0, 0, 0);
            }
            if (key === 'weeksFull') {
                // currDate.getDay()
                const findDate = new Date();
                findDate.setDate(currDate.getDate() - Number(smth[key]) * 7);
                const findOutDay = findDate.getDay();
                currDate.setDate(findDate.getDate() - (6 - findOutDay));
                currDate.setHours(0, 0, 0, 0);
            }
            if (key === 'months') {
                currDate.setMonth(currDate.getMonth() - Number(smth[key]));
            }
            if (key === 'monthsFull') {
                currDate.setMonth(currDate.getMonth() - Number(smth[key]));
                currDate.setDate(1);
                currDate.setHours(0, 0, 0, 0);
            }
            if (key === 'yearsFull') {
                currDate.setMonth(0);
                currDate.setDate(1);
                currDate.setHours(0, 0, 0, 0);
            }
        }
        if (typeof end === 'object') {
            const key = Object.keys(end)[0];

            if (Object.values(end)[0] === 0) {
                endDate = new Date();
            } else {
                if (key === 'daysEnd') {
                    endDate.setDate(endDate.getDate() - Number(end[key]));
                    endDate.setHours(23, 59, 59, 999);
                }
                if (key === 'weeksEnd') {
                    endDate.setDate(endDate.getDate() - Number(end[key]) * 7 - (endDate.getDay() - 1) + 6);
                    endDate.setHours(23, 59, 59, 999);
                }
                if (key === 'monthsEnd') {
                    endDate.setMonth(endDate.getMonth() - Number(end[key]) + 1);
                    endDate.setDate(0);
                    endDate.setHours(23, 59, 59, 999);
                }
            }
        }
        return { startDate: currDate, endDate: endDate };
    };

    interface GetDate {
        startDate: Date;
        endDate: Date;
    }

    const renewDate = (dateName: string, props?: any): GetDate | undefined => {
        if (Array.isArray(props)) {
            const FLATTED_LIST_DATA = props.reduce((acc, val) => acc.concat(val), []);
            const DATE_RANGE = FLATTED_LIST_DATA.find((i: ListData) => i.txt === dateName);
            if (DATE_RANGE) {
                return findTimeOrDate(DATE_RANGE.from, DATE_RANGE.to);
            }
        } else {
            if (props.presetRangesDynamic.data) {
                const DATE_RANGE = props.presetRangesDynamic.data.find((i: ListData) => i.txt === dateName);
                if (DATE_RANGE) {
                    return findTimeOrDate(DATE_RANGE.from, DATE_RANGE.to);
                }
            }
        }
    };

    // const selectedDate = ref(renewDate('Последние 7 дней', LIST_DATA_PICKER));

    const start = renewDate('Вчера', LIST_DATA_PICKER)?.startDate;
    const end = renewDate('Вчера', LIST_DATA_PICKER)?.endDate;
    console.log(start, end);
    const selectedDate = ref();
    if (start && end) {
        isDateUp.value = 'Вчера';
        selectedDate.value = [start, end];
    }

    function formatqwe(date) {
        console.log(date);
        if (date.length < 2) return;
        const one = (date[0] as Date).toLocaleString('ru-RU');
        const two = (date[1] as Date).toLocaleString('ru-RU');
        if (isDateUp.value && isDateUp.value != '') {
            return isDateUp.value;
        } else {
            return `${one} - ${two}`;
        }
    }
</script>

<style lang="scss">
    @import 'src/VueDatePicker/style/main';
    .wrapper {
        padding: 200px;
    }
</style>
