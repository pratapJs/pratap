import React from "react";
import styled from "styled-components";
import NavLink from "./NavLink";
import { setColor } from "../../styles";

const MyMobileNavBar = styled.nav`
	width: 15vw;
	background: ${setColor.secondaryColor};
	box-shadow: -8px 2px red;
	align-self: flex-end;
	transition: transform 600ms ease;
	transform: translateX(calc(100%+15px));

	.nav-links {
		display: flex;
		flex-flow: column nowrap;
		justify-content: space-evenly;
		align-self: flex-start;
		list-style: none;
		margin-left: 2em;
		height: 25vh;
		@media screen and (max-width: 480px) {
			font-size: 80%;
		}
	}
	.link {
		color: #fff;
		font-size: 2em;
		text-decoration: none;
	}
`;

const MobileNavbar = () => {
	return (
		<MyMobileNavBar>
			<NavLink />{" "}
		</MyMobileNavBar>
	);
};

export default MobileNavbar;
