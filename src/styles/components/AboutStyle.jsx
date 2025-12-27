import styled from "styled-components";

import { setColor } from "../../styles";

export const AboutContainer = styled.div`
	display: grid;
	grid-column: full-start/full-end;

	color: #000;

	margin-left: 2em;

	.about {
		justify-self: center;
		align-self: center;
		font-size: 2em;
		position: relative;

		&:after {
			content: " ";
			height: 0.15em;
			width: 70%;
			position: absolute;
			left: 0;
			bottom: 0;
			background: ${setColor.redColor};
			margin-left: 1em;
		}
	}
`;
