/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import AuthContext from "../context/AuthContext";
import { useAuthContext } from "../context/AUthContextProvider";

import "./Login.css";

function Login() {
	const auth = useAuthContext();
	const location = useLocation();
	const navigate = useNavigate()
	console.log(location?.state?.from?.pathname)

	const [credentials, setCredentials] = useState({
		username: "test",
		password: "test",
	});

	const { username, password } = credentials;

	const handleChange = (e: { target: { name: string; value: string } }) => {
		const { name, value } = e.target;
		setCredentials({ ...credentials, [name]: value });
	};

	function login() {
		auth?.login();
		//replace: true - replaces the current history entry (current path) with the new destination
		navigate(location?.state?.from?.pathname, { replace: true })
	}

	return (
		<div className="login-container">
			<h2>Login</h2>
			<input
				value={username}
				onChange={handleChange}
				name="username"
				type="text"
				placeholder="Username"
			/>
			<input
				value={password}
				onChange={handleChange}
				name="password"
				type="password"
				placeholder="Password"
			/>
			<div className="button-container">
				<button className="login-button" onClick={login}>Log in</button>
				<button className="logout-button" onClick={auth?.logout}>Log out</button>
			</div>
			Is the user logged in? {auth?.isLoggedIn ? "Yes" : "No"}
		</div>
	);
}

export default Login;
