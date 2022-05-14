import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
import Error from "./pages/error";
import Login from "./pages/login";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<Signup />} />
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="*" element={<Error />} />
		</Routes>
	);
}

export default App;
