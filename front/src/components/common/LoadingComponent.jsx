import React, { useEffect, useState } from "react";

const LoadingComponent = (props) => {
  const text = [
    "펭글이 간식먹는 중",
    "펭글이 공부하는 중",
    "펭글이 춤추는 중",
    "펭글이 낚시하는 중",
    "펭글이 옷입는 중",
    "펭글이 책읽는 중",
    "펭글이 노래하는 중",
    "펭글이 산책하는 중",
    "펭글이 잠자는 중",
    "펭글이 양치하는 중",
  ];

  const gif = [
    require("assets/images/penguel_greeting.gif"),
    require("assets/images/penguel_rolling.gif"),
    require("assets/images/penguel_swing.gif"),
    require("assets/images/penguel_hiphop.gif"),
  ];

  const gifStyle = [
    "absolute bottom-1/3 mb-8 w-1/2 left-1/4", // greeting
    "absolute bottom-1/3 w-full -mb-16", // rolling
    "absolute bottom-1/3 -mb-0 w-1/2 left-1/4", // swing
    "absolute bottom-1/3 -mb-0 w-1/2 left-1/4" // hiphop
  ]

  const [loadingText, setLoadingText] = useState("");
  const [loadingGif, setLoadingGif] = useState("");
  const [loadingGifStyle, setLoadingGifStyle] = useState("");

  useEffect(() => {
    const gifNum = Math.floor(Math.random() * 4);
    const textNum = Math.floor(Math.random() * 10);
    setLoadingText(text[textNum]);
    setLoadingGif(gif[gifNum]);
    setLoadingGifStyle(gifStyle[gifNum]);
  }, []);

  return (
    <div
      className={`h-screen w-screen font-MaplestoryBold bg-mainBlue-200 overflow-hidden`}
    >
      <div className={loadingGifStyle} >
        <img src={loadingGif} alt="loadingGif" />
      </div>
      <div className="w-96 h-36 absolute bottom-0 left-1/2 -ml-48">
        <div className="h-5 w-5 rounded-full bg-[#8cc759] absolute border-2 border-mainWhite animate-loadingBall animation-delay-500"></div>
        <div className="h-5 w-5 rounded-full bg-[#8c6daf] absolute border-2 border-mainWhite animate-loadingBall animation-delay-400"></div>
        <div className="h-5 w-5 rounded-full bg-[#ef5d74] absolute border-2 border-mainWhite animate-loadingBall animation-delay-300"></div>
        <div className="h-5 w-5 rounded-full bg-[#f9a74b] absolute border-2 border-mainWhite animate-loadingBall animation-delay-200"></div>
        <div className="h-5 w-5 rounded-full bg-[#60beeb] absolute border-2 border-mainWhite animate-loadingBall animation-delay-100"></div>
        <div className="h-5 w-5 rounded-full bg-[#fbef5a] absolute border-2 border-mainWhite animate-loadingBall animation-delay-none"></div>
        <div className="absolute w-full top-1/3 text-xl ">
          <span className="">{loadingText}</span>
          <div className="relative inline-block">
            <span className="overflow-x-hidden whitespace-nowrap">
              &nbsp;. . .
            </span>
            <span className="absolute bg-mainBlue-200 top-0 left-0 w-full h-full animate-typing"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

LoadingComponent.propTypes = {};

export default LoadingComponent;
