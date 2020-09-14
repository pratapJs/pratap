import React from "react";
import styled from "styled-components";
import Photo from "../../images/circlephoto.png";
import { setFont, setColor, media } from "../../styles";
import Bar from "../../components/about/Bar";
const Profile = () => {
	return (
		<ProfileDiv>
			<div>
				<img src={Photo} alt="my Profile" className="image" />
				<div className="profiledesc">
					<h4>Pratap Adhikari</h4>

					<p>
						{" "}
						I'm a Front-End Developer from Darwin, Australia.
						<br />I focus on creating intuitive, dynamic user experiences.
					</p>

					<Button>
						<a
							href="https://github.com/savip"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span> My Resume </span>
						</a>
					</Button>
				</div>
			</div>
			<div>
				<Bar />
			</div>
		</ProfileDiv>
	);
};

export default Profile;

const ProfileDiv = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(37rem, 1fr));
	margin-left: 4rem;

	${media.mobileL`
margin-left:0.1rem;
	
	`}

	p {
		font-family: ${setFont.slanted};
		line-height: 18pt;
		color: ${setColor.primaryColorLight};
	}
	h4 {
		margin-left: 5rem;
	}

	.profiledesc {
		display: grid;
	}
`;
const Button = styled.button`
	margin-left: 5rem;
	padding: 0.3em;
	text-align: center;
	height: 5rem;
	width: 14rem;
	background: transparent;
	margin-top: 2rem;
	border: 2px solid ${setColor.greenColor};
	font-size: 2rem;
	${media.tablet`
	height: 4rem;
	width: 12rem;
	
	
	`} span {
		color: ${setColor.greenColor};
		font-family: ${setFont.slanted};
	}

	a:link {
		text-decoration: none;
	}

	&:hover {
		background: ${setColor.redColor};
		color: white;
		padding-right: 0.5em;
		transition: all 0.2s ease-in-out;

		span {
			/* 	padding-right: 0.5em;
			transition: all 0.2s ease-in-out; */
			color: white;
		}
	}
`;
