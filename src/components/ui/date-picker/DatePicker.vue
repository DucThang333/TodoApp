<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import dayjs from 'dayjs'
import { Calendar as CalendarIcon } from 'lucide-vue-next'
import { type DateValue } from '@internationalized/date'
import { ref, watch, type PropType } from 'vue'
const props = defineProps({
    value: Date,
    onchange: {
        type: Function as PropType<(value: Date | undefined) => void>,
        required: true,
    }
})
const _value = ref<DateValue>()


const handleUpdate = (value: DateValue | undefined) => {
    props.onchange(value ? new Date(value.year, value.month - 1, value.day) : undefined)
}

</script>

<template>
    <Popover>
        <PopoverTrigger as-child>
            <Button variant="outline" :class="cn(
                'w-[280px] justify-start text-left font-normal',
                !props.value && 'text-muted-foreground',
            )">
                <CalendarIcon class="mr-2 h-4 w-4" />
                {{ props.value ? dayjs(props.value).format("DD/MM/YYYY") : "Pick a date" }}
            </Button>
        </PopoverTrigger>
        <PopoverContent class="w-auto p-0">
            <Calendar v-model="_value" @update:model-value="handleUpdate" initial-focus />
        </PopoverContent>
    </Popover>
</template>