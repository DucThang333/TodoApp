import type { Response } from "@/application/domain/models/response";
import type { InputCreateTask, InputDeleteTask, InputGetTask, InputUpdateTask, OutputGetListTask, OutputGetTask, Task } from "../models/Task";

export interface TaskRepository {
  getTasks(): Promise<Response<OutputGetListTask>>;
  getTask(params:InputGetTask): Promise<Response<OutputGetTask>>;
  createTask(payload: InputCreateTask): Promise<Response<null>>;
  updateTask(payload: InputUpdateTask): Promise<Response<null>>;
  deleteTask(params:InputDeleteTask): Promise<Response<null>>;
}
