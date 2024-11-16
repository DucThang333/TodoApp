<template>
  <section class="container divide-y py-20">
    <header class="py-5">
      <CreateTask />
    </header>
    <main class="max-w-6xl py-5">
      <table class="w-full table-fixed" cellpadding="3">
        <thead>
          <tr>
            <th v-for="state in Object.values(StateEnum).filter(
              (key) => !isNaN(Number(key))
            )" :key="state">
              <div class="text-center my-2 p-1 font-semibold rounded" :style="{
                backgroundColor: getStyleState(state as StateEnum).backgroundColor,
                color: getStyleState(state as StateEnum).color
              }">
                {{ getLabelState(state as StateEnum) }}
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td v-for="state in Object.values(StateEnum).filter(
              (key) => !isNaN(Number(key))
            )" :key="state" class="align-top">
              <div class="flex flex-col gap-1">
                <Card class="divide-y rounded bg-slate-300 hover:bg-slate-400/50 cursor-pointer"
                  v-for="task in tasks.filter(c => c.state === state)">
                  <CardHeader class="py-2 px-2">
                    <p class="truncate font-medium">{{ task.title }}</p>
                  </CardHeader>
                  <CardContent class="p-2 py-4">
                    <div class="flex flex-col gap-2">
                      <div class="flex text-sm gap-1">
                        <p>Bắt đầu : </p>
                        <p>{{ dayjs(task.startedAt).format("DD/MM/YYYY") }}</p>
                      </div>
                      <div class="flex text-sm gap-1">
                        <p>Kết thúc : </p>
                        <p>{{ dayjs(task.endedAt).format("DD/MM/YYYY") }}</p>
                      </div>
                      <div class="flex text-sm gap-1">
                        <p>Trạng thái : </p>
                        <Badge variant="default">
                          {{ getLabelState(task.state) }}
                        </Badge>
                      </div>
                      <div class="flex text-sm gap-1">
                        <p>Độ ưu tiên : </p>
                        <Badge variant="default">
                          {{ getLabelPriority(task.priority as PriorityEnum) }}
                        </Badge>
                      </div>
                      <div class="flex text-sm gap-1">
                        <p>Mô tả :</p>
                        <textarea readonly
                          class="bg-transparent grow focus:outline-none min-h-20 max-h-40 cursor-pointer">{{ task.description }}</textarea>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  </section>
</template>

<script setup lang="ts">
import { PriorityEnum, StateEnum } from "@/application/domain/models/Task";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { getLabelPriority, getLabelState, getStyleState } from "../utils";
import dayjs from "dayjs";
import Badge from "@/components/ui/badge/Badge.vue";
import CreateTask from "../components/CreateTask.vue";
import type { CardType } from "@/types/card";
import { taskUseCase } from "@/application/useCase/Task/init";


const tasks: CardType[] = await taskUseCase.getList() as CardType[]

</script>