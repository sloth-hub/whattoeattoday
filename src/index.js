import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import { Helmet } from "react-helmet";
import ReactDOM from "react-dom";
import App from "../src/components/App";
import "./style.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.Fragment>
    <App />
    <Helmet>
    <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v8.0" nonce="k6exFkce"></script>
    </Helmet>
  </React.Fragment>,
  rootElement
);
