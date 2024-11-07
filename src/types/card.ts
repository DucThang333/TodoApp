export enum StatusEnum {
  PENDING = 1,
  IN_PROGRESS = 2,
  COMPLETED = 3,
  CANCELLED = 4,
}

export enum PriorityEnum {
  LOW = 1, // Ưu tiên thấp
  MEDIUM = 2, // Ưu tiên trung bình
  HIGH = 3, // Ưu tiên cao
  URGENT = 4, // Ưu tiên khẩn cấp
}

export type CardType = {
  title: string;
  startedAt: Date;
  deadline?: Date;
  status: StatusEnum;
  priority: PriorityEnum;
  description: string;
};
