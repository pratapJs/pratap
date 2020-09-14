import React from "react";
import styled from "styled-components";
import { setColor } from "../../styles";

const Header = () => {
	return (
		<HeaderContainer>
			<h2 className="about"> About</h2>
		</HeaderContainer>
	);
};

export default Header;

const HeaderContainer = styled.div`
	display: grid;
	justify-content: center;
	.about {
		color: ${setColor.greenColor};

		margin-top: 1rem;
		position: relative;

		&:after {
			content: " ";
			height: 0.3rem;
			width: 70%;
			position: absolute;
			left: 0;
			bottom: 0;
			background: ${setColor.greenColor};
			margin-left: 0.5em;
		}
	}
`;
