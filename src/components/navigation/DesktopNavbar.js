import React from "react";
import styled from "styled-components";
import NavLinks from "./Navlinks";
import { setColor, media } from "../../styles";
import { GoGrabber } from "react-icons/go";
const DesktopNavbar = (props) => {
	return (
		<NavbarContainer>
			<LinkButton onClick={props.toggleMobileNavbar}>
				<GoGrabber size={70} />
			</LinkButton>
			<NavLinks />
		</NavbarContainer>
	);
};

export default DesktopNavbar;

const NavbarContainer = styled.nav`
	background-color: ${setColor.secondaryColor};
	display: flex;
	border-bottom: 2px solid ${setColor.borderColor};
	flex-flow: row nowrap;
	justify-content: start;
	position: relative;
	height: 7em;
	color: white;

	.nav-links {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-around;
		align-items: center;
		list-style: none;
		width: 50rem;
		${media.tablet` 
	display:none;
	`}
	}

	.link {
		color: white;
		text-decoration: none;
		font-size: 2.5rem;
		&:hover,
		&:active,
		&.active {
			color: ${setColor.redColor};
		}
	}
`;

const LinkButton = styled.button`
	background: transparent;
	align-self: center;
	border: none;
	color: white;
	display: none;

	${media.tablet` 
	display:block;
	`}
`;
