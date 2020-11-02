import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Fade from "react-reveal/Fade";
import Weather from "../components/Weather";
import Footer from "../components/Footer";
import "./Home.css";

const Home = () => {

    const [state, setState] = useState({
        isLoading: true,
        condition: '',
        temp: '',
        city: ''
    });
    const loadedCoords = localStorage.getItem("cords");

    const GetWeather = async (lat, lng) => {
        const {
            data: {
                main: { temp },
                weather,
                name
            }
        } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_WEATHER_KEY}&units=metric`);
        setState({
            isLoading: false,
            condition: weather[0].main,
            temp,
            city: name
        });
    }

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
        }

    }, []);

    return (
        <div className="container">
            {loadedCoords === null ?
                // null이면
                <div className="loader">
                    <h2>위치확인 허용을 눌러주세요.</h2>
                </div>
                : // null이 아니면
                <Fade>
                    <div className="home_container">
                        <section className="home_title">
                            <h1>WHAT TO EAT TODAY?</h1>
                            <h2>오늘 뭐 먹지?</h2>
                            {/* <img src={logoImage} className="home_logo" alt="WHAT TO EAT TODAT? 오늘 뭐먹지?"/> */}
                        </section>
                        <section className="home_weather">
                            {state.isLoading ?
                                <p className="home_loading">loading..</p> :
                                <Fade>
                                    <Weather
                                        temp={state.temp}
                                        condition={state.condition}
                                        city={state.city} />
                                </Fade>
                            }
                        </section>
                        <section className="home_start">
                            <Link to={{
                                pathname: "/ask",
                                state: {
                                    temp: state.temp,
                                    condition: state.condition
                                }
                            }}>
                                <button className="btn">START</button>
                            </Link>
                        </section>
                    </div>
                </Fade>
            }
            <Footer />
        </div >
    );
}

export default Home;