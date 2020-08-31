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
        } else if (state.temp >= 10 && state.temp < 23) { // 10도 이하거나 23도 미만이면
            foodTemp = "normal";
        } else { // 23도 이상이면
            foodTemp = "hot";
        }

        let resultList = foods.filter(v => {
            return v.weather.includes(state.condition) && v.mood.includes(state.mood) && v.taste === state.taste && v.temp === foodTemp
        });

        setResult(resultList);
        setLoading({ isLoading: false });
    }

    const Result = ({ img, name }) => {
        return (
            <li className="foodList">
                <img src={img} alt={name} />
            </li>
        )
    }

    return (
        <div>
            {loading.isLoading ?
                <p>Loading..</p> :
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