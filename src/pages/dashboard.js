import React, { useState, useEffect } from "react";
import AddTaskGroup from "../components/AddTaskGroup";
import Header from "../components/Header";
import Tasks from "../components/Tasks";

function Dashboard() {
	const [data, setData] = useState({ username: "", img_url: "" });
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		(async () => {
			let data = await fetch("https://taskboardbackend.herokuapp.com/send", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			});
			data = await data.json();

			setData(data);
			data.tasksGroup.forEach((taskGroup) => {
				setTasks((tasks) => [
					...tasks,
					<Tasks taskName={taskGroup.taskName} prevTasks={taskGroup.tasks} />,
				]);
			});
			console.log(data);
			// 	const data = await axios.get(
			// 		"https://taskboardbackend.herokuapp.com/send",
			// 		{
			// 			withCredentials: true,
			// 			Authorization: `Bearer ${localStorage.getItem("token")}`,
			// 		}
			// 	);
			// 	setData(data.data);
			// 	data.data.tasksGroup.forEach((taskGroup) => {
			// 		setTasks((tasks) => [
			// 			...tasks,
			// 			<Tasks taskName={taskGroup.taskName} prevTasks={taskGroup.tasks} />,
			// 		]);
			// 	});
		})();
	}, []);

	return (
		<div className="dashboard">
			<Header username={data.username} img_url={data.img_url} />
			<div className="tasks-container">
				{tasks}
				<AddTaskGroup tasks={tasks} setTasks={setTasks} />
			</div>
		</div>
	);
}

export default Dashboard;
