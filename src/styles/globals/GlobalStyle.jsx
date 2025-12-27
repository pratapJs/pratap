import { createGlobalStyle } from "styled-components";

import { setFont } from "../../styles";

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
  
	font-weight: 400;
	color:#fff;

	}



	.container {
    display: grid;
    grid-template-rows:  100vh  min-content 100vh  repeat(2, min-content);
	grid-template-columns: [full-start] 1fr [center-start] repeat(8,[col-start] minmax(min-content, 14rem) [col-end])[center-end] 1fr[full-end];
	

}







`;

export default GlobalStyle;
