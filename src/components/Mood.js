import React, { useState } from "react";
import Food from "../components/Food";

const Mood = ({ state }) => {

    const [toggle, setToggle] = useState('');
    const [mood, setMood] = useState('');

    const handleMoodChange = (evt) => {
        setMood(evt.target.value);
    }

    const handleMoodClick = () => {
        if (mood === "") {
            alert("기분을 선택해주세요.");
        } else {
            state.mood = mood;
            setToggle({ isGetMood: true, isGetFood: false });
        }
    }

    if (toggle.isGetMood) {
        return <Food state={state} toggle={toggle} setToggle={setToggle} />;
    }
    return (
        <div className="mood_container">
            <div className="mood_box">
                <h1 className="mood_ask">당신의 오늘 기분은 어떤가요?</h1>
                <div className="moods">
                    <input type="radio" name="mood" value="good" id="good" onChange={handleMoodChange} /><label htmlFor="good">좋음</label>
                    <input type="radio" name="mood" value="happy" id="happy" onChange={handleMoodChange} /><label htmlFor="happy">행복함</label>
                    <input type="radio" name="mood" value="melancholy" id="melancholy" onChange={handleMoodChange} /><label htmlFor="melancholy">우울함</label>
                    <input type="radio" name="mood" value="sad" id="sad" onChange={handleMoodChange} /><label htmlFor="sad">슬픔</label>
                    <input type="radio" name="mood" value="angry" id="angry" onChange={handleMoodChange} /><label htmlFor="angry">화남</label>
                </div>
                <button className="mood_next btn" onClick={handleMoodClick}>NEXT</button>
            </div>

        </div>
    );
}

export default Mood;