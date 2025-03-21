import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import Weather from "../components/Weather";

const Home = ({ isLoading, weatherObj, isLogedIn }) => {

    return (
        <>
            <Fade duration={2000}>
                <div className="home_container">
                    <section className="home_title">
                        <h1>WHAT TO EAT TODAY?</h1>
                        <h2>오늘 뭐 먹지?</h2>
                    </section>
                    <section className="home_weather">
                        {isLoading ?
                            <p className="home_loading">loading..</p> :
                            <Fade duration={2000} >
                                <Weather
                                    weatherObj={weatherObj} />
                            </Fade>
                        }
                    </section>
                    <section className="home_start">
                        {isLogedIn ?
                            <p className="home_loading">loading..</p> :
                            <Link to="/ask">
                                <button className="btn">START</button>
                            </Link>
                        }
                    </section>
                </div>
            </Fade>
        </>
    );
}

export default Home;