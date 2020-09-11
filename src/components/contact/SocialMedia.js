import React from "react";
import styled from "styled-components";
import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import twitter from "../../images/twitter.svg";
import { setColor, setFont } from "../../styles";
const SocialMedia = () => {
	return (
		<ImageContainer>
			<div>
				<a
					href="https://www.facebook.com/adhi.pratap"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={facebook} alt="facebook" />
				</a>

				<a
					href="https://www.facebook.com/adhi.pratap"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={instagram} alt="instagram" />
				</a>

				<a
					href="https://www.facebook.com/adhi.pratap"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={twitter} alt="twitter" />
				</a>
			</div>
			<div>
				<p> PRATAP ADHIKARI &copy; 2020</p>
			</div>
		</ImageContainer>
	);
};

export default SocialMedia;
const ImageContainer = styled.div`
	background-color: ${setColor.secondaryColor};
	grid-column: full-start/full-end;
	display: grid;
	justify-content: center;

	img {
		height: 4em;
		width: 4em;
		margin-bottom: 2em;
		justify-self: center;
		margin-left: 5em;
	}
	p {
		margin-left: 10em;
		font-family: ${setFont.main};
		font-size: 1em;
	}
`;
