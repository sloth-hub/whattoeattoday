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
    </Helmet>
  </React.Fragment>,
  rootElement
);
