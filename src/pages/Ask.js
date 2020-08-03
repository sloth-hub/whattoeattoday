import React from "react";
import Mood from "../components/Mood";

const Ask = (props) => {

    console.log(props);
    return (
        <div className="ask_container">
            {props.location.state == undefined ?
                window.location.replace("/#")
                :
                <div>
                    <Mood />
                </div>}
        </div>
    );
}

export default Ask;