import React from "react";
import "./Safety.css";

const Safety = () => {
  return (
    <section id="safety">
      <div className="sec7">
        <div className="safety-security">
          <div className="inner">
            <div className="safety-security text">
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
            <div className="gmp-certified text">
              <h5>国内のGMP認定工場</h5>
              <p>
                NEXT-18プロテインは大切なお子様が安心してご愛用頂けるよう、原料の選定から製造まで品質と安全性を徹底管理しています。
              </p>
            </div>
            <div className="gmp-certified img">
              <img src="" alt="calcium image" />
            </div>
          </div>
        </div>
        <div className="anti-doping">
          <div className="inner">
            <div className="anti-doping text">
              <h5>アンチドーピングアクション</h5>
              <p>
                WADA（世界アンチ・ドーピング機構）の規定するドーピング禁止リストなどをもとに、サプリメント等に混入する可能性の高いドーピング禁止物質をドーピングの専門家とともに選定しています。NEXT-18
                PROTEINは分析済みを示すマーク「Anti Doping
                Action」が付与されています。
              </p>
            </div>
            <div className="vitamind img">
              <img src="" alt="calcium image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Safety;
