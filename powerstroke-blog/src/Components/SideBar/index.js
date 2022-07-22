import React from "react";
import {
	Nav,
	NavLogo,
	NavLink,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from "./SideBarElements";

const SideBar = () => {
	return (
		<>
			<Nav>
				<NavLogo to="/">
					<img
						className="listLogo"
						src="../imgs/fordpowerlogo.png"
						alt="powerstroke-logo"
					/>
				</NavLogo>

				<NavMenu>
					<NavLink to="/forums" activestyle="true">
						Forums
					</NavLink>

					<NavLink to="/tech-articles" activestyle="true">
						Tech Articles
					</NavLink>
					<NavLink to="/how-to" activestyle="true">
						How-To Articles
					</NavLink>
					<NavLink to="/build-journals" activestyle="true">
						Build Journals
					</NavLink>
					<NavBtn>
						<NavBtnLink to="/share">Share &#9774;</NavBtnLink>
					</NavBtn>
				</NavMenu>
			</Nav>
		</>
	);
};
export default SideBar;
