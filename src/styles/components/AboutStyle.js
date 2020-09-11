import styled from "styled-components";
import repeatingBackground from "../../images/repeatingBackground.svg";
import { setColor } from "../../styles";

export const AboutContainer = styled.div`
	display: grid;
	grid-column: full-start/full-end;

	color: #000;
	background-image: url(${repeatingBackground});
	margin-left: 2em;
	background-size: cover;
	background-repeat: no-repeat;
	height: 100%;
	width: 100%;

	.about {
		justify-self: center;
		align-self: center;
		color: ${setColor.greenColor};
		font-size: 2em;
		position: relative;

		&:after {
			content: " ";
			height: 0.15em;
			width: 70%;
			position: absolute;
			left: 0;
			bottom: 0;
			background: ${setColor.greenColor};
			margin-left: 1em;
		}
	}
`;
