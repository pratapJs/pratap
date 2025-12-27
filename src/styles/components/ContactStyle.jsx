import styled from "styled-components";

import { setColor } from "../../styles";
import { setGrid } from "../../styles";

export const ContactContainer = styled.div`
	background-color: ${setColor.primaryColor};
	${setGrid({ x: "center", y: "center" })};
	grid-column: full-start/full-end;
	grid-row: 5/6;
	border-top: 2px solid ${setColor.redColor};
`;
