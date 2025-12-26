import httpServive from './httpService';
import { type TaskDto } from '../models/task';

export default class TaskService {
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