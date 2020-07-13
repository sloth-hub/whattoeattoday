import React, { useState, useEffect } from "react";
import { firebaseConfig } from "../Config";
import useAxios from "../hooks/useAxios";

const Home = () => {

    const { loading, data, error } = useAxios({
        url: `${firebaseConfig.databaseURL}/.json`
    });

    const foods = JSON.stringify(data);

    return (
        <div className="container">
            {loading ?
                <div className="loader">
                    <span className="loading_text">Loading...</span>
                </div> : (
                    <div className="home_container">
                        <section className="home_title">
                            <h1>WHAT TO EAT TODAY ?</h1>
                            <h2>오늘 뭐 먹지?</h2>
                        </section>
                        <section className="home_weather">
                            <p>날씨</p>
                        </section>
                        <section className="home_start">
                            <button className="start_btn">START</button>
                        </section>
                    </div>
                )}
        </div>
    );

}

export default Home;