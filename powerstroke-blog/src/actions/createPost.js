import axios from "axios";

const createPost = async (title, body, section, author, creator, likes) => {
	console.log(title, body, section, author, creator, likes);

	try {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.post(
			"http://localhost:8000/api/forums/create",
			{ title, body, section, author, creator, likes },
			config
		);
		if (data) {
			return data;
		} else {
			return "Database Error";
		}
	} catch (err) {
		console.log(err);
	}
};
export default createPost;
