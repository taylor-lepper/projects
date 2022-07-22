import React from "react";
import { Link } from "react-router-dom";
import PostItem from "../../Components/PostItem";

class Forums extends React.Component {
	render() {
		let posts = this.props.posts;
		// console.log(posts);
		let editPostData = this.props.editPostData;
		const loggedIn = this.props.user.loggedIn;

		if (loggedIn) {
			return (
				<div className="margLeft175">
					<div className="Forums">
						<br />
						<div>
							<h1 className="border3">General Forums</h1>
							<div className="create">
								<div className="padDiv">
									<small>Create New Post</small>
									<br />
									<Link
										page={"build-journals"}
										to={{
											pathname: "/post",
										}}
									>
										<button className="btn btn-primary">
											Create
										</button>
									</Link>
								</div>
							</div>
						</div>

						<br />
						<div className="forumPosts">
							{posts
								.filter((post) => {
									// console.log(post);
									return post.section === "forums";
								})
								.map((post) => {
									// console.log(post);
									return (
										<PostItem
											key={post._id}
											editPostData={editPostData}
											data={post}
										/>
									);
								})}
						</div>
					</div>
				</div>
			);
		} else {
			return (
				<div>
					<br />
					<br />
					<h1 className="border3">
						You must be logged in to view the forums
					</h1>
				</div>
			);
		}
	}
}

export default Forums;
