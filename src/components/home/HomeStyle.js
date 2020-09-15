import styled from "styled-components";

import { setColor, fadeIn } from "../../styles";
import { mainButton } from "../../globalStyles/globals/Buttons";

export const HeaderContainer = styled.div`
	background: ${setColor.primaryColor};
	grid-column: full-start/full-end;

	display: grid;

	grid-template-rows: 95vh;
	grid-template-areas: "overlap";
	grid-row-gap: 2rem;

	.homeText {
		grid-area: overlap;
		display: grid;
		margin-left: 2rem;
		align-self: center;
		justify-self: center;
		${fadeIn("-40em", "5em", 0)}
	}

	span {
		color: ${setColor.redColor};
	}
`;

export const LinkButton = styled(mainButton)`
	${fadeIn("40em", "-5em", 0)} /* z-index: 1; */
	height:5rem;
	width: 20rem;
	justify-self: center;
	margin-top: 3rem;
`;
