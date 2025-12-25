import type { TaskDto } from "../dtos/taskDtos";
import Task from "../models/task";

export class TaskMapper {

	static toDto(task: Task): TaskDto {
		return {
			bid: task.bid,
			title: task.title,
			completed: task.completed
		};
	}

	static fromSchema(doc : any) : Task {
		return new Task(
			doc._title,
			doc._bid,
			doc._completed
		);
	}

	static toSchema(task: Task) : any {
		return {
			bid: task.bid,
			title: task.title,
			completed: task.completed
		};
	}

}