import React from "react";
import styled from "styled-components";
import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import twitter from "../../images/twitter.svg";
import { setColor, setFont, media } from "../../styles";
/* import { BsChevronDoubleUp } from "react-icons/bs";
import { Link } from "react-router-dom"; */
const SocialMedia = () => {
	return (
		<SocialContainer>
			{/* 	<div className="homeIcon">
				<Link to="/">
					{" "}
					<BsChevronDoubleUp size={60} />
				</Link>{" "}
			</div> */}
			<div>
				<a
					href="https://www.facebook.com/adhi.pratap"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={facebook} alt="facebook" />
				</a>

				<a
					href="https://www.instagram.com/adhi.pratap/?hl=en"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={instagram} alt="instagram" />
				</a>

				<a
					href="https://twitter.com/home"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={twitter} alt="twitter" />
				</a>
			</div>
			<div>
				<p>
					{" "}
					PRATAP ADHIKARI <span> &copy; 2020 </span>
				</p>
			</div>
		</SocialContainer>
	);
};

export default SocialMedia;
const SocialContainer = styled.div`
	background-color: ${setColor.secondaryColor};
	margin-top: 6rem;
	display: grid;
	justify-content: center;

	img {
		height: 5rem;
		width: 5rem;
		margin-bottom: 4rem;
		justify-self: center;
		margin-left: 6rem;
		margin-top: 4rem;
		${media.mobileM`
		margin-left: 3rem;
			
			
	
	`}
	}
	p {
		font-family: ${setFont.main};
		font-size: 1.5rem;
		margin: 1rem 9rem;
		${media.mobileM`
		margin-left: 3rem; `}

		color: ${setColor.greenColor};
		span {
			color: ${setColor.redColor};
		}
	}

	.homeIcon {
		justify-self: center;
	}
`;
