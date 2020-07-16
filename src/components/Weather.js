import React from "react";

const Weather = ({ temp, condition, city }) => {

    return (
        <ul>
            <li>temp: {temp}</li>
            <li>condition: {condition}</li>
            <li>city: {city}</li>
        </ul>
    );
}

export default Weather;