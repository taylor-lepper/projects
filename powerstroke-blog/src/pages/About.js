import React from "react";

const About = () => {
	return (
		<div className="margLeft175">
			<div className="About">
				<br />

				<div className="aboutContainer">
					<h1 className="border3">About Us</h1>
					<div className="featuredMember">
						<br />
						<br />
						<h3>
							We were the first dedicated resource for powerstroke
							diesels...
						</h3>
						<h3>The PowerStroke Forum!</h3>
						<br />
					</div>

					<div className="imagesLine">
						<img
							className="aboutImage"
							src="../imgs/sickFord.jpg"
							alt="Awesome OBS truck"
						/>
						<img
							className="aboutImage"
							src="../imgs/bullnose.jpg"
							alt="Bullnose old ford"
						/>
						<img
							className="aboutImage"
							src="../imgs/obs.jpg"
							alt="Insane OBS truck"
						/>
						<img
							className="aboutImage"
							src="../imgs/jackedFord.jpg"
							alt="Insane lifted 6.7L"
						/>
					</div>
					<div className="featuredMember">
						<ul className="aboutInfo">
							<li>
								The PowerStroke Forum! was founded by
								enthusiasts for enthusiasts!
							</li>
							<br />
							<li>
								Our mission is to provide an everlasting
								resource for these trucks, and to educate any
								and all lovers of Ford pickup trucks!
							</li>
							<br />
							<li>
								We were founded in 2021 by an anonymous coder.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
