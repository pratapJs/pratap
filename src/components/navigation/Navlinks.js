import React from "react";
import { NavLink } from "react-router-dom";

const Navlinks = (props) => {
	console.log(props);
	let tempTabIndex;
	if (props.isMobileLink) {
		tempTabIndex = "-1";
	}

	return (
		<ul className="nav-links">
			<li>
				<NavLink
					exact
					to="/"
					className="link"
					tabIndex={tempTabIndex}
					onClick={props.toggleMobileNavbar}
				>
					Home
				</NavLink>
			</li>{" "}
			<li>
				<NavLink
					to="/about"
					className="link"
					tabIndex={tempTabIndex}
					onClick={props.toggleMobileNavbar}
				>
					About
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/projects"
					className="link"
					tabIndex={tempTabIndex}
					onClick={props.toggleMobileNavbar}
				>
					Projects
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/contact"
					className="link"
					tabIndex={tempTabIndex}
					onClick={props.toggleMobileNavbar}
				>
					Contact
				</NavLink>
			</li>
		</ul>
	);
};

export default Navlinks;
