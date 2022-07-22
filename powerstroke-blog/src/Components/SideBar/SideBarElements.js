import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
	background: #ffecc2;
	position: fixed;
	top: 0;
	text-align: left;
	padding-top: 3px;
	padding-left: 10px;
	left: 0;
	width: 175px;
	height: 100%;
	display: block;
	align-items: left;
	color: rgb(79, 64, 32);
	z-index: 1;
	overflow-x: hidden;
`;
export const NavLogo = styled(Link)`
	cursor: pointer;
	margin-left: 5px;
`;

export const NavLink = styled(Link)`
	color: rgb(79, 64, 32);
	display: block;
	align-items: left;
	font-size: 18px;
	text-decoration: none;
	padding-top: 35px;
	justify: left;
	cursor: pointer;
	&.active {
		color: blue;
	}
	&:hover {
		color: lightGreen;
	}
`;

export const NavMenu = styled.div`
	display: block;
	align-items: left;
`;

export const NavBtn = styled.nav`
	display: flex;
	align-items: center;
	text-align: center;
	margin-right: 75px;
	margin-top: 35px;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavBtnLink = styled(Link)`
	border-radius: 4px;
	background: transparent;
	padding: 10px 6px;

	color: rgb(79, 64, 32);
	outline: none;
	border: 2px solid rgb(79, 64, 32);
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: blue;
		color: #ffecc2;
	}
`;
