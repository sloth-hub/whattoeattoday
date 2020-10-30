import React, { useEffect, useState } from "react";

const KakaoShareBtn = () => {

    // const [imgUrl, setImgUrl] = useState('');

    useEffect(()=> {
        window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);
        createKakaoButton();
    }, []);

    const createKakaoButton = () => {

        if (window.Kakao.isInitialized()) {

            window.Kakao.Link.createDefaultButton({
                container: '#kakao-link-btn',
                objectType: 'feed',
                content: {
                    title: '오늘 뭐 먹지?',
                    description: '"오늘 뭐 먹지?" 하고 고민하셨죠? 이 메뉴 어때요?',
                    imageUrl:
                        '',
                    link: {
                        mobileWebUrl: 'https://sloth-hub.github.io/whattoeattoday/',
                        webUrl: 'https://sloth-hub.github.io/whattoeattoday/',
                    },
                },
                buttons: [
                    {
                        title: '다른 메뉴 보기',
                        link: {
                            mobileWebUrl: "https://sloth-hub.github.io/whattoeattoday/",
                            webUrl: "https://sloth-hub.github.io/whattoeattoday/f",
                        },
                    }
                ]
            });
        }

    }
    const changeUrl = () => {
        let imgUrl = document.querySelector("img.active").src;
        console.log("hi");
    }

    return (
        <button id="kakao-link-btn" onClick={()=>changeUrl()}>
            <img src="//dev.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_small.png" alt="kakao-share-icon" />
        </button>
    );
}

export default KakaoShareBtn;