import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import Fade from "react-reveal/Fade";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Result = ({ state }) => {

    const [loading, setLoading] = useState({
        isLoading: true
    });

    const [result, setResult] = useState('');
    const [foodName, setFoodName] = useState('');

    useEffect(() => {
        GetFood();
    }, []);

    const GetFood = async () => {
        const {
            data: {
                foods
            }
        } = await axios.get("https://whattoeattoday-5c793.firebaseio.com/.json");
        showFood(foods);
    }

    const showFood = (foods) => {

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
    }

    const changeName = () => {
        let current = document.querySelector("div.slick-current");
        let currentFood = current.querySelector("img.list_item").getAttribute("alt");

        setFoodName(currentFood);
        console.log(currentFood);
    }

    const Result = ({ img, name }) => {
        return (
            <Fade>
                <img src={img} alt={name} className="list_item" />
            </Fade>
        )
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <div className="result_container">
            <div className="result_wrap">
                {loading.isLoading ?
                    <img src="/images/loading.gif" alt="loading..." className="result_loading" /> :
                    <Slider {...settings}>
                        {result.map((f, index) => {
                            return <Result key={index} name={f.name} img={f.img} />
                        })}
                    </Slider>
                }

            </div>
            <h1>{foodName}, 어떠세요?</h1>
        </div >
    );
}

export default Result;