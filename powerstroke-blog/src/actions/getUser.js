import axios from "axios";

const getUser = async (id) => {
	try {
		const { data } = await axios.get("http://localhost:8000/api/users", {
			id,
		});
		if (data) {
			console.log(data);
			return data;
		} else {
			return "Database Error";
		}
	} catch (err) {
		console.log(err);
	}
};
export default getUser;
