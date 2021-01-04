import React from "react";
import styled from "styled-components";
import { media } from "../../styles";
import todoapp from "../../images/todoapp.png";
import cocktails from "../../images/cocktails.png";
import beachresort from "../../images/resortwebsite.png";
import speech from "../../images/speech recognition.png";
import exchangerate from "../../images/exchange rate.png";
import relaxer from "../../images/relaxer.png";
import feedbackapp from "../../images/feedbackapp.png";
import githubuser from "../../images/githubuser.png";
import ecommerce from "../../images/eCommerce.png";

const ProjectImage = () => {
	return (
		<ImageContainer>
			<div className="imagewrapper">
				<p>
					Complete eCommerce Site <br />
					&ndash; Complete eCommerce site using React, Redux, ExpressJs
				</p>
				<a
					href="http://104.131.15.211/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={ecommerce} alt="eCommerce app" />
				</a>
			</div>
			<div className="imagewrapper">
				<p>
					Search Github User <br />
					&ndash; search github users, popular languages, followers
				</p>
				<a
					href="https://searchgitubuser.netlify.app/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={githubuser} alt="searchgithubuser app" />
				</a>
			</div>
			<div className="imagewrapper">
				<p>
					{" "}
					demo hotel website <br />
					&ndash; includes all the essential features
				</p>
				<a
					href="https://resortwebsitedemo.netlify.app/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={beachresort} alt="resort website app" />{" "}
				</a>
			</div>
			<div className="imagewrapper">
				<p>
					{" "}
					Cocktails Training demo website <br />
					&ndash; can search for favourite cocktail drink <br />
					and check the ingredients too
				</p>
				<a
					href="https://cocktailsbypratap.netlify.app/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={cocktails} alt="cocktail app" />{" "}
				</a>{" "}
			</div>
			<div className="imagewrapper">
				<p>
					Speech recognition app <br /> &ndash; speak and guess the number
					between 1 to 100
				</p>
				<a
					href="https://speechrecognitionguess.netlify.app/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={speech} alt="speech recognition app" />
				</a>
			</div>
			<div className="imagewrapper">
				<p>
					Currency exchange rate <br />
					&ndash; check the current currency exchange rate
				</p>
				<a
					href="https://exchangeratecurrency.netlify.app/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={exchangerate} alt="todo app" />
				</a>
			</div>
			<div className="imagewrapper">
				<p>
					Relax your mind <br />
					&ndash; watch the screen to relax your mind
				</p>
				<a
					href="https://relaxermindapp.netlify.app/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={relaxer} alt="relaxer app" />
				</a>
			</div>
			<div className="imagewrapper">
				<p>
					Business Feedback App <br />
					&ndash; Email your feedback
				</p>
				<a
					href="https://react-local-businesses.herokuapp.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={feedbackapp} alt="feedback app" />
				</a>
			</div>

			<div className="imagewrapper">
				<p>
					Todo app <br />
					&ndash; add ,delete and update your todo jobs
				</p>
				<a
					href="https://prataptodos.netlify.app/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={todoapp} alt="todo app" />
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
