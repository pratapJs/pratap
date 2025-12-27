import styled from "styled-components";

import { setFont, setColor, Button } from "../../styles";

export const LinkButton = styled(Button)`
	align-self: center;
	justify-self: center;
	margin-top: 1em;
	z-index: 1;
	span {
		color: #fff;
	}
`;

export const HeaderContainer = styled.div`
	background: ${setColor.primaryColor};

	grid-column: full-start/full-end;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;
	grid-template-areas: "overlap";
	grid-gap: 1em;

	@media screen and (max-width: 768px) {
		font-size: 70%;
	}

	.homeText {
		grid-area: overlap;
		align-self: center;
		justify-self: center;
		display: grid;
	}

	h1 {
		font-family: ${setFont.slanted};
		font-weight: 100;
		font-size: 4.5em;

		span {
			color: ${setColor.redColor};
		}
	}
`;

export const Constellation = styled.div`
	grid-area: overlap;
`;
