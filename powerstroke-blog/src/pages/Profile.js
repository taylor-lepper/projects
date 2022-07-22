import React from "react";
import getPosts from "../actions/getPosts";
import ProfilePost from "../Components/ProfilePost";

class Profile extends React.Component {
	render() {
		// console.log(this.props);

		let user = this.props.user;
		// console.log(user);
		let posts = this.props.posts;
		const myPosts = posts.filter((post) => {
			// console.log(post);
			return post.creator === user.id;
		});

		console.log(myPosts);

		if (user) {
			return (
				<div className="margLeft175">
					<div className="Profile">
						<br />
						<div>
							<h1 className="border3">
								This your Profile, {user.username}!
							</h1>
						</div>
						<br />
						<br />
						<h3 className="border1">
							Here are all of your active posts in the forums.
						</h3>
						{myPosts.length === 0 && (
							<>
								<br />
								<br />
								<div className="featuredMember">
									<h1 className="border1-4">
										Looks like you haven't made any posts
										yet!
									</h1>
									<h3 className="border1-4">
										Want to add the the discussion? Head
										over to one of the sub-forums on the
										left.
									</h3>
								</div>
							</>
						)}
						<div className="forumPosts">
							{myPosts.map((post) => {
								console.log(post);
								return (
									<ProfilePost
										key={post._id}
										editPostData={this.props.editPostData}
										data={post}
									/>
								);
							})}
						</div>
					</div>
				</div>
			);
		} else {
			return <h1>Please log in, to view your Profile!</h1>;
		}
	}
}

export default Profile;
