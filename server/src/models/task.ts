import { getModelForClass, prop } from "@typegoose/typegoose";
import RandomBidGenerator from "../utils/randomBidGenerator";

export default class Task {
	
	@prop({ unique: true, required: true,})
	private _bid!: string;

	@prop({ required: true })
	private _title!: string;

	@prop({ required: true, default: false })
	private _completed!: boolean;

	get bid(): string { return this._bid ; }
	get title(): string { return this._title; }
	get completed(): boolean { return this._completed; }
	
	private set bid(bid: string) {
		this._bid = bid;
	}

	private set title(title: string) {
		if (title.length == 0)
			throw new Error("Title cannot be empty");
		if (title.length > 100)
			throw new Error("Title cannot be longer than 100 characters");	
		this._title = title;
	}

	private set completed(completed: boolean) {
		this._completed = completed;
	}

	public Complete() {
		if(this.completed)
			throw new Error("Task is already completed");
		this.completed = true;
	}

	constructor(title: string, bid?: string,  completed?: boolean) {
		this.bid = bid ?? RandomBidGenerator.generate();
		this.title = title;
		this.completed = completed ?? false;
	}
}

export const TaskModel = getModelForClass(Task);