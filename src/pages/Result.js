import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";
import KakaoShareBtn from "../components/KakaoShareBtn";
import FacebookHelmet from "../components/FacebookHelmet";
import { database } from "../fbase";

const Result = ({ weatherObj }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [result, setResult] = useState("");
    const [foodName, setFoodName] = useState("");
    const [foodImgUrl, setFoodImgUrl] = useState("");

    const location = useLocation();
    const history = useHistory();

    let slideIndex = 1;

    useEffect(() => {
        if (!location.state) {
            history.push("/");
        } else {
            getFood();
        }
    }, [history, location.state]);

    const getFood = () => {
        database.ref("foods").once("value").then((data) => {
            const foods = Object.values(data.val());
            showFood(foods);
        });
    }

    const showFood = (foods) => {

        let foodTemp;
        if (weatherObj.temp < 10) { // 10도 미만이면
            foodTemp = "cold";
        } else if (weatherObj.temp >= 10 && weatherObj.temp < 24) { // 10도 이하거나 24도 미만이면
            foodTemp = "normal";
        } else { // 25도 이상이면
            foodTemp = "hot";
        }

        let foodList = foods.filter(v => {
            return v.weather.includes(weatherObj.condition) && v.mood.includes(location.state.mood) && v.temp.includes(foodTemp) && v.taste.includes(location.state.taste);
        });

        let resultList = foodList.sort(() => {
            return .5 - Math.random();
        });

        setResult(resultList);
        setIsLoading(false);
        setFoodName(resultList[0].name);
        setFoodImgUrl(resultList[0].img);
    }

    const nextSlides = () => {
        const item = document.querySelectorAll(".result_list .list_item");
        item.forEach((v) => {
            v.style.display = "none";
            v.classList.remove("active");
        });
        slideIndex++;
        if (slideIndex > item.length) {
            slideIndex = 1;
        }
        item[slideIndex - 1].style.display = "block";
        item[slideIndex - 1].classList.add("active");

        let currentFood = document.querySelector("img.active");
        document.querySelector("span.foodName").innerText = currentFood.alt;
        document.querySelector("meta[property='og\\:image']").setAttribute("content", currentFood.src);
        document.querySelector("meta[property='og\\:description']").setAttribute("content", `"오늘 뭐 먹지?" 하고 고민하셨죠? ${currentFood.alt} 어떠세요?`);
    }

    const facebookShare = () => {
        window.open(`https://www.facebook.com/sharer.php?u=${encodeURIComponent(window.location.href)}`);
    }

    const twitterShare = () => {
        let dsc = document.querySelector("meta[property='og\\:description']").getAttribute("content");
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(dsc)}&url=${encodeURIComponent(window.location.href)}`);
    }

    return (
        <div className="result_container">

            {isLoading ?
                <img src="./images/loading.gif" alt="loading..." className="result_loading" /> :
                <div className="result_wrap">
                    <div className="result_imgwrap">
                        <h1 className="result_title">
                            <span className="foodName">{foodName}</span>어떠세요?
                        </h1>
                        <div className="result_list">
                            {result.map((f, index) => {
                                return (
                                    <img src={f.img} alt={f.name} className={index === 0 ? "list_item active" : "list_item"} />
                                );
                            })}
                        </div>
                    </div>
                    <div className="result_btnwrap">
                        <div className="btn_wrap btn">
                            <button className="btn" onClick={() => nextSlides()}>NOPE!</button>
                            <button className="btn" onClick={() => { history.push("/"); }}>HOME</button>
                        </div>
                        <div className="share_text">
                            <p>결과를 공유해보세요!</p>
                        </div>
                        <div className="result_share">
                            <KakaoShareBtn />
                            <button id="facebook-link-icon" className="sns_btn fb-share-button" onClick={() => facebookShare()}>
                                <img src={process.env.PUBLIC_URL + "/images/facebook-icon.png"} alt="facebook-share-icon" />
                            </button>
                            <FacebookHelmet img={foodImgUrl} menu={foodName} />
                            <button id="twitter-link-icon" className="sns_btn" onClick={() => twitterShare()}>
                                <img src={process.env.PUBLIC_URL + "/images/twitter-icon.png"} alt="facebook-share-icon" />
                            </button>
                        </div>
                    </div>
                </div>
            }

        </div >
    );
}

export default Result;