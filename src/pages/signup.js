import React, { useState } from "react";

function Signup() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");

	const submit = async () => {
		if (!username || !password || !email) return;

		try {
			// const data = await axios.post(
			// 	"https://taskboardbackend.herokuapp.com/signup",
			// 	{
			// 		username,
			// 		password,
			// 		email,
			// 	}
			// );

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

			console.log("data", data.data);
		} catch (err) {
			console.log("err", err);
		}
	};

	return (
		<div className="card">
			<div>
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
			</div>
		</div>
	);
}

export default Signup;
