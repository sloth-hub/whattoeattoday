import React, { useEffect, useState } from 'react';
import axios from "axios";
import Router from './Router';
import Footer from './Footer';
import { auth } from "../fbase";

const App = () => {

    const [weatherObj, setWeatherObj] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isLogedIn, setIsLogedIn] = useState(true);
    const loadedCoords = localStorage.getItem("cords");

    useEffect(() => {

        if (loadedCoords === null) {
            if (window.navigator.geolocation) { // GPS를 지원하면
                window.navigator.geolocation.getCurrentPosition((position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    const coordsObj = {
                        latitude,
                        longitude
                    };
                    localStorage.setItem("cords", JSON.stringify(coordsObj));
                    window.location.reload();
                });
            } else {
                alert("GPS를 지원하지 않습니다.");
            }
        } else {
            const parseCoords = JSON.parse(loadedCoords);
            GetWeather(parseCoords.latitude, parseCoords.longitude);
            LogIn();
        }

    }, [loadedCoords]);

    const GetWeather = async (lat, lng) => {
        const {
            data: {
                main: { temp },
                weather,
                name
            }
        } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_WEATHER_KEY}&units=metric`);
        setWeatherObj({
            condition: weather[0].main,
            temp,
            city: name
        });
        setIsLoading(false);
    }

    const LogIn = () => {

        auth.signInAnonymously().then((user) => {
                if (user) {
                    setIsLogedIn(false);
                } else {
                    console.log("Login Failed");
                }
        }).catch((error) => {
            console.log(error.message);
        });

    }

    return (
        <div className="container">
            {loadedCoords === null ?
                // null이면
                <div className="home_container loader">
                    <h2>위치확인 허용을 눌러주세요.</h2>
                </div>
                : <Router isLoading={isLoading} weatherObj={weatherObj} isLogedIn={isLogedIn} />
            }
            <Footer />
        </div>
    );
}

export default App;