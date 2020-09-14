import styled from "styled-components";
import { setColor, setBorder, media } from "../../styles";

export const mainButton = styled.button`
	display: inline-block;
	text-decoration: none;
	padding: 1rem;
	text-align: center;
	cursor: pointer;

	background: transparent;
	color: ${(props) => (props.color ? props.color : "white")};
	${setBorder({ width: "2px", style: "solid" })};
	border-color: ${(props) => (props.color ? props.color : "white")};
	font-size: 2.5rem;
	text-transform: capitalize;

	span {
		color: #fff;
	}
	&:hover {
		background-color: ${setColor.redColor};
		padding-right: 0.5em;
		transition: all 0.2s ease-in-out;
	}
`;

export const SmallBtn = styled(mainButton)`
	font-size: 1.5rem;
	padding: 0.2rem 1rem;
`;
