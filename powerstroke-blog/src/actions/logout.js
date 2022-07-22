import { delete_cookie } from "sfcookies";

const logout = (props) => {
	console.log("Logout button clicked");
	delete_cookie("loggedIn token");
};

export default logout;
