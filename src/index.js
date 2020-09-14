import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "../src/globalStyles/globals/GlobalStyle";

import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
	<BrowserRouter>
		<GlobalStyle />
		<App />
	</BrowserRouter>,
	document.getElementById("root")
);
