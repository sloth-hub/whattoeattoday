import React from "react";
import PropTypes from "prop-types";

const weatherOptions = {
    Haze: {
        iconName: "/img/009-cloudy.png",
        title: "Haze"
    },
    Thunderstorm: {
        iconName: "/img/013-thunder.png",
        title: "Thunderstrom"
    },
    Drizzle: {
        iconName: "/img/021-rain.png",
        title: "Drizzle"
    },
    Rain: {
        iconName: "/img/002-rainy.png",
        title: "Rain"
    },
    Snow: {
        iconName: "/img/025-snow.png",
        title: "Snow"
    },
    Clear: {
        iconName: "/img/005-sun.png",
        title: "Clear"
    },
    Clouds: {
        iconName: "/img/001-cloud.png",
        title: "Clouds"
    },
    Mist: {
        iconName: "/img/016-mist.png",
        title: "Mist"
    },
    Dust: {
        iconName: "/img/012-windy.png",
        title: "Dust"
    },
    Tornado: {
        iconName: "/img/015-tornado.png",
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