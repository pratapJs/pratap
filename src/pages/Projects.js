import React from "react";
import {
	ProjectContainer,
	LinkButton,
	ImageContainer,
	ProjectDescription,
} from "../styles/components/ProjectStyle";

import { FaAngleRight } from "react-icons/fa";
import todoapp from "../images/todoapp.png";
import cocktails from "../images/cocktails.png";
import story1 from "../images/story-1.jpeg";
import story3 from "../images/story-3.jpg";
import story2 from "../images/story-2.jpg";
import story4 from "../images/story-4.jpg";
const Projects = () => {
	return (
		<ProjectContainer>
			<h1>Projects</h1>
			<ProjectDescription>
				<h2>
					{" "}
					Simple Software
					<br />
					Revolutionary Results
				</h2>
				<p>
					<FaAngleRight /> Take advantage of timely and affordable services
					<br /> <FaAngleRight /> Projects varying from simple portfolio to
					advance
					<br />{" "}
					<span>
						{" "}
						eCommerce websites and apps on IOS and Android platforms.
					</span>
				</p>
				<br />
			</ProjectDescription>

			<ImageContainer>
				<a
					href="https://prataptodos.netlify.app/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={todoapp} alt="todo app" />
				</a>

				<a
					href="https://cocktailsbypratap.netlify.app/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={cocktails} alt="cocktail app" />{" "}
				</a>

				<img src={story1} alt="project1" />

				<img src={story2} alt="project2" />

				<img src={story3} alt="project3" />
				<img src={story4} alt="project4" />
			</ImageContainer>
			<LinkButton to="/projects">
				<span> Find out more </span>
			</LinkButton>
		</ProjectContainer>
	);
};

export default Projects;
