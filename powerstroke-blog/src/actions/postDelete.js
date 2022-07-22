import axios from "axios";

const postDelete = async (id) => {
	console.log(id);

	try {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.delete(
			`http://localhost:8000/api/forums/${id}`,
			{ id },
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
export default postDelete;
