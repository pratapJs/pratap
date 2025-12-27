import styled from "styled-components";

import { setFont, setColor } from "../../styles";
import { setGrid } from "../../styles";

export const ProjectContainer = styled.div`
	background-color: ${setColor.greenColor};
	${setGrid({ x: "center", y: "center" })};
	grid-column: center-start/center-end;
	grid-row: 4/5;
`;
