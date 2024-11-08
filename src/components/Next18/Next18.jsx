import React from "react";
import "./Next18.css"; // Import the CSS file for styling
import tablet from "../../assets/tablet.jpg";

const Next18 = () => {
  return (
    <section id="next18">
      <div className="inner">
        <h1>NEXT-18PROTEIN</h1>
        <h4>スクスク伸びる成長期のカラダに必要な栄養素をシッカリ配合！</h4>
        <p>
        運動も勉強も人一倍頑張るジュニア世代たちは、人一倍エネルギーと栄養が必要です。
          <br />
          そんなジュニア世代（少年・少女）たちのため「短時間で手軽においしくエネルギーと栄養が摂取できる商品」をコンセプトに開発した商品です。
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
              MTCオイル
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
          <div className="image-item">
            <p>
            ビタミンD
            </p>
            <div className="image-circle">
              <img src={tablet} alt="ビタミンD" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Next18;
