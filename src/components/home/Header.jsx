import React from "react";

import Constellation from "../home/constellation";
import { HeaderContainer, Button } from "../home/HomeStyle";

const Header = ({ id, changeTab }) => {
	return (
		<HeaderContainer id={id}>
			<Constellation />
			<div className="homeText">
				<h1>
					Hello, I'm <span>Pratap Adhikari. </span>
					<br />
					I'm a full-stack developer.
				</h1>

				<Button onClick={changeTab}>
					<span>View my work </span>{" "}
				</Button>
			</div>
		</HeaderContainer>
	);
};

export default Header;
