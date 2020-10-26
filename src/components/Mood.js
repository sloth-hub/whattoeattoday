import React, { useState } from "react";
import Food from "../components/Food";
import Fade from "react-reveal/Fade";

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
            <Fade>
                <div className="mood_box">
                    <h1 className="mood_ask">당신의 오늘 기분은 어떤가요?</h1>
                    <div className="moods">
                        <label htmlFor="good">
                            <input type="radio" name="mood" className="good" id="good" value="good" onChange={handleMoodChange} />
                            <img src={process.env.PUBLIC_URL + "/images/001-icon-569501_select.png"} alt="good" />
                        </label>
                        <label htmlFor="happy">
                            <input type="radio" name="mood" className="happy" id="happy" value="happy" onChange={handleMoodChange} />
                            <img src={process.env.PUBLIC_URL + "/images/002-icon-569531_select.png"} alt="happy" />
                        </label>
                        <label htmlFor="melancholy">
                            <input type="radio" name="mood" className="melancholy" id="melancholy" value="melancholy" onChange={handleMoodChange} />
                            <img src={process.env.PUBLIC_URL + "/images/003-icon-569513_select.png"} alt="melancholy" />
                        </label>
                        <label htmlFor="sad">
                            <input type="radio" name="mood" className="sad" id="sad" value="sad" onChange={handleMoodChange} />
                            <img src={process.env.PUBLIC_URL + "/images/004-icon-569569_select.png"} alt="sad" />
                        </label>
                        <label htmlFor="angry">
                            <input type="radio" name="mood" className="angry" id="angry" value="angry" onChange={handleMoodChange} />
                            <img src={process.env.PUBLIC_URL + "/images/005-icon-569518_select.png"} alt="angry" />
                        </label>
                    </div>
                    <button className="mood_next btn" onClick={handleMoodClick}>NEXT</button>
                </div>
            </Fade>
        </div>
    );
}

export default Mood;