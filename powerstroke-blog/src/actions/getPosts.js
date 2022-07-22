import axios from "axios";

const getPosts = async () => {
	try {
		const { data } = await axios.get("http://localhost:8000/api/forums");
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

export default getPosts;
