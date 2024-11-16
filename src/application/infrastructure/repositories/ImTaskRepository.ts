import type { Response } from "@/application/domain/models/response";
import { AxiosError } from "axios";
import api from "@/application/infrastructure/api/index";
import type { TaskRepository } from "@/application/domain/repositories/TaskRepository";
import type { InputCreateTask, InputDeleteTask, InputGetTask, InputUpdateTask, Task } from "@/application/domain/models/Task";
import { IndexedDBService } from "../indexedDB";
import { TASK } from "../indexedDB/constant";

export class ImTaskRepository implements TaskRepository {
  getTask(params:InputGetTask): Promise<Response<Task>> {
    throw new Error("Method not implemented.");
  }
  async createTask(payload:InputCreateTask): Promise<Response<null>> {
    const db = new IndexedDBService(TASK)
    await db.openDB()
    return db.put(payload).then(()=>{
      return {
        status: 200,
        data: null,
        isSuccess: true,
      }
    }).finally(()=>{
      db.disconnect()
      return {
        status:  500,
        message: "internal server",
        data: null,
        isSuccess: false,
      }
    })
  }
  updateTask(payload:InputUpdateTask): Promise<Response<null>> {
    throw new Error("Method not implemented.");
  }
  deleteTask(params:InputDeleteTask): Promise<Response<null>> {
    throw new Error("Method not implemented.");
  }
  async getTasks(): Promise<Response<Task[]>> {
    const db = new IndexedDBService(TASK)
    await db.openDB()
    return db.getAll().then((res)=>{
      console.log('res: ', res);
      return {
        status: 200,
        data: res,
        isSuccess: true,
      }
    }).finally(()=>{
      db.disconnect()
      return {
        status: 500,
        message: "internal server",
        data: null,
        isSuccess: false,
      }
    })
  }
}
