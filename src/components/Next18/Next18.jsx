import React from "react";
import "./Next18.css";
import { assets } from "../../assets/assets";

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
              <img src={assets.tablet} alt="WPHプロテイン" />
            </div>
          </div>
          <div className="image-item">
            <p>MTCオイル</p>
            <div className="image-circle">
              <img src={assets.tablet} alt="MTCオイル" />
            </div>
          </div>
          <div className="image-item">
            <p>
              11種の <br /> ビタミン
            </p>
            <div className="image-circle">
              <img src={assets.tablet} alt="11種のビタミン" />
            </div>
          </div>
          <div className="image-item">
            <p>
              カルシウム <br /> マグネシウム
            </p>
            <div className="image-circle">
              <img src={assets.tablet} alt="カルシウムマグネシウム" />
            </div>
          </div>
          <div className="image-item">
            <p>ビタミンD</p>
            <div className="image-circle">
              <img src={assets.tablet} alt="ビタミンD" />
            </div>
          </div>
        </div>
      </div>
      <div className="nutrition-compliant">
        <div className="inner">
          <h2>NEXT-18PROTEIN <span>は</span></h2>
          <h4>厚生労働省が定める基準を満たした</h4>
          <h2>栄養機能食品 <span>です</span></h2>
          <div className="compliant1">
            <div className="calcium">
              <h4>カルシウム</h4>
              <p>
                骨や歯の成長をサポートし、筋肉の動きをサポートします。カルシウムは、成長期に骨の中に最も多く貯めることができます。
              </p>
            </div>
            <div className="magnesium">
              <h4>マグネシウム</h4>
              <p>
                マグネシウムは、多くの体内酵素の正常な働きとエネルギー産生を助けるとともに、血液循環を正常に保つのに必要な栄養素です。
              </p>
            </div>
          </div>
          <div className="compliant2">
            <h4>ビタミンD</h4>
            <p>
              発育や発達に影響する、骨を強くしたり、筋肉をつくるのに必要な要素です。日光を浴びることでも体内で生成できます。
            </p>
          </div>
          <div className="trusted-quality">
            <div className="trusted-quality-text">
              <h5>
                NEXT-18PROTEINは、
                <br />
                成長期のお子様に安心して摂取できるよう、第三者機関で成分を分析し、パッケージに栄養成分を表記しています。
              </h5>
              <p>カルシウム 540mg / マグネシウム 258mg /ビタミンD 3.6μg</p>
            </div>
            <div className="trusted-quality-img">
              <img src={assets.tablet} alt="" />
              <p>検査成績書</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Next18;
