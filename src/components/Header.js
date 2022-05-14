import React from "react";
import logo from "../assets/logo.png";

function Header({ username, img_url }) {
	return (
		<div className="header">
			<div>
				<img alt="logo" src={logo} />
				<h1> Tasks</h1>
			</div>
			<div>
				<h2>{username}</h2>
				<img src={img_url} alt="avtar" />
			</div>
		</div>
	);
}

export default Header;
