import React from "react";

const Food = (props) => {

    return (
        <div className="food_container">
            <h1 className="food_ask">지금 어떤 맛이 땡기나요?</h1>
            <input type="checkbox" name="taste" value="spicy" id="spicy" /><label htmlFor="spicy">매운거</label>
            <input type="checkbox" name="taste" value="oily" id="oily" /><label htmlFor="oily">기름진거</label>
            <input type="checkbox" name="taste" value="sour" id="sour" /><label htmlFor="sour">상큼한거</label>
            <input type="checkbox" name="taste" value="sour" id="soup" /><label htmlFor="soup">호로록 국물있는거</label>
        </div>
    );
}

export default Food;