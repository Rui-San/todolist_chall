import type { TaskDto } from "../dtos/taskDtos";
import { TaskMapper } from "../mappers/taskMapper";
import Task from "../models/task";
import type { TaskRepository } from "../repositories/taskRepository.ts";

export class TaskService {

	private taskRepository : TaskRepository;

	constructor(taskRepository: TaskRepository) {
		this.taskRepository = taskRepository;
	}

	/**
	 * Creates a new Task domain object and requests `TaskRepository` to 
	 * save it to the database
	 * @param newTask The new task data to save
	 * @returns The created Task as a Dto
	 */
	public async createTask(newTask : TaskDto) {
		try{
			const task = new Task(	
				newTask.title,
				newTask.bid,
				newTask.completed ?? false
			); // Ideally this would be done with a factory
			const createdTask = await this.taskRepository.saveTask(task);
			return TaskMapper.toDto(createdTask);
		}catch(err){
			throw new Error("Error creating task: " + err);
		}
	}

}