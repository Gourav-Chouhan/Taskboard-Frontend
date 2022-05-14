import React, { useState } from "react";
import Task from "./Task";

function AddTask(props) {
	const { setShowAddTask, setTasks, tasks, taskGroupName } = props;

	const [taskName, setTaskName] = useState("");
	const [taskDescription, setTaskDescription] = useState("");
	const [taskDate, setTaskDate] = useState("");

	const addTask = () => {
		setTasks([
			...tasks,
			<Task name={taskName} description={taskDescription} date={taskDate} />,
		]);

		setShowAddTask(false);
		fetch("https://taskboardbackend.herokuapp.com/addTask", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
			body: JSON.stringify({
				taskName,
				taskDescription,
				taskDate,
				taskGroupName,
			}),
		});
	};

	return (
		<div className="add-task-wrapper">
			<div className="add-task">
				<h4>Task name</h4>
				<input
					type="text"
					value={taskName}
					onChange={(e) => setTaskName(e.target.value)}
				/>
				<h5>Description</h5>
				<textarea
					value={taskDescription}
					onChange={(e) => setTaskDescription(e.target.value)}
				></textarea>
				<h5>Date</h5>
				<input
					type="date"
					onChange={(e) => {
						setTaskDate(e.target.value);
					}}
				/>

				<input
					type="submit"
					value="Add Task"
					onClick={() => {
						addTask();
					}}
				/>
			</div>
		</div>
	);
}

export default AddTask;
