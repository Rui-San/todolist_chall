import type { Request, Response } from 'express';
import type { CreateTaskDto, TaskDto } from "../dtos/taskDtos";
import type { TaskService } from "../services/taskService";

export class TaskController {

	private taskService : TaskService;

	constructor(taskService: TaskService) {
		this.taskService = taskService;
	}

	/**
	 * Creates a new Task in the system
	 * @param req the request object containing the Task data
	 * @param res the response object
	 * @returns The created Task as json response
	 */
	public async createTask(req: Request<{}, {}, CreateTaskDto>, res: Response) {
		try{
			const newTask : CreateTaskDto = req.body;
			const createdTask = await this.taskService.createTask(newTask);
			return res.status(201).json(createdTask);
		}catch(err){ // Generic error handling, could be improved with custom error classes
			return res.status(500).json({ message: 'Internal Server Error: ' + err });
		}
	}

	/**
	 * Gets a Task by its bid
	 * @param req the request object containing the bid parameter
	 * @param res the response object
	 * @returns The TaskDto as json response
	 */
	public async getTaskByBid(req: Request<{ bid: string }>, res: Response){
		try{
			const bid = req.params.bid;
			const task =  await this.taskService.getTaskByBid(bid);
			return res.status(200).json(task);
		}catch(err){
			return res.status(500).json({ message: 'Internal Server Error: ' + err });
		}
	}

	/**
	 * Gets all Tasks in the system
	 * @param req the request object 
	 * @param res the response object
	 * @returns An array of TaskDto as json response
	 */
	public async getAllTasks(req: Request, res: Response){
		try{
			const tasks = await this.taskService.getAllTasks();
			return res.status(200).json(tasks);
		}catch(err){
			return res.status(500).json({ message: 'Internal Server Error: ' + err });
		}
	}

	/**
	 * Sets a Task as completed by its bid (PATCH)
	 * @param req the request object containing the bid parameter
	 * @param res the response object
	 */
	public async setTaskAsCompleted(req: Request<{ bid: string }>, res: Response){
		try{
			const bid = req.params.bid;
			await this.taskService.setTaskAsCompleted(bid);
			return res.status(200).json({ message: 'Task marked as completed' });
		}catch(err){
			return res.status(500).json({ message: 'Internal Server Error: ' + err });
		}
	}

	public async deleteTask(req: Request<{ bid: string }>, res: Response){
		try{
			const bid = req.params.bid;
			await this.taskService.deleteTask(bid);
			return res.status(200).json({ message: 'Task deleted successfully' });
		}catch(err){
			return res.status(500).json({ message: 'Internal Server Error: ' + err });
		}
	}

}