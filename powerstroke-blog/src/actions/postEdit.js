import axios from "axios";

const postEdit = async (title, body, section, author, creator, id, likes) => {
	console.log(id);

	try {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.post(
			`http://localhost:8000/api/forums/${id}`,
			{ title, body, section, author, creator, id, likes },
			config
		);
		if (data) {
			// console.log(data);
			return data;
		} else {
			return "Database Error";
		}
	} catch (err) {
		console.log(err);
	}
};
export default postEdit;
