import SlCard from "@shoelace-style/shoelace/dist/react/card/index.js";
import SlCheckbox from "@shoelace-style/shoelace/dist/react/checkbox/index.js";
import SlIconButton from "@shoelace-style/shoelace/dist/react/icon-button/index.js";
import type { TaskDto } from "../models/task";
import '../styles/tasks.css';

interface TaskProps {
	task: TaskDto;
	onToggle: (id: string) => void;
    onDelete: (id: string) => void;
	isToggling?: boolean;
    isDeleting?: boolean;
}

const TaskCard: React.FC<TaskProps> = ({ task, onToggle, onDelete, isToggling, isDeleting }) => {
    return (
        <SlCard className="task-card">
            <div className="task-card-content">
                
                <SlCheckbox 
                    size="medium" 
                    checked={task.completed} 
                    disabled={task.completed || isToggling}
                    onSlChange={() => onToggle(task.bid)}
                >
                    <span className={task.completed ? "task-completed" : ""}>
                        {task.title}
                    </span>
                </SlCheckbox>

                <SlIconButton 
                    name="x-lg" 
                    label="Delete Task"
                    style={{ color: 'var(--sl-color-danger-500)' }}
                    disabled={isDeleting}
                    onClick={() => onDelete(task.bid)}
                />
            </div>
        </SlCard>
    );
}

export default TaskCard;