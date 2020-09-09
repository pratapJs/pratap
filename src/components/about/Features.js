import React from "react";
import styled from "styled-components";

import mobileIcon from "../../images/mobileIcon.svg";
import websiteIcon from "../../images/websiteIcon.svg";
import { setFont, setColor } from "../../styles";

const Features = () => {
	return (
		<FeatureStyled>
			<article className="website">
				<img src={websiteIcon} alt="website" />
				<h2>Website Development</h2>
				<h3> Reach More. Discover More.</h3>
				<p>Optimized for Search Engines, built for speed</p>
			</article>

			<article className="mobileapps">
				<img src={mobileIcon} alt="mobile-icon" />
				<h2> IOS/Android app Development</h2>
				<h3>Extend Functionality. Extend Acess. Increase Engagement.</h3>
				<p>
					Integrate your web experience or create a standalone app with either
					mobile platform
				</p>
			</article>
		</FeatureStyled>
	);
};

export default Features;

const FeatureStyled = styled.section`
	display: grid;
	margin-top: 5em;

	img {
		width: 22em;
		height: 22em;
	}

	h2 {
		margin-top: 1em;
		font-size: 2.1em;
	}
	h3 {
		font-size: 1.8em;
	}
	p {
		font-size: 1.8em;
	}

	.mobileapps {
		grid-column: 9/12;
	}
	.website {
		grid-column: 5/8;
	}
`;
