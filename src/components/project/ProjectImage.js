import React from "react";
import styled from "styled-components";
import { media } from "../../styles";
import todoapp from "../../images/todoapp.png";
import cocktails from "../../images/cocktails.png";
import story1 from "../../images/story-1.jpeg";
import story3 from "../../images/story-3.jpg";
import story2 from "../../images/story-2.jpg";
import story4 from "../../images/story-4.jpg";
const ProjectImage = () => {
	return (
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
	);
};

export default ProjectImage;

const ImageContainer = styled.div`
	grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));

	margin-left: 2em;
	grid-column-gap: 1em;

	img {
		width: 40rem;
		height: 30rem;
		margin-bottom: 2em;
		margin-left: 2em;

		${media.mobileM`
width:30rem;
height:20rem;
	
	`}
	}
`;
