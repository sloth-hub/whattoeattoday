import React, { useState } from "react";
import { Link } from "react-router-dom";


const Mood = (props) => {

    // temp: props.location.state.temp,
    // condition: props.location.condition,
    // city: props.location.state.city,
    // mood: value
    const [value, setValue] = useState('');
    const handleChange = (evt) => {
        setValue(evt.target.value);
    }

    const handleClick = () => {
        if(value == "" || value == "선택") {
            alert("기분을 선택해주세요.");
        }else {
            console.log(value);
        }
    }

    return (
        <div>
            <h1>당신의 오늘 기분은 어떤가요?</h1>
            <select className="mood_select" value={value} onChange={handleChange}>
                <option>선택</option>
                <option value="good">좋음</option>
                <option value="happy">행복함</option>
                <option value="melancholy">우울함</option>
                <option value="sad">슬픔</option>
                <option value="angry">화남</option>
            </select>
            <button onClick={handleClick}>NEXT</button>
        </div>
    );
}

export default Mood;