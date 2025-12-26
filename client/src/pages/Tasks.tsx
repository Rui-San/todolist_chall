import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { type CreateTaskDto, type TaskDto } from '../models/task';
import TaskService from '../services/taskService';
import TaskCard from '../component/TaskCard';
import SlIcon from '@shoelace-style/shoelace/dist/react/icon/index.js';
import SlAlert from '@shoelace-style/shoelace/dist/react/alert/index.js';
import '../styles/tasks.css';
import TaskCreator from '../component/TaskCreator';

const service = new TaskService();

const Tasks: React.FC = () => {

	const queryClient = useQueryClient();

	// Fetch tasks from the server
	const { isPending, error, data } = useQuery<TaskDto[]>({
		queryKey: ['tasks'],
		queryFn: () => service.getAllTasks(),  
	});

	const createTask = useMutation({
		mutationFn: (task: CreateTaskDto) => service.createTask(task),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['tasks'] });
		},
		onError: (err) => {
			console.error("Failed to create task", err);
			alert("Failed to create task");
		}
	});

	const completeTask = useMutation({
		mutationFn: (id: string) => service.completeTask(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['tasks'] });
		},
		onError: (err) => {
			console.error("Failed to complete task", err);
			alert("Failed to complete task");
		}
	});

	const deleteTask = useMutation({
		mutationFn: (id: string) => service.deleteTask(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['tasks'] });
		},
		onError: (err) => {
			console.error("Failed to delete task", err);
			alert("Failed to delete task");
		}
	});

	if (isPending) return <div>Loading...</div>;

	if (error) return (
		<SlAlert variant="danger" open>
			<SlIcon slot="icon" name="exclamation-octagon" />
			{(error as Error).message}
		</SlAlert>
	);

	return (
		<div>
		<h1>My tasks</h1>
			<TaskCreator onSubmit={(task) => createTask.mutate(task)} />
			{ data && data.length > 0 ? (
					// To keep incomplete tasks on top we can sort them first
					data.sort((a, b) => Number(a.completed) - Number(b.completed)), 
					<div className="task-list-wrapper">
						{data.map((task) => (
							<TaskCard
								key={task.bid}
								task={task}
								onToggle={(id) => completeTask.mutate(id)}
								onDelete={(id) => deleteTask.mutate(id)}
								isToggling={completeTask.isPending}
								isDeleting={deleteTask.isPending}
							/>
						))}
					</div>
				) : (
					<p>No tasks available.</p>
				)
			}
		</div>
	);
};

export default Tasks;