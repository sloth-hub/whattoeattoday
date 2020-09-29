import React, { useEffect, useState } from "react";
import axios from "axios";

const Result = ({ state }) => {

    const [loading, setLoading] = useState({
        isLoading: true
    });
    
    const [result, setResult] = useState('');

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

    const Result = ({ img, name }) => {
        return (
            <li className="list_item">
                <img src={img} alt={name} />
            </li>
        )
    }

    return (
        <div className="result_container">
            {loading.isLoading ?
                <img src="/images/loading.gif" alt="loading..." className="result_loading" /> :
                <ul>
                    {result.map((f, index) => {
                        return <Result key={index} name={f.name} img={f.img} />
                    })}
                </ul>
            }
        </div >
    );
}

export default Result;