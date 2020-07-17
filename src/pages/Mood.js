import React, { useEffect } from "react";

const Mood = () => {

    return (
        <div>
            <h1>당신의 오늘 기분은 어떤가요?</h1>
            <select>
                <option value="good">좋음</option>
                <option value="happy">행복함</option>
                <option value="melancholy">우울함</option>
                <option value="sad">슬픔</option>
                <option value="angry">화남</option>
            </select>
        </div>
    );
}

export default Mood;