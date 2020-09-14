import React from "react";
import { Link } from "react-router-dom";
// import Particles from "react-particles-js";

import {
	HeaderContainer,
	LinkButton,
	Constellation,
} from "../home/HomeStyle.js";

const Header = () => {
	return (
		<HeaderContainer>
			<div className="homeText">
				<h1>
					Hello, I'm <span>Pratap Adhikari. </span>
					<br />
					I'm a full-stack web developer.
				</h1>
			</div>
			<LinkButton as={Link} to="/projects">
				{" "}
				View my work
			</LinkButton>

			{/* <Constellation>
					<Particles
						params={{
							particles: {
								number: {
									value: 100,
								},
								shape: {
									type: "edge",

									stroke: {
										width: 1,

										color: "#FA1F79",
									},

									density: {
										enable: true,
										value_area: 100,
									},
								},
							},
						}}
					/>
				</Constellation> */}
		</HeaderContainer>
	);
};

export default Header;
