import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Food from "../components/Food";
import Mood from "../components/Mood";

const Ask = (props) => {

    const [toggle, setToggle] = useState({
        isGetMood: false
    });

    const [mood, setMood] = useState('');

    const handleMoodChange = (evt) => {
        setMood(evt.target.value);
    }

    const handleMoodClick = () => {
        if (mood == "") {
            alert("기분을 선택해주세요.");
        } else {
            props.location.state.mood = mood;
            setToggle({ isGetMood: true });
        }
    }

    if (props.location.state == undefined) {
        window.location.replace("/#") // state가 존재하지 않으면
    }
    return (
        <div className="ask_container">
            <Mood handleMoodChange={handleMoodChange} isGetMood={toggle.isGetMood}/>
            <button onClick={handleMoodClick}>NEXT</button>
        </div>
    );
}

export default Ask;