import React from "react";
import styled from "styled-components";
import circlePhoto from "../../images/circlephoto.png";
import { setFont, setColor } from "../../styles";
import BarChart from "../../components/barchart/BarChart";

const Profile = () => {
	return (
		<ProfileDiv>
			<img src={circlePhoto} alt="my Profile" className="image" />
			<div className="bar">
				<BarChart />
			</div>
			<p>
				{" "}
				I'm a full-stack developer from Darwin, NT, Australia.
				<br />I am passionate about creating intuitive, dynamic websites and
				mobile applications.
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
		</ProfileDiv>
	);
};

export default Profile;

const Button = styled.button`
	grid-row: 3/4;
	justify-self: start;

	padding: 0.3em;
	text-align: center;
	height: 5vh;
	width: 15vh;
	background: transparent;

	border: 2px solid ${setColor.greenColor};
	font-size: 2em;

	span {
		color: ${setColor.greenColor};
		font-family: ${setFont.slanted};
	}

	a:link {
		text-decoration: none;
	}

	&:hover {
		background: ${setColor.redColor};

		span {
			padding-right: 0.5em;
			transition: all 0.2s ease-in-out;
			color: #fff;
		}
	}
`;

const ProfileDiv = styled.div`
	display: grid;
	margin-top: 1em;
	grid-gap: 0.5em;

	p {
		grid-row: 2/3;
		font-size: 2em;
		font-family: ${setFont.slanted};
	}
	h3 {
		font-size: 2.1em;
		text-decoration: 2px solid underline ${setColor.redColor};
	}
	.image {
		transition: transform 0.8s ease-in-out;
		&:hover {
			transform: rotate(360deg);
		}
	}

	.bar {
		grid-column: 4/10;

		grid-row: 1/3;
		align-self: end;
		justify-self: end;
		margin-right: 10em;
		font-family: ${setFont.slanted};
		font-size: 1.2em;
	}
`;
