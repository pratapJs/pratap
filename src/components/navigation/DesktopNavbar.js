import React from "react";
import styled from "styled-components";
import NavLink from "./NavLink";
import { setColor } from "../../styles";
//import iconmenu from "../../images/menuicon.svg";

const MyDesktopNavbar = styled.nav`
	display: grid;

	background: ${setColor.secondaryColor};

	height: 8vh;
	font-size: 1em;
	box-shadow: 0 2px ${setColor.redColor};

	align-content: center;
	text-decoration: none;

	.nav-links {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		align-items: center;
		list-style: none;
		width: 35vw;
		margin-left: 1em;

		@media screen and (max-width: 768px) {
			display: none;
		}
	}
	.link {
		color: #fff;
		font-size: 2.5vh;
		text-decoration: none;
		&:hover {
			color: ${setColor.redColor};
		}
	}
`;

const MyMobileNavButton = styled.button`
	background: transparent;
	border: none;
	height: 6vh;
	width: 6vh;
	color: #fff;
	display: none;

	margin-left: 1em;

	@media screen and (max-width: 768px) {
		display: block;
	}
`;

const DesktopNavbar = () => {
	return (
		<MyDesktopNavbar>
			<NavLink />
			{/* <MyMobileNavButton>
				<img src={iconmenu} alt="menu icon" />{" "}
			</MyMobileNavButton> */}
		</MyDesktopNavbar>
	);
};

export default DesktopNavbar;
