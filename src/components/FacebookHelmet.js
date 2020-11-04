import React from "react";
import { Helmet } from "react-helmet";

const FacebookHelmet = ({img}) => {

    return (
        <Helmet>
            <meta property="og:type" content="website" />
            <meta property="og:title" content="WHAT TO EAT TODAY?" />
            <meta property="og:url" content="https://sloth-hub.github.io/whattoeattoday/" />
            <meta property="og:description" content='"오늘 뭐 먹지?" 하고 고민하셨죠? 이 메뉴 어때요?' />
            <meta property="og:image" content={img} />
        </Helmet>
    );

}

export default FacebookHelmet;