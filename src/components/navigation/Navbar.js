import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";
import { media } from "../../styles";

const Navbar = ({ setActiveTab }) => {
	const [displayMobileNavBar, setDisplayMobileNavBar] = useState(false);

	useEffect(() => {
		const checkAndAutoHideMobileNavbar = () => {
			const screenWidth = window.innerWidth;
			if (displayMobileNavBar && screenWidth > 768) {
				setDisplayMobileNavBar((displayMobileNavBar) => !displayMobileNavBar);
			}
		};
		window.addEventListener("resize", checkAndAutoHideMobileNavbar);

		return () =>
			window.removeEventListener("resize", checkAndAutoHideMobileNavbar);
	});

	const toggleMobileNavbar = () => {
		setDisplayMobileNavBar((displayMobileNavBar) => !displayMobileNavBar);
	};

	return (
		<MainNavigation>
			<DesktopNavbar
				toggleMobileNavbar={toggleMobileNavbar}
				setActiveTab={setActiveTab}
			/>
			<MobileNavbar
				displayMobileNavBar={displayMobileNavBar}
				toggleMobileNavbar={toggleMobileNavbar}
				setActiveTab={setActiveTab}
			/>
		</MainNavigation>
	);
};

export default Navbar;

const MainNavigation = styled.nav`
	grid-column: full-start/full-end;
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-start;
	position: sticky;
	top: 0;
	overflow-x: hidden;
	z-index: 13;

	${media.tablet` 
position:static;
	
	
	

`}
`;
