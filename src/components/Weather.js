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
        iconName: "/images/025-snow.png",
        title: "Snow"
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
    Tornado: {
        iconName: "/images/015-tornado.png",
        title: "Tornado"
    }
}
const Weather = ({ temp, condition }) => {

    return (
        <div className="weatherbox">
            <p className="weatherTemp">{Math.round(temp)}˚C</p>
            <img src={weatherOptions[condition].iconName} className="weatherIcon" alt={condition} />
        </div>
    );
}

Weather.propTypes = {
    condition: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
} 

export default Weather;