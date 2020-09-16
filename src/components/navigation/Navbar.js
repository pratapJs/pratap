import React from "react";
import styled from "styled-components";
// import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";
import { media } from "../../styles";

const Navbar = () => {
	/* const [displayMobileNavBar, setDisplayMobileNavBar] = useState(false);

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
 */
	return (
		<MainNavigation>
			{/* <DesktopNavbar toggleMobileNavbar={toggleMobileNavbar} /> */}
			{/* <MobileNavbar
				displayMobileNavBar={displayMobileNavBar}
				toggleMobileNavbar={toggleMobileNavbar}
			/> */}
			<DesktopNavbar />
		</MainNavigation>
	);
};

export default Navbar;

const MainNavigation = styled.nav`
	grid-column: full-start/full-end;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(20rem, 5fr));
	justify-content: space-around;
	position: sticky;
	top: 0;
	overflow-x: hidden;
	z-index: 13;

	/* ${media.tablet` 
position:static;
	
	
	

`} */
`;
