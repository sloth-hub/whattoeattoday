import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import Mood from "./Mood";

const Food = ({ mood }) => {

    const [taste, setTaste] = useState("");
    const [isClickedPrev, setIsClickedPrev] = useState(false);
    const history = useHistory();

    const handleFoodChange = (evt) => {
        setTaste(evt.target.value);
    }
    const handleNextClick = () => {
        if (taste === "") {
            alert("땡기는 맛을 선택해주세요.");
        } else {
            history.push({
                pathname: "/result",
                state: {
                    mood,
                    taste
                }
            })
        }
    }

    const handlePrevClick = () => {
        setIsClickedPrev(true);
    }

    if (isClickedPrev) {
        return <Mood />;
    }
    return (
        <div className="ask_container">
            <Fade>
                <div className="food_box">
                    <h1 className="food_ask">지금 <span>어떤 맛</span>이 땡기나요?</h1>
                    <div className="foods">
                        <label htmlFor="spicy">
                            <input type="radio" name="taste" className="spicy" id="spicy" value="spicy" onChange={handleFoodChange} />
                            <img src={process.env.PUBLIC_URL + "/images/spicy.png"} alt="spicy" />
                            <span className="food_text">매운맛</span>
                        </label>
                        <label htmlFor="oily">
                            <input type="radio" name="taste" className="oily" id="oily" value="oily" onChange={handleFoodChange} />
                            <img src={process.env.PUBLIC_URL + "/images/oily.png"} alt="oily" />
                            <span className="food_text">기름진맛</span>
                        </label>
                        <label htmlFor="light">
                            <input type="radio" name="taste" className="light" id="light" value="light" onChange={handleFoodChange} />
                            <img src={process.env.PUBLIC_URL + "/images/light.png"} alt="light" />
                            <span className="food_text">담백한맛</span>
                        </label>
                        <label htmlFor="soup">
                            <input type="radio" name="taste" className="soup" id="soup" value="soup" onChange={handleFoodChange} />
                            <img src={process.env.PUBLIC_URL + "/images/soup.png"} alt="soup" />
                            <span className="food_text">국탕면</span>
                        </label>
                    </div>
                    <div className="btn_wrap btn">
                    <button className="btn" onClick={handlePrevClick}>PREV</button>
                    <button className="btn" onClick={handleNextClick}>NEXT</button>
                    </div>
                </div>
            </Fade >
        </div >
    );
}

export default Food;