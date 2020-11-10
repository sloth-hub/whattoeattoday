import React, { useEffect } from "react";

const KakaoShareBtn = () => {

    useEffect(() => {
        window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);
        // document.querySelector("#kakao-link-btn").addEventListener("click", createKakaoButton);
    }, []);

    const createKakaoButton = () => {

        if (window.Kakao.isInitialized()) {

            window.Kakao.Link.sendScrap({
                requestUrl: "https://sloth-hub.github.io/whattoeattoday/ask"
            });

        }

    }, changeImgUrl = () => {

    }

    return (
        <button id="kakao-link-btn" className="sns_btn" onClick={()=> createKakaoButton()}>
            <img src="//dev.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_small.png" alt="kakao-share-icon" />
        </button>
    );
}

export default KakaoShareBtn;