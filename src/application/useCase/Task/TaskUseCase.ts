import type { InputCreateTask, InputDeleteTask, InputGetTask, InputUpdateTask, Task } from "@/application/domain/models/Task";
import type { TaskRepository } from "@/application/domain/repositories/TaskRepository";

export class TaskUseCase{
    constructor(private taskRepository:TaskRepository) {}
    async get(params:InputGetTask){
        const result = await this.taskRepository.getTask(params);
        return result
    }
    async getList(){        
        const result = await this.taskRepository.getTasks();
        return result.data
    }
    async create(payload:InputCreateTask){
        const result = await this.taskRepository.createTask(payload);
        console.log('result: ', result);
        return result
    }
    
    async update(payload:InputUpdateTask){
        const result = await this.taskRepository.updateTask(payload);
    }

    async delete(params:InputDeleteTask){
        const result = await this.taskRepository.deleteTask(params);
    }
}