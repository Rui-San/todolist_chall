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

	/**
	 * Requests `TaskRepository` to get a Task by its bid
	 * @param bid The bid of the Task to retrieve
	 * @returns The TaskDto with the given bid
	 */
	public async getTaskByBid(bid: string) {
		try{
			const task = await this.taskRepository.getTaskByBid(bid);
			return TaskMapper.toDto(task);
		}catch(err){
			throw new Error("Error getting task by bid: " + err);
		}
	}

	/**
	 * Requests `TaskRepository` to get all Tasks
	 * @returns An array of TaskDtos
	 */
	public async getAllTasks(){
		try{
			const tasks = await this.taskRepository.getAllTasks();
			return tasks.map(TaskMapper.toDto);
		}catch(err){
			throw new Error("Error getting all tasks: " + err);
		}
	}

}