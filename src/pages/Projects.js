import React from "react";
import styled from "styled-components";
import infoBackground from "../images/infoBackground.svg";
import ProjectHeader from "../components/project/ProjectHeader";
import ProjectDesc from "../components/project/ProjectDesc";
import ProjectImage from "../components/project/ProjectImage";

const Projects = ({ id }) => {
	return (
		<ProjectContainer id={id}>
			<ProjectHeader />
			<ProjectDesc />
			<ProjectImage />
		</ProjectContainer>
	);
};

export default Projects;

const ProjectContainer = styled.div`
	display: grid;
	grid-column: full-start/full-end;
	grid-gap: 5rem;
	background-image: url(${infoBackground});

	background-attachment: fixed;

	background-size: cover;
	background-repeat: no-repeat;

	width: 100%;
`;
