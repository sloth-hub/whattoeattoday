import React from "react";
import PropTypes from "prop-types";

const Weather = ({ temp, condition, city }) => {

    return (
        <ul>
            <li>{Math.round(temp)}˚C</li>
            <li>condition: {condition}</li>
            <li>city: {city}</li>
        </ul>
    );
}

Weather.propTypes = {
    condition: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
} 

export default Weather;