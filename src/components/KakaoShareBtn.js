import React, { useEffect } from "react";

const KakaoShareBtn = () => {

    const createKakaoButton = () => {

        window.Kakao.init("3e3386155ff10f2ce4483d3a453c928e");
        
        if (window.Kakao.isInitialized()) {
            window.Kakao.Link.createDefaultButton({
                container: '#kakao-link-btn',
                objectType: 'feed',
                content: {
                    title: '오늘 뭐 먹지?',
                    description: '"오늘 뭐 먹지?" 하고 고민하셨죠? 이 메뉴 어때요?',
                    imageUrl:
                        'https://cdn.pixabay.com/photo/2018/06/04/13/36/ribs-3453216_960_720.jpg',
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

    return (
        <button id="kakao-link-btn" onClick={() => createKakaoButton()}>
            <img src="//dev.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_small.png" alt="kakao-share-icon" />
        </button>
    );
}

export default KakaoShareBtn;