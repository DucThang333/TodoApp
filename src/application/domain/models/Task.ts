export enum StateEnum {
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


export type Task = {
  id:number;
  title: string;
  startedAt?: Date;
  endedAt?:Date;
  state: StateEnum;
  priority: PriorityEnum;
  description?: string;
};



export type InputCreateTask = Omit<Task,"id">

export type InputUpdateTask = Task

export type InputGetTask = {
  id:number
}

export type OutputGetTask = Task


export type OutputGetListTask = Task[]


export type InputDeleteTask = {
  id:number
}