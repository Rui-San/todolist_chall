import type { CreateTaskDto, TaskDto } from "../dtos/taskDtos";
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
	public async createTask(newTask : CreateTaskDto) {
		try{
			const task = new Task(	
				newTask.title
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

	/**
	 * Sets a Task as completed by its bid
	 * @param bid The bid of the Task to set as completed
	 * @returns The updated TaskDto
	 */
	public async setTaskAsCompleted(bid: string){
		try{
			const task = await this.taskRepository.getTaskByBid(bid);
			task.Complete();
			console.log("Task after completion:", task); // Debug log to verify task state
			const updatedTask = await this.taskRepository.updateTask(task);
			return TaskMapper.toDto(updatedTask);
		}catch(err){
			throw new Error("Error setting task as completed: " + err);
		}
	}

	public async deleteTask(bid: string){
		try{
			await this.taskRepository.deleteTask(bid);
		}catch(err){
			throw new Error("Error deleting task: " + err);
		}
	}

}