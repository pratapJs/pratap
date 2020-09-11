import React from "react";
import DesktopNavbar from "./DesktopNavbar";
// import MobileNavbar from "./MobileNavbar";
import styled from "styled-components";

const MyNavBar = styled.div`
	display: grid;
	grid-column: 1/-1;
	margin-bottom: 2px;
	position: sticky;
	top: 0;
`;

const Navbar = () => {
	return (
		<MyNavBar>
			<DesktopNavbar />
			{/* <MobileNavbar /> */}
		</MyNavBar>
	);
};

export default Navbar;
