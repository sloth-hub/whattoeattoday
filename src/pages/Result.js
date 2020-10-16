import React, { useEffect, useState } from "react";
import axios from "axios";
import Fade from "react-reveal/Fade";

const Result = ({ state }) => {

    const [loading, setLoading] = useState({
        isLoading: true
    }), [result, setResult] = useState(''),
        [foodName, setFoodName] = useState('');
    
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
    }, showFood = (foods) => {

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

    }, nextSlides = (n) => {

        showSlides(slideIndex += n);

    }, showSlides = (n) => {
        const list = document.querySelector("div.result_list");
        const item = list.children;
        console.log(item);
        if (n > item.length) {
            slideIndex = 1;
        } else if (n < 1) {
            slideIndex = item.length;
        }
        for (let i = 0; i < item.length; i++) {
            item[i].style.display = "none";
        }
        item[slideIndex - 1].style.display = "initial";

        //    let currentFood = list.firstElementChild.getAttribute("alt");
        //    setFoodName(currentFood);
        //     console.log(currentFood);

    }, Result = ({ img, name }) => {
        return (
            <img src={img} alt={name} className="list_item" />
        )
    }

    return (
        <div className="result_container">
            <Fade>
                {loading.isLoading ?
                    <img src="/images/loading.gif" alt="loading..." className="result_loading" /> :
                    <div className="result_wrap">
                        <div className="result_list">
                            {result.map((f, index) => {
                                return <Result key={index} name={f.name} img={f.img} />
                            })}
                        </div>
                        <h1 className="result_title"><span>{foodName}</span> 어떠세요?</h1>
                        <button className="btn" onClick={() => nextSlides(1)}>다른거!</button>
                    </div>
                }
            </Fade>
        </div >
    );
}

export default Result;