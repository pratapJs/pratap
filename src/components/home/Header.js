import React from "react";
import { Link } from "react-router-dom";
import Constellation from "../home/constellation";
import { HeaderContainer, LinkButton } from "../home/HomeStyle.js";

const Header = () => {
	return (
		<HeaderContainer>
			<Constellation />
			<div className="homeText">
				<h1>
					Hello, I'm <span>Pratap Adhikari. </span>
					<br />
					I'm a full-stack web developer.
				</h1>

				<LinkButton as={Link} to="/projects">
					{" "}
					View my work
				</LinkButton>
			</div>
		</HeaderContainer>
	);
};

export default Header;