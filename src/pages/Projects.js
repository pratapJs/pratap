import React from "react";
import { ProjectContainer } from "../styles/components/ProjectStyle";
import { Link } from "react-router-dom";

const Projects = () => {
	return (
		<ProjectContainer>
			<div>
				<h1>My Projects</h1>
				<h2>
					{" "}
					Projects varying from simple portfolio to advance eCommerce websites
					and apps on Ios and Android platform.
				</h2>
				<Link to="/projects">Find out more</Link>
			</div>
		</ProjectContainer>
	);
};

export default Projects;
