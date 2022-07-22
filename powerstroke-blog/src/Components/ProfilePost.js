import postDelete from "../actions/postDelete";
import { useNavigate } from "react-router-dom";

const ProfilePost = (props) => {
	console.log(props);
	// console.log(props.data);
	const editPostData = props.editPostData;
	const data = props.data;
	// console.log(data);

	const id = data._id;
	// const title = data.title;
	// const body = data.body;
	// const section = data.section;
	// const author = data.author;
	// const creator = data.creator;

	const navigate = useNavigate();

	//delete
	const submitDelete = async (event) => {
		event.preventDefault();
		console.log(data);

		const result = await postDelete(id);
		if (result) {
			console.log(result);
		}
	};

	//edit
	const submitEdit = async (event) => {
		event.preventDefault();
		console.log("edit clicked");

		const post = props.data;

		// console.log(post);

		// console.log(post);
		editPostData(post);
		navigate("/edit");
	};
	return (
		<div className="ProfilePost">
			<div className="profilePostData">
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
				<button onClick={submitEdit} className="profile-edit">
					Edit
				</button>
				<button onClick={submitDelete} className="profile-delete">
					Delete
				</button>
			</div>
		</div>
	);
};

export default ProfilePost;
