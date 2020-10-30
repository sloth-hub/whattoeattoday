import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Fade from "react-reveal/Fade";
import KakaoShareBtn from "../components/KakaoShareBtn";

const Result = ({ state }) => {

    const [loading, setLoading] = useState({
        isLoading: true
    }), [result, setResult] = useState('')
        , [foodName, setFoodName] = useState('');

    let slideIndex = 1;

    useEffect(() => {
        getFood();
    }, []);

    const getFood = async () => {
        const {
            data: {
                foods
            }
        } = await axios.get("https://whattoeattoday-5c793.firebaseio.com/.json");
        showFood(foods);
    },
        showFood = (foods) => {

            let foodTemp;
            if (state.temp < 10) { // 10도 미만이면
                foodTemp = "cold";
            } else if (state.temp >= 10 && state.temp < 24) { // 10도 이하거나 24도 미만이면
                foodTemp = "normal";
            } else { // 25도 이상이면
                foodTemp = "hot";
            }

            let resultList = foods.filter(v => {
                return v.weather.includes(state.condition) && v.mood.includes(state.mood) && v.taste === state.taste && v.temp.includes(foodTemp)
            });

            setResult(resultList);
            setLoading({ isLoading: false });
            setFoodName(resultList[0].name);
        },
        nextSlides = (n) => {
            showSlides(slideIndex += n);
        },
        showSlides = (n) => {
            const list = document.querySelector("div.result_list");
            const item = list.children;
            if (n > item.length) {
                slideIndex = 1;
            } else if (n < 1) {
                slideIndex = item.length;
            }
            for (let i = 0; i < item.length; i++) {
                item[i].style.display = "none";
                item[i].classList.remove("active");
            }
            item[slideIndex - 1].style.display = "initial";
            item[slideIndex - 1].classList.add("active");

            let currentFood = list.querySelector(".active").getAttribute("alt");
            document.querySelector("span.foodName").innerText = currentFood;

        },
        Result = ({ length, img, name }) => {
            return (
                <Fade>
                    <img src={img} alt={name} className={length === 0 ? "list_item active" : "list_item"} />
                </Fade>
            )
        }

    return (
        <div className="result_container">
            <Fade>
                {loading.isLoading ?
                    <img src="./images/loading.gif" alt="loading..." className="result_loading" /> :
                    <div className="result_wrap">
                        <div className="result_list">
                            {result.map((f, index) => {
                                return <Result key={index} length={index} name={f.name} img={f.img} />
                            })}
                        </div>
                        <h1 className="result_title"><span className="foodName">{foodName}</span> 어떠세요?</h1>
                        <div className="result_btn">
                            <button className="nextBtn btn" onClick={() => nextSlides(1)}>다른거!</button>
                            <Link to="/"><button className="homeBtn btn">홈으로</button></Link>
                            <KakaoShareBtn />
                        </div>
                    </div>
                }
            </Fade>
        </div >
    );
}

export default Result;