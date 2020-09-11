import React from "react";
import { AboutContainer } from "../styles/components/AboutStyle";

import Profile from "../components/about/Profile";
import Features from "../components/about/Features";

const About = () => {
	return (
		<AboutContainer>
			<div className="about">
				<h1> About</h1>
			</div>

			<Profile />

			<Features />
		</AboutContainer>
	);
};

export default About;
