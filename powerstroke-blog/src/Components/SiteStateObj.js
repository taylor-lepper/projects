import React from "react";
import App from "../App";
import { read_cookie } from "sfcookies";

//function
import getPosts from "../actions/getPosts";

// nav bars
import Navbar from "./NavBar";
import SideBar from "./SideBar";
import Footer from "./Footer";

//jwt
const jwt = require("jsonwebtoken");

class LoginCheck extends React.Component {
	constructor(props) {
		super(props);

		let login = "";
		let user = {
			username: "",
			posts: 0,
		};

		let userToken = read_cookie("user");

		if (userToken.username) {
			// console.log(userToken);
			user = {
				username: userToken.username,
				id: userToken.id,
				email: userToken.email,
				posts: userToken.posts,
			};
			console.log(user);
		}

		let loginToken = read_cookie("loggedIn token");

		if (loginToken.length > 0) {
			const userID = jwt.decode(loginToken, "jwtsecret").id;
			// console.log("SSO USERID: " + userID);
			login = userID;
		}

		this.state = {
			user: {
				loggedIn: login ? true : false,
				username: user.username,
				posts: user.posts,
				token: loginToken,
				id: user.id,
			},
			currentPost: {
				id: "",
				title: "",
				body: "",
				section: "",
				likes: "",
			},
			posts: [],
		};
		this.addPosts = (data) => {
			this.setState(() => {
				// console.log(data);
				return {
					posts: data,
				};
			});
		};
	}
	componentDidMount() {
		//console.log(this.props.user)
		getPosts().then((data) => {
			this.addPosts(data);
		});

		this.updateLogin = this.updateLogin.bind(this);
		this.editPostData = this.editPostData.bind(this);
		this.addPosts = this.addPosts.bind(this);
	}

	editPostData(post) {
		console.log("post: " + post.title);
		let postData = post;
		console.log(postData);

		this.setState(() => {
			if (postData) {
				return {
					currentPost: {
						id: postData._id,
						title: postData.title,
						body: postData.body,
						section: postData.section,
						likes: postData.likes,
					},
				};
			} else {
				return {
					currentPost: {
						id: "",
						title: "",
						body: "",
						section: "",
						likes: "",
					},
				};
			}
		});
	}

	updateLogin(logInfo) {
		let user;
		if (logInfo) {
			user = logInfo;
		}
		// console.log(user);
		this.setState(() => {
			if (user) {
				return {
					user: {
						loggedIn: user.loggedIn ? true : false,
						username: user.username,
						posts: user.posts,
						token: user.loggedIn,
						id: user.id,
					},
				};
			} else {
				return {
					user: {
						loggedIn: false,
						username: "",
						posts: [],
						token: "",
						id: "",
					},
				};
			}
		});
	}

	render() {
		console.log(this.state);

		return (
			<div>
				<Navbar loggedIn={this.state.user.loggedIn} />
				<SideBar loggedIn={this.state.user.loggedIn} />
				<App
					addPosts={this.addPosts}
					user={this.state.user}
					currentPost={this.state.currentPost}
					updateLogin={this.updateLogin}
					editPostData={this.editPostData}
					posts={this.state.posts}
				/>
				<Footer loggedIn={this.state.user.loggedIn} />
			</div>
		);
	}
}

export default LoginCheck;
