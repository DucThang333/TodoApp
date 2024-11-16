<template>
    <Dialog>
        <DialogTrigger>
            <Button variant="outline">Thêm</Button>
        </DialogTrigger>
        <DialogContent class="max-w-2xl divide-y">
            <DialogHeader>
                <p class="text-lg font-semibold">Tạo nhiệm vụ</p>
            </DialogHeader>
            <form @submit="onSubmit" class="grid grid-cols-2 gap-y-6 gap-x-3 py-5">
                <FormField v-slot="{ componentField }" name="title">
                    <FormItem class="flex flex-col col-span-2">
                        <FormLabel>
                            Tiêu đề
                        </FormLabel>
                        <FormControl>
                            <Input v-bind="componentField" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>
                <FormField name="startedAt" v-slot="{ field }">
                    <FormItem class="flex flex-col">
                        <FormLabel>
                            Bắt đầu
                        </FormLabel>
                        <FormControl>
                            <DatePicker :value="field.value" :onchange="field.onChange" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>
                <FormField name="endedAt" v-slot="{ field }">
                    <FormItem class="flex flex-col">
                        <FormLabel>
                            Kết thúc
                        </FormLabel>
                        <FormControl>
                            <DatePicker :value="field.value" :onchange="field.onChange" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>
                <FormField name="state" v-slot="{ componentField }">
                    <FormItem class="flex flex-col">
                        <FormLabel>
                            Trạng thái
                        </FormLabel>
                        <FormControl>
                            <Select v-bind="componentField">
                                <SelectTrigger>
                                    <SelectValue placeholder="Lựa chọn trạng thái"></SelectValue>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem v-for="state in Object.keys(StateEnum).filter((v) => !isNaN(Number(v)))"
                                        :key="state" :value="state">{{
                                            getLabelState(Number(state))
                                        }}
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>
                <FormField name="priority" v-slot="{ componentField }">
                    <FormItem class="flex flex-col">
                        <FormLabel>
                            Độ ưu tiên
                        </FormLabel>
                        <FormControl>
                            <Select v-bind="componentField">
                                <SelectTrigger>
                                    <SelectValue placeholder="Lựa chọn độ ưu tiên"></SelectValue>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem
                                        v-for="priority in Object.keys(PriorityEnum).filter((v) => !isNaN(Number(v)))"
                                        :key="priority" :value="priority">{{
                                            getLabelPriority(Number(priority))
                                        }}
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>
                <FormField name="description" v-slot="{ componentField }">
                    <FormItem class="flex flex-col col-span-2">
                        <FormLabel>
                            Mô tả
                        </FormLabel>
                        <FormControl>
                            <Textarea class="min-h-36 max-h-56" v-bind="componentField"></Textarea>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>
                <Button class="col-span-2">
                    Tạo
                </Button>
            </Form>
        </DialogContent>
    </Dialog>
</template>


<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import DatePicker from '@/components/ui/date-picker/DatePicker.vue';
import Dialog from '@/components/ui/dialog/Dialog.vue';
import DialogContent from '@/components/ui/dialog/DialogContent.vue';
import DialogHeader from '@/components/ui/dialog/DialogHeader.vue';
import DialogTrigger from '@/components/ui/dialog/DialogTrigger.vue';
import { FormField } from '@/components/ui/form';
import FormControl from '@/components/ui/form/FormControl.vue';
import FormItem from '@/components/ui/form/FormItem.vue';
import FormLabel from '@/components/ui/form/FormLabel.vue';
import FormMessage from '@/components/ui/form/FormMessage.vue';
import Input from '@/components/ui/input/Input.vue';
import Select from '@/components/ui/select/Select.vue';
import SelectContent from '@/components/ui/select/SelectContent.vue';
import SelectItem from '@/components/ui/select/SelectItem.vue';
import SelectTrigger from '@/components/ui/select/SelectTrigger.vue';
import SelectValue from '@/components/ui/select/SelectValue.vue';
import Textarea from '@/components/ui/textarea/Textarea.vue';
import { useForm } from 'vee-validate';
import type { HTMLAttributes } from 'vue';
import { z } from 'zod';
import { getLabelPriority, getLabelState } from '../utils';
import { taskUseCase } from '@/application/useCase/Task/init';
import { PriorityEnum, StateEnum } from '@/application/domain/models/Task';

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()

const formSchema = z.object({
    title: z.string(),
    startedAt: z.date().nullable(),
    endedAt: z.date().nullable(),
    state: z.string(),
    priority: z.string(),
    description: z.string().optional()
})

const { handleSubmit } = useForm<z.infer<typeof formSchema>>({
    // validationSchema: formSchema
})

const onSubmit = handleSubmit((value) => {
    taskUseCase.create({
        priority: parseInt(value.priority),
        state: parseInt(value.state),
        title: value.title,
        description: value.description,
        endedAt: value.endedAt ?? undefined,
        startedAt: value.startedAt ?? undefined,
    })
})

</script>
