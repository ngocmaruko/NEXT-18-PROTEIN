import React from "react";
import "./Team.css";
import Testimonials from "../../components/Testimonials/Testimonials";
import FAQ from "../../components/FAQ/FAQ";
import Advice from "../../components/Advice/Advice";
import Observer from "../../components/Observer/Observer";

const Team = () => {
  return (
    <section id="team">
      <div className="sponsorship-sec1">
        <div className="inner">
          <h1>協賛・導入チーム</h1>
          <h4>勉強もスポーツも頑張る子供を応援します！</h4>

            <h5>
              <span>運動も勉強も頑張るジュニア世代にオススメ！</span>
            </h5>

          <div className="sponsorship-sec1-inner">
            <div className="sponsorship-sec1-text">
              <br />
              <p>
                フットサルは、体が激しくぶつかり合うことが多いスポーツです。競り合いで倒されたりすることも日常茶飯事の為、“当たり負けしないカラダづくり”の為にも、日々の食事への配慮は欠かせません。
                <br />
                NEXT-18
                PROTEINは、プロテインなどの「タンパク質」以外にも、カラダづくりに欠かせない豊富な栄養素が含まれています。爽やかなヨーグルトテイストで、疲れきったトレーニング後でもとても飲みやすい味です。運動も勉強も頑張るジュニア世代にお勧めしたいです！
              </p>
              <br />
              <div className="bg-silver">
                <h4>リガーレヴィア葛飾 <br />
                尻屋 貴紀選手</h4>
              </div>
            </div>
            <div className="sponsorship-sec1-img">
              <img src="/img/senshu-1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="sponsorship-sec2">
        <div className="inner">
          <div className="sponsorship-sec2-top">
            <div className="sponsorship-sec2-image">
              <img src="/img/senshu-2.png" alt="" />
            </div>
            <Observer animationClass="slide-left">
              <h5>
                絶賛愛用中！ <br /> 毎日欠かさず飲んでます！
              </h5>
            </Observer>
            <div className="sponsorship-sec2-text">
              <br />
              <h4>
                プロ注目の１４歳プレイヤー <br /> 未来のフットサル日本代表
              </h4>
              <br />
              <div className="bg-silver">
                <h4>塚田 悠暉選手</h4>
              </div>
            </div>
          </div>
          <div className="sponsorship-sec2-bottom">
            <img src="/img/senshu-3.png" alt="" />
            <h4>
              第1回 JFA <br />
              U-18フットサルタレント育成普及事業 <br />
              中学2年で飛び級登録！
            </h4>
          </div>
        </div>
      </div>
      <div className="sponsorship-sec3">
        <h2 className="">
          協賛・導入チーム <span>※導入のみ</span>
        </h2>
        <h4>サッカー</h4>
        <div className="inner">
          <div className="soccer">
            <ul className="soccer-teams">
              <li>
                <img src="/img/tokyo23.png" alt="" />
              </li>
              <li>
                <img src="/img/locare.png" alt="" />
              </li>
              <li>
                <img src="/img/doccer.png" alt="" />
              </li>
              <li>FC.A.W.J</li>
              <li>TICTAC</li>
              <li>LOCARE 葛南</li>
              <li>
                <img src="/img/athlifes.png" alt="" />
              </li>
            </ul>
          </div>
        </div>
        <h4>フットサル</h4>
        <div className="inner">
          <div className="futsal">
            <ul className="futsal-teams">
              <li>
                <img src="/img/ligarevia.png" alt="" />
              </li>
              <li>
                <img src="/img/ligare-tokyo.png" alt="" />
              </li>
            </ul>
          </div>
        </div>
        {/*
        <h4>バレーボール</h4>
          <div className="inner">
          <div className="volleyball">
            <p>愛工大名電 ※</p>
          </div>
        </div>
        <h4>バスケットボール</h4>
          <div className="inner">
          <div className="basketball">
            <p>國學院大學久我山高等学校 バスケットボール部</p>
          </div>
        </div>*/}
      </div>
      <Testimonials />
      <FAQ />
      <Advice />
    </section>
  );
};

export default Team;
