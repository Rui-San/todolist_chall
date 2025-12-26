import React, { useState } from 'react';
import SlInput from "@shoelace-style/shoelace/dist/react/input/index.js";
import SlButton from "@shoelace-style/shoelace/dist/react/button/index.js";
import SlIcon from "@shoelace-style/shoelace/dist/react/icon/index.js";
import { type SlInputEvent } from '@shoelace-style/shoelace';
import { type CreateTaskDto } from '../models/task'; 
import '../styles/tasks.css';

interface TaskCreatorProps {
onSubmit: (task: CreateTaskDto) => void;
isCreating?: boolean;
}

const TaskCreator: React.FC<TaskCreatorProps> = ({ onSubmit, isCreating = false }) => {

	const [newTask, setNewTask] = useState<CreateTaskDto>({ 
		title: '' 
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit(newTask);
		setNewTask({ title: '' }); // Reset input field
	};

	// Handle input change to enable the add button
	const handleInputChange = (e: SlInputEvent) => {
		const value = (e.target as HTMLInputElement).value;
		setNewTask(prev => ({ ...prev, title: value }));
	};

	return (
		<form onSubmit={handleSubmit} className="task-form" >
			<SlInput
				placeholder="Create a new task"
				value={newTask.title}
				onSlInput={handleInputChange}
				disabled={isCreating}
				clearable
				onSlClear={() => setNewTask({ title: '' })}
			>
				<SlIcon slot="prefix" name="pencil" />
			</SlInput>

			<SlButton 
				type="submit" 
				variant="primary" 
				loading={isCreating}
				disabled={!newTask.title.trim() || isCreating}
			>
				Add Task
			</SlButton>
		</form>
	);
};

export default TaskCreator;