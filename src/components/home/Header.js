import React from "react";

import Constellation from "../home/constellation";
import { HeaderContainer, Button } from "../home/HomeStyle.js";

const Header = () => {
	return (
		<HeaderContainer>
			<Constellation />

			<div className="homeText">
				<div className="header">
					<h1>
						Hello, I'm <span>Pratap Adhikari. </span>
						<br />
						I'm a full-stack web developer.
					</h1>
				</div>
				<Button to="/projects" className="projects">
					{" "}
					<span>View my work </span>
				</Button>
			</div>
		</HeaderContainer>
	);
};

export default Header;
