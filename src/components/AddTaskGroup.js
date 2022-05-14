import React, { useState } from "react";
import Tasks from "./Tasks";

function AddTaskGroup({ tasks, setTasks }) {
	const [showPopup, setShowPopup] = useState(false);
	const [taskGroupName, setTaskGroupName] = useState("");

	const showAddTaskGroupPopup = () => {
		setShowPopup(true);
	};

	const addTaskGroup = () => {
		setShowPopup(false);
		setTasks([...tasks, <Tasks taskName={taskGroupName} />]);
		try {
			fetch("https://taskboardbackend.herokuapp.com/addTaskGroup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					//send token
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
				body: JSON.stringify({
					taskGroupName,
					tasks: [],
				}),
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			{showPopup && (
				<div className="add-task-wrapper">
					<div className="add-task">
						<input
							type="text"
							placeholder="Task Group name...."
							value={taskGroupName}
							onChange={(e) => setTaskGroupName(e.target.value)}
							autoFocus
							onKeyUp={(e) => e.key === "Enter" && addTaskGroup()}
						/>
						<input
							type="submit"
							onClick={addTaskGroup}
							value="Add Task Group"
						/>
					</div>
				</div>
			)}

			<button className="add-task-group" onClick={showAddTaskGroupPopup}>
				+
			</button>
		</>
	);
}

export default AddTaskGroup;
