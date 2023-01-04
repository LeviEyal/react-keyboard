import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Keyboard } from "./components/Keyboard";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<App />
		<Keyboard />
	</React.StrictMode>
);
