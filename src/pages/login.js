import React, { useState } from "react";
const axios = require("axios");
const { useNavigate, Link } = require("react-router-dom");

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const submit = async () => {
		try {
			const data = await axios.post(
				"https://taskboardbackend.herokuapp.com/login",
				{
					username,
					password,
					withCredentials: true,
				}
			);

			// document.cookie = `token=${data.data.token}`;
			localStorage.setItem("token", data.data.token);
			navigate("/dashboard");
		} catch (err) {
			console.log("err", err);
		}
	};

	return (
		<div className="card">
			<h1>Log in!</h1>
			<input
				type="text"
				placeholder="username"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<input
				type="password"
				placeholder="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button onClick={submit}>Log in</button>

			<br />
			<Link to="/signup">Create account</Link>
		</div>
	);
}

export default Login;
