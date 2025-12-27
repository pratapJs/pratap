import React from "react";

import Constellation from "../home/constellation";
import { HeaderContainer, Button } from "../home/HomeStyle.js";

const Header = ({ id }) => {
	return (
		<HeaderContainer id={id}>
			<Constellation />
			<div className="homeText">
				<h1>
					Hello, I'm <span>Pratap Adhikari. </span>
					<br />
					I'm a front-end web developer.
				</h1>

				<Button as="a" href="#projects">
					<span>View my work </span>{" "}
				</Button>
			</div>
		</HeaderContainer>
	);
};

export default Header;
