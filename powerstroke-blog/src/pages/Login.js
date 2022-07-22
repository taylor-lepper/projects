import React, { useState } from "react";
import login from "../actions/login";

import { useNavigate } from "react-router-dom";
import { bake_cookie } from "sfcookies";

// const jwt = require("jsonwebtoken");

const Login = (props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState(null);
	const navigate = useNavigate();
	// console.log(props);
	const submitHandler = async (event) => {
		event.preventDefault();

		if (email && password) {
			const result = await login(email, password);

			if (!result) {
				setMessage("Please enter correct login information.");

				setTimeout(() => {
					setMessage("");
				}, 4000);
				return;
			}
			if (result) {
				console.log(result);

				const token = result.token;

				const id = result._id;
				const username = result.username;
				const email = result.email;
				const posts = result.posts;

				props.updateLogin({
					id: result._id,
					loggedIn: token,
					username,
					posts,
					email,
				});

				const user = {
					id,
					email,
					username,
					posts,
				};

				bake_cookie("loggedIn token", token);
				bake_cookie("user", user);

				navigate("/");
			}
		} else {
			setMessage("Please fill out both fields correctly to login!");

			setTimeout(() => {
				setMessage("");
			}, 4000);
			return;
		}
	};

	return (
		<div className="margLeft175">
			<div>
				<br />
				<h1 className="border3">Login</h1>
				<br />
				<h4 className="border1">
					Once logged in, you will have full access to the forums!
				</h4>
				<br />

				<div className="login">
					<div className="message">
						{message && <h1>{message}</h1>}
					</div>
					<form>
						<div className="">
							<label className="border1-2" htmlFor="email">
								E-mail Address:
							</label>
							<input
								type="email"
								name="email"
								className="border1-1"
								required
								value={email}
								onChange={(eventObj) =>
									setEmail(eventObj.target.value)
								}
							/>
						</div>
						<div className="">
							<label className="border1-2" htmlFor="password">
								Password:
							</label>
							<input
								type="text"
								name="password"
								required
								className="border1-1"
								value={password}
								onChange={(eventObj) =>
									setPassword(eventObj.target.value)
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
			</div>
		</div>
	);
};

export default Login;
