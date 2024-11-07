<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import dayjs from "dayjs";
import Badge from "../Badge/badge.vue";
import {
  getLabelPriority,
  getLabelStatus,
  getStylePriority,
  getStyleStatus,
} from "./utils";
const props = defineProps({
  title: {
    type: [String, Element],
  },
  startedAt: Date,
  deadline: Date,
  priority: Number,
  status: Number,
  description: {
    type: String,
  },
});
</script>

<template>
  <div class="card">
    <div class="card-header">
      <p class="card-title">{{ props.title }}</p>
    </div>
    <div class="card-content">
      <div class="card-content-el">
        <div class="card-content-el-label">
          <p>Ngày tạo</p>
        </div>
        <div class="card-content-el-value">
          <p>{{ dayjs(startedAt).format("DD/MM/YY HH:mm:ss") }}</p>
        </div>
      </div>
      <div class="card-content-el">
        <div class="card-content-el-label">
          <p>Hạn</p>
        </div>
        <div class="card-content-el-value">
          <p>
            {{
              deadline
                ? dayjs(deadline).format("DD/MM/YY HH:mm:ss")
                : "chưa đặt hạn"
            }}
          </p>
        </div>
      </div>
      <div class="card-content-el">
        <div class="card-content-el-label">
          <p>Độ ưu tiên</p>
        </div>
        <div class="card-content-el-value">
          <p>
            <Badge
              :backgroundColor="getStylePriority(priority as number).backgroundColor"
              >{{ getLabelPriority(priority as number) }}
            </Badge>
          </p>
        </div>
      </div>
      <div class="card-content-el">
        <div class="card-content-el-label">
          <p>Trạng thái</p>
        </div>
        <div class="card-content-el-value">
          <p>
            <Badge
              :backgroundColor="getStyleStatus(status as number).backgroundColor"
            >
              {{ getLabelStatus(status as number) }}
            </Badge>
          </p>
        </div>
      </div>
      <div class="card-content-el">
        <div class="card-content-el-label">
          <p>Mô tả</p>
        </div>
        <div class="card-content-el-value">
          <textarea :value="description" rows="5" readonly></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 300px;
  border-radius: 5px;
  background-color: blueviolet;
  color: white;
  padding: 5px 5px 15px 5px;
}

.card-header {
  width: 100%;
  padding: 5px 3px;
  border-bottom: 1px solid white;
}

.card-title {
  font-size: 1.1rem;
}

.card-content {
  width: 100%;
  min-height: 100px;
  padding: 7px 0px;
}

.card-content-el {
  width: 100%;
  display: flex;
  padding: 5px 0px;
}

.card-content-el-label {
  width: 40%;
}

.card-content-el-value {
  width: 60%;
}
.card-content-el-value textarea {
  background-color: transparent;
  border: none;
  outline: 0px none transparent;
  color: white;
  min-height: 50px;
  resize: vertical;
}
</style>
