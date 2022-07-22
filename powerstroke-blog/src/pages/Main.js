import React from "react";
import PostItem from "../Components/PostItem";

class Home extends React.Component {
	render() {
		let posts = this.props.posts;
		const user = this.props.user;
		let editPostData = this.props.editPostData;
		if (user.username) {
			return (
				<div className="Main">
					<div className="margLeft175">
						<br />
						<h1 className="border3">
							Welcome to The Powerstroke Forum,{" "}
							{this.props.user.username}!
						</h1>

						<br />
						<div className="featuredMember">
							<h2>Featured Member of the Month:</h2>
							<br />
							<h4>
								Ricky Michael McMackleroy and his dually build!
							</h4>
							<br />
							<div className="featuredMemberData">
								<img
									src="../imgs/duallyFord.jpg"
									alt="dually ford lifted"
								/>
								<ul>
									<br />
									<strong> Key Features:</strong>
									<li>Custom suspension and chassis</li>
									<li>2005 SuperDuty Axle swap</li>
									<li>Chevy Tow Mirror Swap</li>
								</ul>
							</div>
						</div>
						<div>
							<h3 className="border1">Our featured Vendors</h3>
							<div className="vendors">
								<a href="https://www.iratediesel.com/">
									<button className="vendors-btn">
										Irate Diesel
									</button>
								</a>
							</div>
							<div className="vendors">
								<a href="https://www.riffraffdiesel.com/">
									<button className="vendors-btn">
										RiffRaff Diesel
									</button>
								</a>
							</div>
							<div className="vendors">
								<a href="https://www.blowingdiesel.com">
									<button className="vendors-btn">
										Blowing Diesel
									</button>
								</a>
							</div>
							<div className="vendors">
								<a href="https://www.xtremediesel.com">
									<button className="vendors-btn">
										Xtreme Diesel
									</button>
								</a>
							</div>
						</div>
						<h3 className="border1">
							Newest content from the forums
						</h3>
						<div className="forumPosts">
							{posts

								.filter((post, index) => {
									// console.log(post, index);
									return index < 6;
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
				<div className="Main">
					<div className="margLeft175">
						<br />
						<h1 className="border3">
							Please login to use our Website!
						</h1>
						<br />
						<div className="featuredMember">
							<h3>
								Here's a preview of some of the new content you
								are missing out on!
							</h3>
						</div>

						<h3 className="border1">
							Popular content from the forums
						</h3>
						<div className="forumPosts">
							{posts
								.filter((post, index) => {
									// console.log(post, index);
									return index < 3;
								})
								.map((post) => {
									// console.log(post);
									return (
										<>
											<div>
												<PostItem
													key={post._id}
													editPostData={editPostData}
													data={post}
												/>
											</div>
										</>
									);
								})}
						</div>
					</div>
				</div>
			);
		}
	}
}

export default Home;
