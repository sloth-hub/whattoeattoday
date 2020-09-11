import React from "react";
import Mood from "../components/Mood";

const Ask = (props) => {

    if (props.location.state === undefined) {
        window.location.replace("/#") // state가 존재하지 않으면
    }
    return (
        <div className="container">
            <Mood 
            state={props.location.state}
            />
        </div>
    );
}

export default Ask;