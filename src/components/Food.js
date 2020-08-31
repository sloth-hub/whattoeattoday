import React, { useState } from "react";
import Result from "../pages/Result";

const Food = ({state, toggle, setToggle}) => {
    
    const [taste, setTaste] = useState('');

    const handleFoodChange = (evt) => {
        setTaste(evt.target.value);
    }
    const handleFoodClick = () => {
        if (taste === "") {
            alert("땡기는 맛을 선택해주세요.");
        } else {
            state.taste = taste;
            setToggle({isGetMood: true, isGetFood: true });
        }
    }
    if (toggle.isGetFood) {
        return <Result state={state}/>;
    }
    return (
        <div className="food_container">
            <h1 className="food_ask">지금 어떤 맛이 땡기나요?</h1>
            <input type="radio" name="taste" value="spicy" id="spicy" onChange={handleFoodChange} /><label htmlFor="spicy">매운거</label>
            <input type="radio" name="taste" value="oily" id="oily" onChange={handleFoodChange} /><label htmlFor="oily">기름진거</label>
            <input type="radio" name="taste" value="sour" id="sour" onChange={handleFoodChange} /><label htmlFor="sour">상큼한거</label>
            <input type="radio" name="taste" value="soup" id="soup" onChange={handleFoodChange} /><label htmlFor="soup">호로록 국물있는거</label>
            <button className="food_next" onClick={handleFoodClick}>NEXT</button>
        </div>
    );
}

export default Food;