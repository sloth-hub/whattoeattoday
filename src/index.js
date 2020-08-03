import React from "react";
import { HashRouter, Route } from 'react-router-dom';
import ReactDOM from "react-dom";
import { firebaseConfig } from "./Config";
import useAxios from "./hooks/useAxios";
import Home from "./pages/Home";
import Ask from "./pages/Ask";


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
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
