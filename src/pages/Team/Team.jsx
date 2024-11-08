import React from "react";
import "./Team.css";
import tablet from "../../assets/tablet.jpg";
import Testimonials from "../../components/Testimonials/Testimonials";
import FAQ from "../../components/FAQ/FAQ";
import Advice from "../../components/Advice/Advice";

const Team = () => {
  return (
    <section id="team">
      <div className="sponsorship-sec1">
        <div className="inner">
          <h1>協賛・導入チーム</h1>
          <h4>勉強もスポーツも頑張る子供を応援します！</h4>
          <div className="sponsorship-sec1-inner">
            <div className="sponsorship-sec1-text">
              <h5>運動も勉強も頑張る <br /> ジュニア世代にオススメ！</h5>
              <br />
              <p>
                フットサルは、体が激しくぶつかり合うことが多いスポーツです。競り合いで倒されたりすることも日常茶飯事の為、“当たり負けしないカラダづくり”の為にも、日々の食事への配慮は欠かせません。
                <br />
                NEXT-18 PROTEINは、プロテインなどの「タンパク質」以外にも、カラダづくりに欠かせない豊富な栄養素が含まれています。爽やかなヨーグルトテイストで、疲れきったトレーニング後でもとても飲みやすい味です。運動も勉強も頑張るジュニア世代にお勧めしたいです！
              </p>
              <br />
              <span>
                <h5>
                  リガーレヴィア葛飾 <br />
                  尻屋 貴紀選手
                </h5>
              </span>
            </div>
            <div className="sponsorship-sec1-img">
              <img src={tablet} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="sponsorship-sec2">
        <div className="inner">
          <div className="sponsorship-part">
            <div className="sponsorship-part-image">
              <img src={tablet} alt="" />
            </div>
            <div className="sponsorship-part-text">
              <h5>
                絶賛愛用中！ <br /> 毎日欠かさず飲んでます！
              </h5>{" "}
              <br />
              <h5>
                プロ注目の１４歳プレイヤー <br /> 未来のフットサル日本代表
              </h5>{" "}
              <br />
              <h5>塚田 悠暉選手</h5>
            </div>
          </div>
          <div className="sponsorship-part reverse">
            <div className="sponsorship-part-image">
              <img src={tablet} alt="" />
            </div>
            <div className="sponsorship-part-text">
              <h5>
                第1回 JFA <br />
                U-18フットサルタレント育成普及事業 <br />
                中学2年で飛び級登録！
              </h5>
            </div>
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
              <li>東京23FC</li>
              <li>Balompie</li>
            </ul>
            <ul className="soccer-teams">
              <li>FC.A.W.J</li>
              <li>TICTAC</li>
            </ul>
            <ul className="soccer-teams">
              <li>Do doccer club</li>
              <li>LOCARE 葛南</li>
            </ul>
          </div>
        </div>
        <h4>フットサル</h4>
          <div className="inner">
          <div className="futsal">
            <ul className="futsal-teams">
              <li>リガーレヴィア葛飾</li>
            </ul>
            <ul className="futsal-teams">
              <li>リガーレTokyp NEXT</li>
            </ul>
            <ul className="futsal-teams">
              <li>FC.A.W.J</li>
            </ul>
          </div>
        </div>
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
        </div>
      </div>
      <Testimonials />
      <FAQ />
      <Advice />
    </section>
  );
};

export default Team;
