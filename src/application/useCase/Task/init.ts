import { ImTaskRepository } from "@/application/infrastructure/repositories/ImTaskRepository";
import { TaskUseCase } from "./TaskUseCase";

const taskRepository = new ImTaskRepository();
const taskUseCase = new TaskUseCase(taskRepository);    
export {taskUseCase};