import React from "react";
import { SkillBars } from "react-skills";
import styled from "styled-components";
import { media } from "../../styles";

const Bar = () => {
	const skillsData = [
		{
			name: "Javascript",
			level: 70,
			color: "#0F929B",
		},
		{
			name: "Reactjs",
			level: 80,
			color: "#0F929B",
		},
		{
			name: "ReactNative",
			level: 50,
			color: "#0F929B",
		},
		{
			name: "Nodejs",
			level: 40,
			color: "#0F929B",
		},
		{
			name: "CSS",
			level: 80,
			color: "#0F929B",
		},
		{
			name: "HTML",
			level: 90,
			color: "#0F929B",
		},
		{
			name: "XSLT",
			level: 90,
			color: "#0F929B",
		},
	];
	return (
		<BarContainer>
			<SkillBars skills={skillsData} levelprogress={true} labelsWidth={140} />
		</BarContainer>
	);
};

export default Bar;

const BarContainer = styled.div`
	width: 50rem;
	margin-top: 5rem;
	${media.tablet`
width:40rem;
	
	`}

	${media.mobileM`
width:30rem;
	
	`}
	
	${media.mobileS`
width:25rem;

	
	`}
`;
