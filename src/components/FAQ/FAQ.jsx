import React from "react";
import "./FAQ.css";
import Observer from "../Observer/Observer";

const FAQ = () => {
  return (
    <div className="faqs">
      <div className="inner">
        <h2>よくあるご質問</h2>
        <Observer animationClass="slide-top">
          <div className="faq">
            <h5>何歳から飲めますか？</h5>
            <p>
              NEXT-18
              PROTEINは栄養機能食品ですので、年齢を気にせずご飲用頂けます。
            </p>
          </div>
        </Observer>
        <Observer animationClass="slide-top">
          <div className="faq">
            <h5>おすすめの摂取タイミングはありますか？</h5>
            <p>
              スポーツをするお子様は、練習後の摂取をおすすめします。
              <br />
              また、朝食の置き換えや補助食としてもご活用ください。
            </p>
          </div>
        </Observer>
        <Observer animationClass="slide-top">
          <div className="faq">
            <h5>摂取量の上限はありますか？</h5>
            <p>
              1日スプーン3杯（約20g）を目安にお召し上がりください。
              <br />
              栄養機能食品として摂取目安量はお守りください。
            </p>
          </div>
        </Observer>
        <Observer animationClass="slide-top">
          <div className="faq">
            <h5>アレルギー物質は含まれていますか？</h5>
            <p>
              原料の一部に乳成分・卵・大豆・バナナ・やまいも・りんご・キウイフルーツ・オレンジ・ゴマ・カシューナッツを含んでいます。該当する食物アレルギーのある方は、飲用をお控えください。
            </p>
          </div>
        </Observer>
        <Observer animationClass="slide-top">
          <div className="faq">
            <h5>栄養機能食品とは何ですか？</h5>
            <p>
              栄養機能食品とは、特定の栄養成分の一日当たりの摂取目安量に含まれる当該栄養成分量が、定められた上・下限値の範囲内にあることで、栄養成分の機能を表示できる一般食品のことです。
            </p>
          </div>
        </Observer>
        <Observer animationClass="slide-top">
          <div className="faq">
            <h5>合成甘味料は使っていますか？</h5>
            <p>
              NEXT-18
              PROTEINで使用している甘味料「ステビア」は、植物由来の天然の甘味料です。
            </p>
          </div>
        </Observer>
        <Observer animationClass="slide-top">
          <div className="faq">
            <h5>紅麹は入っていますか？</h5>
            <p>NEXT-18 PROTEINには一切使用しておりません。</p>
          </div>
        </Observer>
        <Observer animationClass="slide-top">
          <div className="faq">
            <h5>マッチョになれますか？</h5>
            <p>
              NEXT-18
              PROTEINは、大人向けのプロテインとは違い、筋肉肥大のためのプロテインではございません。
              パフォーマンスや成長期のカラダづくりの向上に向いたプロテインです。
            </p>
          </div>
        </Observer>
        <Observer animationClass="slide-top">
          <div className="faq">
            <h5>ダイエットに使えますか？</h5>
            <p>
              NEXT-18
              PROTEINはダイエットには向きません。成長を助けるプロテインになります。
            </p>
          </div>
        </Observer>
      </div>
    </div>
  );
};

export default FAQ;
