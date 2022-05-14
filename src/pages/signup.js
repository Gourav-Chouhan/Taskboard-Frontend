import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

function Signup() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");

	const navigate = Navigate();
	const submit = async () => {
		if (!username || !password || !email) return;

		try {
			let data = await fetch("https://taskboardbackend.herokuapp.com/signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					username,
					password,
					email,
				}),
			});

			data = await data.json();

			console.log("data", data.body);

			navigate("/login");
		} catch (err) {
			console.log("err", err);
		}
	};

	return (
		<div className="card">
			<h1>Sign up!</h1>
			<input
				type="text"
				placeholder="username"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				required
			/>
			<input
				type="email"
				placeholder="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				required
			/>
			<input
				type="password"
				placeholder="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				required
			/>

			<button onClick={submit}>Sign up</button>
			<br />
			<Link to="/login">Already have an account?</Link>
		</div>
	);
}

export default Signup;
