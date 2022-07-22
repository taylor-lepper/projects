import React from "react";

import postEdit from "../actions/postEdit";

const PostItem = (props) => {
	// console.log(props);

	let likes = props.data.likes;

	const submitLike = async (event) => {
		console.log("liked");
		let post = props.data;
		console.log(post);
		post.likes += 1;

		const result = await postEdit(
			post.title,
			post.body,
			post.section,
			post.author,
			post.creator,
			post._id,
			post.likes
		);
		if (result) {
			console.log(result);
			props.editPostData(post);
		}
	};

	return (
		<div className="PostItem">
			<div className="mainPostData">
				<h4>{props.data.title}</h4>
				<div>{props.data.body}</div>
				<small>
					<strong>sub-forum:</strong> {props.data.section}
				</small>
				<br />
				<small>
					<strong>author:</strong> {props.data.author}
				</small>
			</div>
			<div className="bottom">
				<button onClick={submitLike} className="like-btn">
					{likes} Likes
				</button>
			</div>
		</div>
	);
};

export default PostItem;
