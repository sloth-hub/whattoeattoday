import React from "react";
import { HashRouter, Redirect, Route } from "react-router-dom";
import Home from "../pages/Home";
import Result from "../pages/Result";
import Mood from "./Mood";

const Router = ({ isLoading, weatherObj, isLogedIn }) => {
    return (
        <HashRouter>
            <Route exact path="/">
                <Home isLoading={isLoading} weatherObj={weatherObj} isLogedIn={isLogedIn} />
            </Route>
            <Route path="/ask">
                <Mood />
            </Route>
            <Route path="/result">
                <Result weatherObj={weatherObj}/>
            </Route>
            <Redirect from="*" to="/" />
        </HashRouter>
    );
}

export default Router;
