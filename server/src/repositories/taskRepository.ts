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

	/**
	 * Updates an existing Task in the database
	 * Can be used by both PUT and PATCH operations
	 * In this case we'll only implement PATCH
	 * @param task The Task to update
	 * @returns The updated Task
	 */
	public async updateTask(task: Task) : Promise<Task> {
		const updatedDoc = await TaskModel.findOneAndUpdate(
			{ _bid: task.bid },
			TaskMapper.toSchema(task),
			{ new: true }
		).exec();
		if(!updatedDoc)
			throw new Error("Task not found with bid " + task.bid);
		return TaskMapper.fromSchema(updatedDoc);
	}
	
}