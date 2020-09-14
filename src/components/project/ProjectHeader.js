import React from "react";
import styled from "styled-components";
const ProjectHeader = () => {
	return (
		<Header>
			<h2>Projects</h2>
		</Header>
	);
};

export default ProjectHeader;

const Header = styled.div`
	justify-self: center;
	align-self: center;

	color: #fff;
	position: relative;
	padding: 5px 0;
	margin-top: 1.5em;

	&:after {
		content: " ";
		height: 0.2em;
		width: 80%;
		position: absolute;
		left: 0;
		bottom: 0;
		background: #fff;
		margin-left: 0.7em;
	}
`;
