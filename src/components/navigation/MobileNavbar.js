import React from "react";
import NavLinks from "./Navlinks";
import styled from "styled-components";
import { setColor } from "../../styles";

const MobileNavbar = (props) => {
	console.log(props);

	return (
		<MyMobileNavBar displayMobileNavBar={props.displayMobileNavBar}>
			<NavLinks
				isMobileLink={true}
				toggleMobileNavbar={props.toggleMobileNavbar}
			/>
		</MyMobileNavBar>
	);
};

export default MobileNavbar;

const MyMobileNavBar = styled.nav`
	/* clip-path: polygon(100% 0%, 100% 0%, 0 100%, 0 0); */
	background-color: ${setColor.primaryColor};

	display: none;
	display: ${(props) => props.displayMobileNavBar && "block"};

	overflow: hidden;
	position: absolute;
	margin-top: 6.8rem;
	width: 100%;
	max-height: 50rem;
	transition: transform max-height 5s;

	transform: translateY(0, 50%);

	.nav-links {
		display: flex;
		flex-flow: column nowrap;
		line-height: 4rem;
		align-items: flex-start;
		list-style: none;
	}

	.link {
		color: white;
		text-decoration: none;
		margin-left: 2rem;
		font-size: 2.2rem;
		&:hover,
		&:active,
		&.active {
			color: ${setColor.redColor};
		}
	}
`;
