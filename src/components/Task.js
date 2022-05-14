import React from "react";

function Task(props) {
	const { name, description, date } = props;
	return (
		<div className="task">
			<button></button>
			<details>
				<summary>{name}</summary>
				<p>{description}</p>
				<div className="date">{date}</div>
			</details>
		</div>
	);
}

export default Task;
