import httpServive from './httpService';
import { type CreateTaskDto, type TaskDto } from '../models/task';

// An alternative implmentation of this serice would be to extend a BaseService class
// but I won't take this into account for this simple project
export default class TaskService {

    async createTask(task: CreateTaskDto): Promise<TaskDto> {
        return await httpServive.post<TaskDto>('/tasks', task);
    }

    async getAllTasks(): Promise<TaskDto[]> {
        return await httpServive.get<TaskDto[]>('/tasks');
    }

    async completeTask(id: string): Promise<TaskDto> {
        return await httpServive.patchNoData<TaskDto>(`/tasks/${id}`);
    }

    async deleteTask(id: string): Promise<void> {
        await httpServive.delete(`/tasks/${id}`);
    }
}