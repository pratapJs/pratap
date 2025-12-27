import React from "react";

const Navlinks = (props) => {
	let tempTabIndex;
	if (props.isMobileLink) {
		tempTabIndex = "-1";
	}

	return (
		<ul className="nav-links">
			<li>
				<a
					href="#home"
					className="link"
					tabIndex={tempTabIndex}
					onClick={() => {
						props.setActiveTab("home");
						props.toggleMobileNavbar && props.toggleMobileNavbar();
					}}
				>
					Home
				</a>
			</li>{" "}
			<li>
				<a
					href="#about"
					className="link"
					tabIndex={tempTabIndex}
					onClick={() => {
						props.setActiveTab("about");
						props.toggleMobileNavbar && props.toggleMobileNavbar();
					}}
				>
					About
				</a>
			</li>
			<li>
				<a
					href="#projects"
					className="link"
					tabIndex={tempTabIndex}
					onClick={() => {
						props.setActiveTab("projects");
						props.toggleMobileNavbar && props.toggleMobileNavbar();
					}}
				>
					Projects
				</a>
			</li>
			<li>
				<a
					href="#contact"
					className="link"
					tabIndex={tempTabIndex}
					onClick={() => {
						props.setActiveTab("contact");
						props.toggleMobileNavbar && props.toggleMobileNavbar();
					}}
				>
					Contact
				</a>
			</li>
		</ul>
	);
};

export default Navlinks;
