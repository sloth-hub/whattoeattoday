import React from "react";

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
        iconName: "./images/005-sun.png",
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
const Weather = ({ weatherObj }) => {

    return (
        <div className="weatherbox">
            <p className="weatherTemp">{Math.round(weatherObj.temp)}˚C</p>
            <img src={`${process.env.PUBLIC_URL}/${weatherOptions[weatherObj.condition].iconName}`} className="weatherIcon" alt={weatherObj.condition} />
        </div>
    );
}

export default Weather;