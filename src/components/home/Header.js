import React from "react";
import { Link } from "react-router-dom";
import Constellation from "../home/constellation";
import { HeaderContainer, Button } from "../home/HomeStyle.js";

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

				<Button>
					<Link to="/projects">
						{" "}
						<span>View my work </span>{" "}
					</Link>{" "}
				</Button>
			</div>
		</HeaderContainer>
	);
};

export default Header;
