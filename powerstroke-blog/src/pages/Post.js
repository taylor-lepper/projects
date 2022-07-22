import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import createPost from "../actions/createPost";

const Post = (props) => {
	//to do add user info
	const navigate = useNavigate();
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [section, setSection] = useState("");
	const [message, setMessage] = useState(null);

	let author = props.user.username;
	let creator = props.user.id;

	console.log(props);
	console.log("title : " + title);
	console.log("body : " + body);
	console.log("section : " + section);
	console.log("creator : " + creator);
	console.log("author : " + author);

	const submitHandler = async (event) => {
		event.preventDefault();
		const likes = "0";
		console.log("submitHandler called");
		if (title && body && section && author && creator) {
			const result = await createPost(
				title,
				body,
				section,
				author,
				creator,
				likes
			);
			if (result) {
				console.log(result);

				navigate(`/${section}`);
			} else {
				setMessage("Error Creating Post");

				setTimeout(() => {
					setMessage("");
				}, 4000);
				return;
			}
		}
	};
	return (
		<div className="margLeft175">
			{message && <h1>{message}</h1>}
			<div className="Post">
				<br />
				<h1 className="border3">Create New Post</h1>

				<div className="login">
					<form>
						<div className="">
							<label className="border1-2" htmlFor="title">
								Title:
							</label>
							<input
								type="text"
								name="title"
								className="border1-1"
								onChange={(eventObj) =>
									setTitle(eventObj.target.value)
								}
								value={title}
								required
							/>
						</div>
						<div className="">
							<label className="border1-2" htmlFor="body">
								Post Body:
							</label>
							<textarea
								type="text"
								name="body"
								required
								onChange={(eventObj) =>
									setBody(eventObj.target.value)
								}
								value={body}
								className="border1-1"
							></textarea>
						</div>

						<div className="">
							<label className="border1-2" htmlFor="section">
								Sub-Forum:
							</label>
							<select
								name="section"
								className="border1-1"
								onChange={(eventObj) =>
									setSection(eventObj.target.value)
								}
								value={section}
							>
								<option value="" placeholder="select"></option>
								<option value="forums">forums</option>
								<option value="build-journals">
									build-journals
								</option>
								<option value="how-to">how-to</option>
								<option value="tech-articles">
									tech-articles
								</option>
							</select>
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

export default Post;
