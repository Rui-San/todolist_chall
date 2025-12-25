import dotenv from 'dotenv';
import express from "express";
import cors from "cors";
import type { Application } from "express";
import { Database } from "./config/db";
import routes from './routes/routes';

/**
 * Normally this file wouldn't be a class, but we can keep good OOP
 * practices this way. Also helps making the code more readable, 
 * maintainable, potentially testable, scalable and encapsulated.
 */
class App {

	public app : Application;

	constructor() {
		this.app = express();
		dotenv.config();
		this.startMiddlewares();
		this.startDatabase();
		this.startRoutes();
	}

	private startMiddlewares() {
		this.app.use(cors());
		this.app.use(express.json());
		console.log('Middlewares started');
	}

	private startDatabase() {
		Database.connect();
	}

	private startRoutes() { 
		//this.app.use('/', routes);
	}

}

export default new App().app;