import React from "react";

import {
	Nav,
	NavLogo,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from "./NavbarElements";

class Navbar extends React.Component {
	render() {
		console.log(this.props);

		if (this.props.loggedIn === true) {
			console.log("logged in (NavBar)");
			return (
				<>
					<Nav>
						<NavLogo to="/">The PowerStroke Forum</NavLogo>
						<Bars />

						<NavMenu>
							<NavLink to="/" activestyle="true">
								Home
							</NavLink>

							<NavLink to="/profile" activestyle="true">
								Profile
							</NavLink>
							<NavLink to="/about" activestyle="true">
								About
							</NavLink>

							<NavLink to="/logout" activestyle="true">
								Log Out
							</NavLink>
						</NavMenu>
					</Nav>
				</>
			);
		} else {
			console.log("guest access (NavBar)");
			return (
				<>
					<Nav>
						<NavLogo to="/">PowerStroke Journal</NavLogo>
						<Bars />
						<NavMenu>
							<NavLink to="/" activestyle="true">
								Home
							</NavLink>

							<NavLink to="/about" activestyle="true">
								About
							</NavLink>
							<NavLink to="/login" activestyle="true">
								Log In
							</NavLink>

							<NavBtn>
								<NavBtnLink to="/register">Sign Up</NavBtnLink>
							</NavBtn>
						</NavMenu>
					</Nav>
				</>
			);
		}
	}
}
export default Navbar;
