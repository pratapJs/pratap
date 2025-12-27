import React from "react";

import styled from "styled-components";
import repeatingBackground from "../images/repeatingBackground.svg";
import Profile from "../components/about/Profile";
import Header from "../components/about/Header";
import Features from "../components/about/Features";

const About = ({ id }) => {
	return (
		<AboutContainer id={id}>
			<Header />

			<Profile />
			<Features />
		</AboutContainer>
	);
};

export default About;

const AboutContainer = styled.div`
	display: grid;
	grid-column: full-start/full-end;

	grid-gap: 5rem;
	margin: 2rem;
	margin-top: 5rem;
	color: #333;
	background-image: url(${repeatingBackground});
	background-attachment: fixed;
	/* grid-auto-rows: min-content; */

	/* background-size: cover; */
	background-repeat: no-repeat;
`;
