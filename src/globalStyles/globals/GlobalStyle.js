import { createGlobalStyle } from "styled-components";

import { setFont, media } from "../../styles";

const GlobalStyle = createGlobalStyle`


*,
::before,
::after {
	margin: 0;
	padding: 0;
	box-sizing: inherit;
}

html {
	font-size: 62.5%;
	box-sizing: border-box;

	
}

body {
	font-family: ${setFont.main};
  
	font-weight: 200;
	color:#fff;

	}

	h1{
		font-family:${setFont.main};
		font-weight:400;
		font-size:4.5rem;

		${media.tablet`
	font-size:4rem;
	
	`}
	${media.mobileL`
	font-size:3.5rem;
	
	`}
	
	
	
		 }
		
		

	h2{
		font-family:${setFont.main};
		font-weight:300;
		font-size:4rem;
		${media.tablet`
	font-size:3.5rem;
	
	`}
	${media.mobileL`
	font-size:3rem;
	
	`}
		
	}
	



h3{

	font-size:3rem;
	${media.tablet`
	font-size:2.5rem;
	
	`}
	
}
h4{

font-size:2.2rem;
${media.tablet`
	font-size:2rem;
	
	`}
}
h5{

font-size:2rem;
${media.tablet`
	font-size:1.7rem;
	
	`}
}

p{
	font-size:2rem;
	${media.tablet`
	font-size:1.7rem;
	
	`}
}







	





	.container {
    display: grid;
    grid-template-rows:100vh  repeat(4, min-content);
	grid-template-columns: [full-start] 1fr [center-start] repeat(8,[col-start] minmax(min-content, 14rem) [col-end])[center-end] 1fr[full-end];
	

}







`;

export default GlobalStyle;
