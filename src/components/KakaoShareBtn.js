import React, { useEffect } from "react";

const KakaoShareBtn = () => {

    useEffect(() => {
        window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);
    }, []);

    const createKakaoButton = () => {

        if (window.Kakao.isInitialized()) {

            window.Kakao.Link.sendCustom({
                templateId: 39266,
                templateArgs: {
                    currentFood: document.querySelector("meta[property='og\\:image']").getAttribute("content")
                }
            });

        }

    }

    return (
        <button id="kakao-link-btn" className="sns_btn" onClick={()=> createKakaoButton()}>
            <img src="//dev.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_small.png" alt="kakao-share-icon" />
        </button>
    );
}

export default KakaoShareBtn;