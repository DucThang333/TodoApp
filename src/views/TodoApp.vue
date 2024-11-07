<script setup lang="ts">
import { StatusEnum, type CardType } from "@/types/card";
import Button from "../components/Button/index.vue";
import Card from "../components/Card/card.vue";
import { getLabelStatus, getStyleStatus } from "@/components/Card/utils";

const cards: CardType[] = [
  {
    title: "title",
    startedAt: new Date("2024-11-07T10:11:00"),
    priority: 1,
    status: 1,
    description: "mo ta",
  },
  {
    title: "title",
    startedAt: new Date("2024-11-07T10:11:00"),
    priority: 2,
    status: 2,
    description: "mo ta",
  },
  {
    title: "title",
    startedAt: new Date("2024-11-07T10:11:00"),
    priority: 3,
    status: 3,
    description: "mo ta",
  },
  {
    title: "title",
    startedAt: new Date("2024-11-07T10:11:00"),
    priority: 3,
    status: 4,
    description: "mo ta",
  }, {
    title: "title",
    startedAt: new Date("2024-11-07T10:11:00"),
    priority: 1,
    status: 4,
    description: "mo ta",
  },
];
</script>

<template>
  <section class="container">
    <header>
      <form onsubmit="">
        <Button type="submit">
          Thêm
        </Button>
      </form>
    </header>
    <body>
      <div
        v-for="status in Object.values(StatusEnum).filter(
          (key) => !isNaN(Number(key))
        )"
        :key="status"
        class="body-content"
      >
        <div>
          <div
            class="body-content-label"
            :style="{backgroundColor:getStyleStatus(status as StatusEnum).backgroundColor}"
          >
            <p>{{ getLabelStatus(status as StatusEnum) }}</p>
          </div>
          <div class="body-content-item">
            <Card
              v-for="(card, index) in cards.filter((c) => c.status == status)"
              :key="index"
              :title="card.title"
              :startedAt="card.startedAt"
              :priority="card.priority"
              :status="card.status"
              :description="card.description"
            />
          </div>
        </div>
      </div>
    </body>
  </section>
</template>

<style scoped>
.container {
  width: 100%;
  margin: auto;
  margin-top: 60px;
}
header {
  width: 100%;
  border-bottom: 1px solid white;
  padding: 10px 2px;
}
body {
  width: 100%;
  padding: 10px 2px;
  display: flex;
  justify-content: space-between;
}
.body-content {
  display: flex;
  justify-content: space-between;
  gap: 5px;
}
.body-content-label {
  color: white;
  padding: 5px;
  border-radius: 3px;
  width: 300px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
}
.body-content-item {
  display: flex;
  flex-direction: column;
  gap: 7px;
}
</style>
