import React from "react";
import styled from "styled-components";
import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import twitter from "../../images/twitter.svg";
import { setColor, setFont } from "../../styles";
const SocialMedia = () => {
	return (
		<SocialContainer>
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
		</SocialContainer>
	);
};

export default SocialMedia;
const SocialContainer = styled.div`
	background-color: ${setColor.secondaryColor};
	grid-column: full-start/full-end;
	grid-row: 6/7;
	display: grid;
	justify-content: center;

	img {
		height: 4em;
		width: 4em;
		margin-bottom: 3em;
		justify-self: center;
		margin-left: 5em;
		margin-top: 3em;
	}
	p {
		margin-left: 10em;
		font-family: ${setFont.main};
		font-size: 1em;
		margin-bottom: 1em;
	}
`;
