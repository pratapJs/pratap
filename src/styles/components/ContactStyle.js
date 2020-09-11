import styled from "styled-components";

import { setColor, setFont } from "../../styles";

export const ContactContainer = styled.div`
	background-color: ${setColor.primaryColor};
	justify-content: center;
	align-content: center;
	display: grid;
	grid-column: full-start/full-end;
	grid-template-rows: 5;
	div {
		display: grid;
		justify-content: center;
	}

	h1 {
		font-size: 3.3em;
		color: #fff;
		position: relative;
		font-family: ${setFont.slanted};

		margin-top: 0.4em;

		&:after {
			content: " ";
			height: 0.09em;
			width: 80%;
			position: absolute;
			left: 0;
			bottom: 0;
			background: #fff;
			margin-left: 0.5em;
		}
	}
`;
