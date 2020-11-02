import React from "react";
import { Helmet } from "react-helmet";
import { HashRouter, Route } from 'react-router-dom';
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import Ask from "./pages/Ask";
import "./reset.css";

const App = () => {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/ask" component={Ask}/>
    </HashRouter>
  );
}

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
