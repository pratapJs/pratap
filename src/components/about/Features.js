import React from "react";
import styled from "styled-components";
import { setColor } from "../../styles";
import mobileIcon from "../../images/mobileIcon.svg";
import websiteIcon from "../../images/websiteIcon.svg";

const Features = () => {
	return (
		<FeatureStyled>
			<div className="website">
				<img src={websiteIcon} alt="website" />
				<h4>Website Development</h4>
				<h5> Reach More. Discover More.</h5>
				<p>Optimized for Search Engines, built for speed</p>
			</div>
			<div className="mobile">
				<img src={mobileIcon} alt="mobile-icon" />
				<h4> IOS/Android app Development</h4>
				<h5>Extend Functionality. Increase Engagement.</h5>
				<p>Create a standalone app with either mobile platform</p>
			</div>
		</FeatureStyled>
	);
};

const FeatureStyled = styled.section`
	margin: 3rem 5rem;
	display: grid;
	grid-gap: 5rem;
	grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));

	img {
		width: 12rem;
		height: 12rem;
		margin-bottom: 2rem;
	}

	h4 {
		color: ${setColor.primaryColorLight};
	}

	p {
		color: ${setColor.primaryColorLight};
	}

	.website {
		margin-bottom: 4rem;

		justify-self: center;
	}

	.mobile {
		justify-self: center;
	}
`;
export default Features;
