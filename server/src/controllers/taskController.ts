import type { Request, Response } from 'express';
import type { TaskDto } from "../dtos/taskDtos";
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
	public async createTask(req: Request<{}, {}, TaskDto>, res: Response) {
		try{
			const newTask : TaskDto = req.body;
			const createdTask = await this.taskService.createTask(newTask);
			return res.status(201).json(createdTask);
		}catch(err){ // Generic error handling, could be improved with custom error classes
			return res.status(500).json({ message: 'Internal Server Error: ' + err });
		}
	}

}