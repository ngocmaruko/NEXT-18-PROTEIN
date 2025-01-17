import {React} from "react";
import "./Next18.css";
import Observer from "../Observer/Observer";

const Next18 = () => {

  const mvBackgroundStyle = {
    background: 'url(/img/next18_mv.png) no-repeat bottom/cover',
  };

  const compliantBackgroundStyle = {
    background: 'url(/img/compliant_bg.png) no-repeat center/cover',
  };

  const calciumBeforeStyle = {
    position: 'absolute',
    content: "''",
    background: 'url(/img/ca.png) no-repeat center/contain',
    width: '100px',
    height: '100px',
    top: '-50px',
    left: '0px',
  };

  const magnesiumBeforeStyle = {
    position: 'absolute',
    content: "''",
    background: 'url(/img/mg.png) no-repeat center/contain',
    width: '100px',
    height: '100px',
    top: '-50px',
    left: '0px',
  };

  const vitaminDBeforeStyle = {
    position: 'absolute',
    content: "''",
    background: 'url(/img/vd.png) no-repeat center/contain',
    width: '100px',
    height: '100px',
    top: '-50px',
    left: '0px',
  };

  return (
    <>
    <Observer addDelay={true} />

    <section id="next18">
      <div className="next18__mv" style={mvBackgroundStyle}>
        <div className="next18__mv-content">
          <h1 data--scaled>
            <img src="/img/next18_mv_logo.png" alt="NEXT-18 PROTEIN Logo" />
          </h1>
          <h4 data--fadein>
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
        <div className="image-grid" data--fadein>
          <div className="image-grid__item">
            <p>
              WPH <br /> プロテイン
            </p>
            <div className="image-grid__circle">
              <img src='/img/wph-protein.jpg' alt="WPHプロテイン" />
            </div>
          </div>
          <div className="image-grid__item">
            <p>MTCオイル</p>
            <div className="image-grid__circle">
              <img src='/img/mct-oil.jpg' alt="MTCオイル" />
            </div>
          </div>
          <div className="image-grid__item">
            <p>
              11種の <br /> ビタミン
            </p>
            <div className="image-grid__circle">
              <img src='/img/11vtm.jpg' alt="11種のビタミン" />
            </div>
          </div>
          <div className="image-grid__item">
            <p>
              カルシウム <br /> マグネシウム
            </p>
            <div className="image-grid__circle">
              <img src='/img/ca-mg.jpg' alt="カルシウムマグネシウム" />
            </div>
          </div>
          <div className="image-grid__item">
            <p>ビタミンD</p>
            <div className="image-grid__circle">
              <img src='/img/vitamind.jpg' alt="ビタミンD" />
            </div>
          </div>
        </div>
      </div>
      <div className="next18__nutrition">
        <div className="inner">
          <h2>
            NEXT-18PROTEIN <span>は</span>
          </h2>
          <h5>
            厚生労働省が定める基準を満たした <br />
            <span className="accent">栄養機能食品</span>です
          </h5>

          <div className="next18__nutrition-compliant" style={{ display: 'flex', gap: '30px', marginTop: '30px' }} data--fadein>
            <div className="next18__nutrition-compliant-cmv calcium" style={compliantBackgroundStyle}>
              <h4>カルシウム</h4>
              <p>
                骨や歯の成長をサポートし、筋肉の動きをサポートします。
                カルシウムは、成長期に骨の中に最も多く貯めることができます。
              </p>
              <div style={calciumBeforeStyle}></div>
            </div>
            <div className="next18__nutrition-compliant-cmv magnesium" style={compliantBackgroundStyle}>
              <h4>マグネシウム</h4>
              <p>
                マグネシウムは、多くの体内酵素の正常な働きとエネルギー産生を助けるとともに、血液循環を正常に保つのに必要な栄養素です。
              </p>
              <div style={magnesiumBeforeStyle}></div>
            </div>
          </div>

          <div className="next18__nutrition-compliant-cmv vitamin-d" style={compliantBackgroundStyle} data--fadein>
            <h4>ビタミンD</h4>
            <p>
              発育や発達に影響する、骨を強くしたり、筋肉をつくるのに必要な要素です。
              <br />
              日光を浴びることでも体内で生成できます。
            </p>
            <div style={vitaminDBeforeStyle}></div>
          </div>

          <div className="next18__nutrition-compliant-trusted-quality" data--fadein>
            <div className="next18__nutrition-compliant-trusted-quality--text">
              <h5>
                NEXT-18 PROTEINは、<br />
                成長期のお子様に安心して摂取できるよう、<br />
                <span className="accent">第三者機関で成分を分析</span>し、<br />
                パッケージに栄養成分を表記しています。
              </h5>
              <p>
                カルシウム 540mg / マグネシウム 258mg / <br />
                ビタミンD 3.6μg
              </p>
            </div>
            <div className="next18__nutrition-compliant-trusted-quality--img">
              <img src="/img/seiseki.png" alt="検査成績書" />
              <p>検査成績書</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Next18;
