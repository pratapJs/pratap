import React from "react";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Particles from "react-particles-js";

import Navbar from "../../src/components/navigation/Navbar";
import {
	HeaderContainer,
	LinkButton,
	Constellation,
} from "../styles/components/HomeStyle";
import SocialMedia from "../components/contact/SocialMedia";

const Home = () => {
	return (
		<>
			<HeaderContainer>
				<div className="homeText">
					<h1>
						Hello, I'm <span>Pratap Adhikari. </span>
						<br />
						I'm a full-stack web developer.
					</h1>

					<LinkButton className="links" to="/projects">
						{" "}
						<span> View my work </span>{" "}
					</LinkButton>
				</div>
				<Constellation>
					<Particles
						params={{
							particles: {
								number: {
									value: 150,
								},
								shape: {
									type: "edge",

									stroke: {
										width: 1,

										color: "#FA1F79",
									},

									density: {
										enable: true,
										value_area: 1000,
									},
								},
							},
						}}
					/>
				</Constellation>
			</HeaderContainer>
			<Navbar />
			<About />
			<Projects />
			<Contact />
			<SocialMedia />
		</>
	);
};

export default Home;
