import React, { useEffect } from "react";

const KakaoShareBtn = () => {

    // const [imgUrl, setImgUrl] = useState('');

    useEffect(()=> {
        window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);
        createKakaoButton();
    }, []);

    const createKakaoButton = ({img}) => {

        if (window.Kakao.isInitialized()) {

            window.Kakao.Link.createDefaultButton({
                container: '#kakao-link-btn',
                objectType: 'feed',
                content: {
                    title: 'WHAT TO EAT TODAY? 오늘 뭐 먹지?',
                    description: '"오늘 뭐 먹지?" 하고 고민하셨죠? 이 메뉴 어때요?',
                    imageUrl:
                        img,
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
        <button id="kakao-link-btn" className="sns_btn" onClick={console.log("gg")}>
            <img src="//dev.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_small.png" alt="kakao-share-icon" />
        </button>
    );
}

export default KakaoShareBtn;