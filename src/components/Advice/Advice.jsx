import React from "react";
import "./Advice.css";
import tablet from "../../assets/tablet.jpg";

const Advice = () => {
  const adviceBackground = {
    background: `url('/img/advice_bg.jpg') no-repeat center/cover`

  }
  return (
    <div className="advice" style={adviceBackground}>
      <div className="inner">
        <h2>専門家からのアドバイス</h2>

        <div className="advice-content">
          <div className="advice-content-column">
            <div className="advice-text">
              <h5>成長期は<br />大人よりも多くの栄養素が必要</h5>
              <br />
              <p>
                日常的に運動を行っている子供は、 運動によって消費されるエネルギーや栄養素が非常に大きいため、人一倍多くのエネルギーや栄養が必要です。
                現代の子供たちの食事事情では、十分な栄養摂取ができない結果、「成長の部分」で必要とされる「エネルギー」「ミネラル」「ビタミン」が不足しがちで  あることが問題になっています。
                <br />
                トレーニングの分に加え、成長の分のエネルギーが多く必要なのです。NEXT-18
                PROTEINは、プロテインなどの「タンパク質」以外にも、身体づくりに欠かせない豊富な栄養素が含まれています。お子様には、日々の食事に加え、NEXT-18
                PROTEINを取り入れ、当たり負けしない丈夫なカラダづくりを目指したいものです。
              </p>
              <br />

            </div>
            <div className="advice-img">
              <img src="/img/chiba.png" alt="" />
                <h5>
                  管理栄養士、博士（生物環境調節学）、専門は栄養生理学
                  <br />
                  千葉 大成
                </h5>
            </div>
          </div>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Advice;
