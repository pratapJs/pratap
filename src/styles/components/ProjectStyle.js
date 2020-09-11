import styled from "styled-components";
import infoBackground from "../../images/infoBackground.svg";
import { setColor, setFont } from "../../styles";

export const ProjectContainer = styled.div`
	display: grid;
	grid-column: full-start/full-end;

	background-image: url(${infoBackground});
	background-attachment: fixed;
	margin-left: 0;
	background-size: cover;
	background-repeat: no-repeat;

	width: 100%;

	h1 {
		grid-column: 5/6;
		justify-self: center;
		align-self: center;
		font-size: 3.4em;
		color: #fff;
		position: relative;
		padding: 5px 0;

		&:after {
			content: " ";
			height: 0.08em;
			width: 70%;
			position: absolute;
			left: 0;
			bottom: 0;
			background: #fff;
			margin-left: 0.5em;
		}
	}
`;

export const Button = styled.button`
	grid-row: 3/4;
	grid-column: 8/10;

	padding: 0.3em;
	text-align: center;
	height: 5vh;
	width: 20vh;
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

export const ImageContainer = styled.div`
	grid-column: 1/12;
	grid-row: 5/9;
	margin-left: 2em;
	grid-column-gap: 1em;

	img {
		width: 40em;
		height: 30em;
		margin-bottom: 2em;
		margin-left: 2em;
	}
`;

export const ProjectDescription = styled.div`
	line-height: 3em;
	grid-column: 1/4;
	grid-row: 2/5;
	margin-top: 5em;

	margin-left: 2em;
	h2 {
		color: #fff;
		font-size: 3em;

		margin-bottom: 1em;
	}
	p {
		color: #fff;
		font-size: 2em;

		grid-row: 2/3;
		span {
			margin-left: 1em;
		}
	}
`;