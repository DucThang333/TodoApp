import type { PriorityEnum, StateEnum } from "@/application/domain/models/Task";

export type CardType = {
  title: string;
  startedAt: Date;
  endedAt:Date;
  deadline?: Date;
  state: StateEnum;
  priority: PriorityEnum;
  description: string;
};
