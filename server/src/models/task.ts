import { getModelForClass, prop } from "@typegoose/typegoose";

export default class Task {
	
	@prop({ required: true })
	private _title!: string;

	@prop({ required: true, default: false })
	private _completed!: boolean;

	get title(): string { return this._title; }
	get completed(): boolean { return this._completed; }
	
	private set title(title: string) {
		if (title.length == 0) 
			throw new Error("Designation value cannot be empty");
		if (title.length > 100) 
			throw new Error("Designation value cannot be longer than 100 characters");	
		this._title = title;
	}

	private set completed(completed: boolean) {
		this._completed = completed;
	}

	public Complete() {
		this.completed = true;
	}

	constructor(title: string, completed?: boolean) {
		this.title = title;
		this.completed = completed ?? false;
	}
}

export const TaskModel = getModelForClass(Task);