import React from "react";
import "./Hero.css"; // Import the CSS file for the Hero component

const Hero = () => {
  return (
    <div className="hero" style={{background:'url("/img/mv.webp") no-repeat center/cover'}}>
      <div className="mv-item">
        <figure className="mv-item__text-top">
          <img src="/img/p_mv_item_01.png" alt="栄養機能食品" />
        </figure>
        <h1 className="mv-item__logo">
          <img src="/img/p-mv-logo.png" alt="NEXT-18 PROTEIN" />
        </h1>
        <figure className="mv-item__text-bottom">
          <img
            src="/img/p_mv_item_02.png"
            alt="当たり負けしない！ 強いカラダづくり！"
          />
        </figure>
      </div>
    </div>
  );
};

export default Hero;
