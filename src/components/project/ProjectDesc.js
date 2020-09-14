import React from "react";
import { FaAngleRight } from "react-icons/fa";
import styled from "styled-components";
import { setColor, setFont } from "../../styles";

const ProjectDesc = () => {
	return (
		<ProjectDescription>
			<div className="projectText">
				<h3>
					{" "}
					Simple Software
					<br />
					Revolutionary Results
				</h3>
				<p>
					<FaAngleRight /> Take advantage of timely and affordable services
					<br /> <FaAngleRight /> Projects varying from simple to advance
					<br /> <span> websites and apps on IOS and Android platforms.</span>
				</p>
			</div>
			<div>
				<Button>
					<a
						href="https://github.com/savip"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span> Check my projects </span>
					</a>
				</Button>
			</div>
		</ProjectDescription>
	);
};

export default ProjectDesc;

const ProjectDescription = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
	line-height: 3em;
	margin-left: 5rem;

	.projectText {
		display: grid;
	}
	h3 {
		margin-bottom: 1em;
	}
	p {
		span {
			margin-left: 1em;
		}
	}
`;
const Button = styled.button`
	margin: 5rem;
	padding: 0.3em;
	text-align: center;
	height: 5rem;
	width: 20rem;
	background: transparent;

	border: 2px solid white;
	font-size: 2em;

	span {
		color: #fff;
		font-family: ${setFont.slanted};
	}

	a:link {
		text-decoration: none;
	}

	&:hover {
		background: ${setColor.redColor};

		span {
			padding-right: 0.5em;
			transition: all 0.2s ease-in-out;
			color: #fff;
		}
	}
`;