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
	
}