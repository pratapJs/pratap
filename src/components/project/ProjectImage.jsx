import React from "react";
import styled from "styled-components";
import { media } from "../../styles";

import ecommerce from "../../images/eCommerce.png";
import jekamobile from "../../images/jekamobile.png";

const ProjectImage = () => {
	return (
		<ImageContainer>
			<div className="imagewrapper">
				<p>
					Ecommerce Website <br />
					&ndash; Complete e-commerce site using React, Redux, ExpressJs
				</p>
				<a
					href="http://104.131.15.211/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={ecommerce} alt="store app" />
				</a>
			</div>
			<div className="imagewrapper">
				<p>
					Mobile Store and Repair shop <br />
					&ndash; Complete store site using React, Redux, ExpressJs
				</p>
				<a
					href="https://mobilestoreandrepairshop.netlify.app/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={jekamobile} alt="store app" />
				</a>
			</div>
		</ImageContainer>
	);
};

export default ProjectImage;

const ImageContainer = styled.div`
	grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
	display: flex;
	margin-left: 2rem;
	flex-direction: columns;
	flex-wrap: wrap;

	.imagewrapper {
		display: flex;
		position: relative;
		align-items: center;

		&:hover img {
			opacity: 0.1;
		}
		&:hover p {
			opacity: 1;
		}

		p {
			position: absolute;
			margin-left: 5rem;
			opacity: 0;
			text-transform: capitalize;
		}
	}

	${media.tablet`
justify-content:center;
		`}

	img {
		width: 42rem;
		height: 30rem;
		margin: 2rem;
		display: block;
		transition: 0.5s ease;

		opacity: 1;

		${media.mobileM`
width:30rem;
height:20rem;
		`}
	}
`;
