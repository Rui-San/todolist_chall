import { Router } from "express";
import { TaskController } from "../controllers/taskController";
import { TaskRepository } from "../repositories/taskRepository";
import { TaskService } from "../services/taskService";

const router = Router();

const taskRepository = new TaskRepository();
const taskService = new TaskService(taskRepository);
const taskController = new TaskController(taskService);

router.post(
	"/",
	(req, res) => {
		taskController.createTask(req, res)
	}
)

router.get(
	"/:bid",
	(req, res) => {
		taskController.getTaskByBid(req, res)
	}
)

router.get(
	"/",
	(req, res) => {
		taskController.getAllTasks(req, res)
	}
)

router.patch(
	"/:bid",
	(req, res) => {
		taskController.setTaskAsCompleted(req, res)
	}
)

router.delete(
	"/:bid",
	(req, res) => {
		taskController.deleteTask(req, res)
	}
)

export default router;