// https://kingslanduniversity.zoom.us/j/9253800678?pwd=UXFmUzFWUkhlaTE2S1doRnp2VUExZz09

import React from "react";
import { Routes, Route } from "react-router-dom";

//css
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import PrivateRoute from "./Components/PrivateRoute";

//main pages
import About from "./pages/About";
import Main from "./pages/Main";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Profile from "./pages/Profile";
import Error from "./pages/FourOhFour";
import Post from "./pages/Post";
import EditPost from "./pages/EditPost";

//side pages

import Forums from "./pages/SideNav/Forums";
import TechArticles from "./pages/SideNav/TechArticles";
import HowTo from "./pages/SideNav/HowTo";
import BuildJournals from "./pages/SideNav/BuildJournals";

import Share from "./pages/SideNav/Share";

class App extends React.Component {
	render() {
		console.log(this.props);
		// console.log(this.state);
		const loggedIn = this.props.user.loggedIn;
		const notLoggedIn = !this.props.user.loggedIn;
		// console.log("Logged in ", loggedIn);
		// console.log("not Logged in ", notLoggedIn);
		return (
			<div className="App Container">
				<Routes>
					{/* top pages */}
					<Route
						exact
						path="/"
						element={
							<Main
								editPostData={this.props.editPostData}
								posts={this.props.posts}
								user={this.props.user}
								updateLogin={this.props.updateLogin}
							/>
						}
					/>
					<Route
						path="/register"
						element={
							<PrivateRoute
								isAuth={notLoggedIn}
								path="register"
								redirectTo="/"
							>
								<Register
									updateLogin={this.props.updateLogin}
								/>
							</PrivateRoute>
						}
					/>

					<Route path="/about" element={<About />} />

					<Route
						path="/login"
						element={
							<PrivateRoute
								isAuth={notLoggedIn}
								path="login"
								redirectTo="/"
							>
								<Login updateLogin={this.props.updateLogin} />
							</PrivateRoute>
						}
					/>

					<Route
						path="/logout"
						element={
							<PrivateRoute
								isAuth={loggedIn}
								path="logout"
								redirectTo="/login"
							>
								<Logout updateLogin={this.props.updateLogin} />
							</PrivateRoute>
						}
					/>

					<Route
						path="/profile"
						element={
							<PrivateRoute
								isAuth={loggedIn}
								path="profile"
								redirectTo="/login"
							>
								<Profile
									posts={this.props.posts}
									editPostData={this.props.editPostData}
									user={this.props.user}
									updateLogin={this.props.updateLogin}
								/>
							</PrivateRoute>
						}
					/>
					{/* side pages */}
					<Route
						path="/forums"
						element={
							<Forums
								editPostData={this.props.editPostData}
								posts={this.props.posts}
								user={this.props.user}
								page={"forums"}
							/>
						}
					/>
					<Route
						path="/tech-articles"
						element={
							<TechArticles
								editPostData={this.props.editPostData}
								posts={this.props.posts}
								user={this.props.user}
								page={"tech-articles"}
							/>
						}
					/>
					<Route
						path="/how-to"
						element={
							<HowTo
								editPostData={this.props.editPostData}
								posts={this.props.posts}
								user={this.props.user}
								page={"how-to"}
							/>
						}
					/>
					<Route
						path="/build-journals"
						element={
							<BuildJournals
								editPostData={this.props.editPostData}
								posts={this.props.posts}
								user={this.props.user}
								page={"build-journals"}
							/>
						}
					/>
					<Route
						path="/share"
						posts={this.props.posts}
						element={<Share />}
					/>
					{/* post/edit */}
					<Route
						path="/post"
						element={
							<Post
								posts={this.props.posts}
								editPostData={this.props.editPostData}
								user={this.props.user}
								page={this.props.page}
								addPosts={this.props.page}
							/>
						}
					/>
					<Route
						path="/edit"
						element={
							<EditPost
								posts={this.props.posts}
								user={this.props.user}
								data={this.props}
							/>
						}
					/>
					{/* 404 */}
					<Route path="*" element={<Error />} />
				</Routes>
			</div>
		);
	}
}

export default App;
