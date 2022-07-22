import React, { useState } from "react";
import register from "../actions/register";
import validateEmail from "../actions/validateEmail";
import { useNavigate } from "react-router-dom";

const Register = () => {
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [rePassword, setConfirmPassword] = useState("");
	const [message, setMessage] = useState(null);
	const navigate = useNavigate();

	console.log(`email ${email}`);
	console.log(`username ${username}`);
	console.log(`password ${password}`);

	const submitHandler = async (event) => {
		event.preventDefault();

		const emailVal = validateEmail(email);
		console.log(emailVal);
		if (!emailVal) {
			setMessage("Please enter a valid E-mail Address!");
			setTimeout(() => {
				setMessage("");
			}, 4000);
			return;
		}

		if (username.length < 5) {
			setMessage("Username must be at least 5 characters long!");

			setTimeout(() => {
				setMessage("");
			}, 4000);
			return;
		}

		if (password.length < 5) {
			setMessage("Password must be at least 5 characters long!");

			setTimeout(() => {
				setMessage("");
			}, 4000);
			return;
		}
		if (password !== rePassword) {
			setMessage("Passwords do not match");
			setPassword("");
			setConfirmPassword("");
			setTimeout(() => {
				setMessage("");
			}, 4000);
			return;
		}
		if (email && username && password && rePassword) {
			const result = await register(email, username, password);
			if (!result) {
				setMessage("E-mail Address is already taken!");

				setTimeout(() => {
					setMessage("");
				}, 4000);
				return;
			}
			if (result) {
				console.log(result);

				navigate("/login");
			}
		} else {
			setMessage("Please fill out all of the required fields correctly!");

			setTimeout(() => {
				setMessage("");
			}, 4000);
			return;
		}
	};

	return (
		<div className="margLeft175">
			<h1 className="border3">Sign Up</h1>
			<div className="login">
				<div className="message">{message && <h1>{message}</h1>}</div>
				<form>
					<div className="">
						<label className="border1-2" htmlFor="email">
							E-mail Address:
						</label>
						<input
							type="email"
							name="email"
							required
							className="border1-1"
							value={email}
							onChange={(eventObj) =>
								setEmail(eventObj.target.value)
							}
						/>
					</div>
					<div className="">
						<label className="border1-2" htmlFor="username">
							Username:
						</label>
						<input
							type="username"
							name="username"
							required
							className="border1-1"
							value={username}
							onChange={(eventObj) =>
								setUsername(eventObj.target.value)
							}
						/>
					</div>
					<div className="">
						<label className="border1-2" htmlFor="password">
							Password:
						</label>
						<input
							type="password"
							name="password"
							required
							className="border1-1"
							value={password}
							onChange={(eventObj) =>
								setPassword(eventObj.target.value)
							}
						/>
					</div>
					<div className="">
						<label className="border1-2" htmlFor="rePassword">
							Confirm Password:
						</label>
						<input
							type="password"
							name="rePassword"
							className="border1-1"
							required
							value={rePassword}
							onChange={(eventObj) =>
								setConfirmPassword(eventObj.target.value)
							}
						/>
					</div>
					<div className="paddington2">
						<button
							type="submit"
							className="booootoooon"
							onClick={submitHandler}
						>
							Submit
						</button>
					</div>
				</form>
			</div>
			<div className="border1">
				<h3>Please fill out all fields to create a new account!</h3>

				<h4 className="paddington3">
					Username and Password must be at least 5 characters long.
				</h4>
				<p>Already have an account? Click the "Log In" link above.</p>
			</div>
		</div>
	);
};

export default Register;
