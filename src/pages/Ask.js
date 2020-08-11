import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Food from "../components/Food";
import Mood from "../components/Mood";

const Ask = (props) => {

    if (props.location.state == undefined) {
        window.location.replace("/#") // state가 존재하지 않으면
    }
    return (
        <div className="ask_container">
            <Mood 
            state={props.location.state}
            />
        </div>
    );
}

export default Ask;