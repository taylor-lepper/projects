import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import postEdit from "../actions/postEdit";

const EditPost = (props) => {
	console.log(props);
	const currentPost = props.data.currentPost;

	console.log(currentPost);
	const navigate = useNavigate();
	let [title, setTitle] = useState("");
	let [body, setBody] = useState("");
	const [message, setMessage] = useState(null);

	//user info
	const author = props.user.username;
	const creator = props.user.id;

	//post info

	const id = currentPost.id;
	const section = currentPost.section;
	const initTitle = currentPost.title;
	const initBody = currentPost.body;
	const likes = currentPost.likes;

	console.log("title : " + title);
	console.log("body : " + body);
	console.log("section : " + section);
	console.log("creator : " + creator);
	console.log("author : " + author);
	console.log("id : " + id);
	console.log("likes : " + likes);

	const submitHandler = async (event) => {
		event.preventDefault();

		console.log("submitHandler edit post called");
		if (title && body && section && author && creator && id) {
			const result = await postEdit(
				title,
				body,
				section,
				author,
				creator,
				id,
				likes
			);
			if (result) {
				console.log(result);
				navigate(`/${section}`);
			}
			// console.log(result);
		} else {
			setMessage("Error, missing one of the valid fields. ");
		}
	};
	return (
		<div className="margLeft175">
			{message && <h1>{message}</h1>}
			<div className="Post">
				<br />
				<h1>Edit Post</h1>
				<div>
					<form>
						<div className="">
							<label className="border1" htmlFor="title">
								Title
							</label>
							<input
								type="text"
								name="title"
								className="border1"
								onClick={(eventObj) =>
									setTitle(eventObj.target.value)
								}
								onChange={(eventObj) =>
									setTitle(eventObj.target.value)
								}
								defaultValue={initTitle}
								required
							/>
						</div>
						<div className="">
							<label className="border1" htmlFor="body">
								Post Body
							</label>
							<textarea
								type="text"
								name="body"
								defaultValue={initBody}
								required
								onClick={(eventObj) =>
									setBody(eventObj.target.value)
								}
								onChange={(eventObj) =>
									setBody(eventObj.target.value)
								}
								className="border1"
							></textarea>
						</div>
						<div className="">
							<label className="border1" htmlFor="section">
								Sub-Forum:
							</label>

							<label className="border1">{section}</label>
						</div>
						<br />
						<button
							type="submit"
							className="btn btn-primary"
							onClick={submitHandler}
						>
							Submit
						</button>
						<br />
					</form>
				</div>
			</div>
		</div>
	);
};

export default EditPost;
