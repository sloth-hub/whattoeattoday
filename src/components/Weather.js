import React from "react";
import PropTypes from "prop-types";

const weatherOptions = {
    Haze: {
        iconName: "/images/009-cloudy.png",
        title: "Haze"
    },
    Thunderstorm: {
        iconName: "/images/013-thunder.png",
        title: "Thunderstrom"
    },
    Drizzle: {
        iconName: "/images/021-rain.png",
        title: "Drizzle"
    },
    Rain: {
        iconName: "/images/002-rainy.png",
        title: "Rain"
    },
    Snow: {
        iconName: "/images/003-snowy.png",
        title: "Snow"
    },
    Atmosphere: {
        iconName: "/images/009-cloudy.png",
        title: "Atmosphere"
    },
    Clear: {
        iconName: "/images/005-sun.png",
        title: "Clear"
    },
    Clouds: {
        iconName: "/images/001-cloud.png",
        title: "Clouds"
    },
    Mist: {
        iconName: "/images/016-mist.png",
        title: "Mist"
    },
    Dust: {
        iconName: "/images/012-windy.png",
        title: "Dust"
    },
}
const Weather = ({ temp, condition }) => {

    return (
        <ul>
            <li className="weatherTemp">{Math.round(temp)}˚C</li>
            <li><img src={weatherOptions[condition].iconName} className="weatherIcon" alt={condition} /></li>
            <li className="weatherTitle">{weatherOptions[condition].title}</li>
        </ul>
    );
}

Weather.propTypes = {
    condition: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
} 

export default Weather;