import React, { useState, useEffect } from "react";
import { HashRouter, Route } from 'react-router-dom';
import ReactDOM from "react-dom";
import { firebaseConfig } from "./Config";
import useAxios from "./hooks/useAxios";
import Home from "./pages/Home";


const App = () => {
  return (
    <HashRouter basename="/what_to_eat_today">
      <Route path="/" exact={true} component={Home}/>
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
