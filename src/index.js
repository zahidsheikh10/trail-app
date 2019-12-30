import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App.js";
import { configConsumerProps } from "antd/lib/config-provider";

ReactDOM.render(<App />, document.getElementById("root"));
