import React from "react";

const Result = ({ state, toggle }) => {

    return (
        <div>
            <ul>
                <li>온도 : {state.temp}</li>
                <li>날씨 : {state.condition}</li>
                <li>도시 : {state.city}</li>
                <li>기분 : {state.mood}</li>
                <li>맛 : {state.taste}</li>
            </ul>
        </div>
    );
}

export default Result;