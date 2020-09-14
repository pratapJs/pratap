import styled from "styled-components";

import { setColor, fadeIn, media } from "../../styles";
import { mainButton } from "../../globalStyles/globals/Buttons";

export const HeaderContainer = styled.div`
	background: ${setColor.primaryColor};
	grid-column: full-start/full-end;

	display: grid;

	/* grid-template-areas: "overlap"; */
	grid-row-gap: 2rem;
	justify-content: center;
	align-content: center;

	.homeText {
		/* grid-area: overlap; */
		margin-left: 2rem;

		${fadeIn("-40em", "5em", 0)}
	}

	span {
		color: ${setColor.redColor};
	}
`;

/* export const Constellation = styled.div`
	grid-area: overlap;
`; */
export const LinkButton = styled(mainButton)`
	margin-top: 1rem;
	justify-self: center;

	${fadeIn("40em", "-5em", 0)} /* z-index: 1; */


	${media.tablet` 
	font-size: 2rem;
	


`}
`;
