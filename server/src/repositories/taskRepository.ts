import { TaskMapper } from "../mappers/taskMapper";
import Task, { TaskModel } from "../models/task";

export class TaskRepository {

	/**
	 * Creates and saves a new Task in the database
	 * @param newTask The Task to save
	 * @returns The saved Task
	 */
	public async saveTask(newTask : Task) : Promise<Task> {
		console.log("New task (repo):", newTask); // Debug log to verify task data
		const createdTaskDoc = await TaskModel.create(
			TaskMapper.toSchema(newTask)
		);
		console.log("Created task document:", createdTaskDoc); // Debug log to verify created document
		return TaskMapper.fromSchema(createdTaskDoc);
	}

	/**
	 * Gets a Task by its bid in the database
	 * @param bid The bid of the Task to retrieve
	 * @returns The Task with the given bid
	 */
	public async getTaskByBid(bid: string) : Promise<Task> {
		console.log("Searching for task with bid (repo):", bid); // Debug log to verify bid
		const taskDoc = await TaskModel.findOne({ _bid: bid }).exec();
		if(!taskDoc)
			throw new Error("Task not found with bid " + bid);
		return TaskMapper.fromSchema(taskDoc);
	}

	/**
	 * Gets all Tasks from the database
	 * @returns An array of all Tasks
	 */
	public async getAllTasks() : Promise<Task[]> {
		const taskDocs = await TaskModel.find().exec();
		return taskDocs.map(doc => TaskMapper.fromSchema(doc));
	}
	
}