import React from "react";
import "./About.css"; // Import the CSS file for styling
import tablet from "../../assets/tablet.jpg";

const About = () => {
  return (
    <section className="about-section">
      <div class="inner">
        <h1>NEXT-18PROTEIN</h1>
        <h4>スクスク伸びる成長期のカラダに必要な栄養素をシッカリ配合！</h4>
        <p>
          運動も勉強も人一倍頑張るキッズたちは、人一倍エネルギーと栄養が必要です。
          <br />
          そんなキッズたちのため「短時間で手軽においしくエネルギーと栄養が摂取できる商品」をコンセプトに開発した商品です。
        </p>

        <div className="image-grid">
          <div className="image-item">
            <p>
              WPH <br /> プロテイン
            </p>
            <div className="image-circle">
              <img src={tablet} alt="WPHプロテイン" />
            </div>
          </div>
          <div className="image-item">
            <p>
              MTC <br /> オイル
            </p>
            <div className="image-circle">
              <img src={tablet} alt="MTCオイル" />
            </div>
          </div>
          <div className="image-item">
            <p>
              11種の <br /> ビタミン
            </p>
            <div className="image-circle">
              <img src={tablet} alt="11種のビタミン" />
            </div>
          </div>
          <div className="image-item">
            <p>
              カルシウム <br /> マグネシウム
            </p>
            <div className="image-circle">
              <img src={tablet} alt="カルシウムマグネシウム" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
