import React from "react";
import styled from "styled-components";
import { setFont } from "../../styles";
const HeaderContact = () => {
	return (
		<HeaderStyle>
			{" "}
			<h2>Contact</h2>{" "}
		</HeaderStyle>
	);
};

export default HeaderContact;

const HeaderStyle = styled.div`
	justify-self: center;

	h2 {
		color: #fff;
		position: relative;
		font-family: ${setFont.slanted};

		margin-top: 5rem;

		&:after {
			content: " ";
			height: 0.2rem;
			width: 80%;
			position: absolute;
			left: 0;
			bottom: 0;
			background: #fff;
			margin-left: 0.5em;
		}
	}
`;
