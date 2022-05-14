import React, { useState, useEffect } from "react";
import AddTask from "./AddTask";
import Task from "./Task";

function Tasks({ taskName, prevTasks }) {
	const [showAddTask, setShowAddTask] = useState(false);
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		if (!prevTasks) return;
		prevTasks.forEach((task) => {
			setTasks((tasks) => [
				...tasks,
				<Task
					name={task.taskBody.taskName}
					description={task.taskBody.taskDescription}
					date={task.taskBody.taskDate}
				/>,
			]);
		});
	}, [prevTasks]);

	const fun = (e) => {
		setShowAddTask(true);
	};

	return (
		<div className="tasks">
			{showAddTask && (
				<AddTask
					setShowAddTask={setShowAddTask}
					setTasks={setTasks}
					tasks={tasks}
					taskGroupName={taskName}
				/>
			)}
			<div className="task">
				<h3>{taskName}</h3>
			</div>
			<div className="task">
				<button onClick={fun}>+</button> <h4>Add a task</h4>
			</div>
			{tasks}
		</div>
	);
}

export default Tasks;
