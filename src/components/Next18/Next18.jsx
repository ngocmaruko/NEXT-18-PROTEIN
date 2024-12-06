import React from "react";
import "./Next18.css";
import { assets } from "../../assets/assets";

const Next18 = () => {
  return (
    <section id="next18">
      <div className="next18__mv">
        <img
          className="next18__mv-img"
          src="/img/next18_mv.png"
          alt="NEXT-18 PROTEIN main visual"
        />
        <div className="next18__mv-content">
          <h1>
            <img src="/img/next18_mv_logo.png" alt="NEXT-18 PROTEIN Logo" />
          </h1>
          <h4>
            <img
              src="/img/next18_mv_text.png"
              alt="スクスク伸びる成長期のカラダに必要な栄養素をシッカリ配合！"
            />
          </h4>
        </div>
      </div>
      <div className="inner">
        <p>
          運動も勉強も人一倍頑張るジュニア世代たちは、人一倍エネルギーと栄養が必要です。
          <br />
          そんなジュニア世代（少年・少女）たちのため <br />
          「短時間で手軽においしくエネルギーと栄養が摂取できる商品」をコンセプトに開発した商品です。
        </p>

        <div className="image-grid">
          <div className="image-grid__item">
            <p>
              WPH <br /> プロテイン
            </p>
            <div className="image-grid__circle">
              <img src={assets.tablet} alt="WPHプロテイン" />
            </div>
          </div>
          <div className="image-grid__item">
            <p>MTCオイル</p>
            <div className="image-grid__circle">
              <img src={assets.tablet} alt="MTCオイル" />
            </div>
          </div>
          <div className="image-grid__item">
            <p>
              11種の <br /> ビタミン
            </p>
            <div className="image-grid__circle">
              <img src={assets.tablet} alt="11種のビタミン" />
            </div>
          </div>
          <div className="image-grid__item">
            <p>
              カルシウム <br /> マグネシウム
            </p>
            <div className="image-grid__circle">
              <img src={assets.tablet} alt="カルシウムマグネシウム" />
            </div>
          </div>
          <div className="image-grid__item">
            <p>ビタミンD</p>
            <div className="image-grid__circle">
              <img src={assets.tablet} alt="ビタミンD" />
            </div>
          </div>
        </div>
      </div>
      <div className="next18__nutrition-compliant">
        <div className="inner">
          <h2>
            NEXT-18PROTEIN <span>は</span>
          </h2>
          <h4>
            厚生労働省が定める基準を満たした <br />
            <span className="highline">栄養機能食品</span>です
          </h4>

          <div className="next18__nutrition-compliant-calcium-magnesium">
            <div className="next18__nutrition-compliant-calcium">
              <h4>カルシウム</h4>
              <p>
                骨や歯の成長をサポートし、筋肉の動きをサポートします。
                カルシウムは、成長期に骨の中に最も多く貯めることができます。
              </p>
            </div>
            <div className="next18__nutrition-compliant-magnesium">
              <h4>マグネシウム</h4>
              <p>
                マグネシウムは、多くの体内酵素の正常な働きとエネルギー産生を助けるとともに、血液循環を正常に保つのに必要な栄養素です。
              </p>
            </div>
          </div>
          <div className="next18__nutrition-compliant-vitamin-d">
            <h4>ビタミンD</h4>
            <p>
              発育や発達に影響する、骨を強くしたり、筋肉をつくるのに必要な要素です。
              <br />
              日光を浴びることでも体内で生成できます。
            </p>
          </div>

          <div className="next18__nutrition-compliant-trusted-quality">
            <div className="next18__nutrition-compliant-trusted-quality-text">
              <h5>
                NEXT-18 PROTEINは、
                <br />
                成長期のお子様に安心して摂取できるよう、
                <br />
                <span className="highline">第三者機関で成分を分析</span>し、
                <br />
                パッケージに栄養成分を表記しています。
              </h5>
              <p>
                カルシウム 540mg / マグネシウム 258mg / <br />
                ビタミンD 3.6μg
              </p>
            </div>
            <div className="next18__nutrition-compliant-trusted-quality-img">
              <img src="/img/seiseki.png" alt="検査成績書" />
              <p>検査成績書</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Next18;
