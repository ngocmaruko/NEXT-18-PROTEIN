import React from "react";
import "./Safety.css";

const Safety = () => {
  return (
    <section id="safety" style={{ background: 'url("/img/safety_bg.jpg") no-repeat center/cover' }}>
        <div className="safety-security">
          <div className="inner">
            <div className="safety-security-text">
              <h2>安心・安全</h2>
              <h5>
                NEXT-18 PROTEINは、安全・安心に配慮した原料選定と <br />
                国内のGMP認定工場で品質管理を徹底して行っております。
              </h5>
            </div>
          </div>
        </div>
        <div className="gmp-certified">
          <div className="inner">
            <div className="gmp-certified-text text right">
              <h2>国内のGMP認定工場</h2>
              <p>
                NEXT-18プロテインは大切なお子様が安心してご愛用頂けるよう、原料の選定から製造まで品質と安全性を徹底管理しています。
              </p>
            </div>
            <div className="gmp-certified-img round-shape left">
              <img src="/img/gmp.png" alt="calcium image" />
            </div>
          </div>
        </div>
        <div className="anti-doping">
          <div className="inner">
            <div className="anti-doping-text text left">
              <h2>アンチドーピングアクション</h2>
              <p>
              WADA（世界アンチ・ドーピング機構）の規定するドーピング禁止リストなどをもとに、サプリメント等に混入する可能性の高いドーピング禁止物質を第三者機関にて試験分析をしております。<br />
              NEXT-18 PROTEINはアスリートの方でも安心してお飲み頂くことができます。
              </p>
            </div>
            <div className="anti-doping-img round-shape right">
              <img src="/img/anti.jpg" alt="calcium image" />
            </div>
          </div>
        </div>
    </section>
  );
};

export default Safety;
