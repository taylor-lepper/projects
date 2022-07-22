import React from "react";
import links from "../Data/data.json";
import ListItem from "./ListItem";
import "../index.css";

class Aside extends React.Component {
	//todo fetch the first 11 posts to get the links to the pages
	render() {
		console.log(links);
		return (
			<aside className="Aside">
				<ul>
					{links.map((link) => {
						return <ListItem location={link} />;
					})}
				</ul>
			</aside>
		);
	}
}

export default Aside;
