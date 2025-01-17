import React from "react";
import "./FAQ.css";
import Observer from "../Observer/Observer";

const faqData = [
  {
    question: "何歳から飲めますか？",
    answer:
      "NEXT-18 PROTEINは栄養機能食品ですので、年齢を気にせずご飲用頂けます。",
  },
  {
    question: "おすすめの摂取タイミングはありますか？",
    answer:
      "スポーツをするお子様は、練習後の摂取をおすすめします。 また、朝食の置き換えや補助食としてもご活用ください。",
  },
  {
    question: "摂取量の上限はありますか？",
    answer:
      "1日スプーン3杯（約20g）を目安にお召し上がりください。 栄養機能食品として摂取目安量はお守りください。",
  },
  {
    question: "アレルギー物質は含まれていますか？",
    answer:
      "原料の一部に乳成分・卵・大豆・バナナ・やまいも・りんご・キウイフルーツ・オレンジ・ゴマ・カシューナッツを含んでいます。該当する食物アレルギーのある方は、飲用をお控えください。",
  },
  {
    question: "栄養機能食品とは何ですか？",
    answer:
      "栄養機能食品とは、特定の栄養成分の一日当たりの摂取目安量に含まれる当該栄養成分量が、定められた上・下限値の範囲内にあることで、栄養成分の機能を表示できる一般食品のことです。",
  },
  {
    question: "合成甘味料は使っていますか？",
    answer:
      "NEXT-18 PROTEINで使用している甘味料「ステビア」は、植物由来の天然の甘味料です。",
  },
  {
    question: "紅麹は入っていますか？",
    answer: "NEXT-18 PROTEINには一切使用しておりません。",
  },
  {
    question: "マッチョになれますか？",
    answer:
      "NEXT-18 PROTEINは、大人向けのプロテインとは違い、筋肉肥大のためのプロテインではございません。パフォーマンスや成長期のカラダづくりの向上に向いたプロテインです。",
  },
  {
    question: "ダイエットに使えますか？",
    answer:
      "NEXT-18 PROTEINはダイエットには向きません。成長を助けるプロテインになります。",
  },
];

const faqsBackground = {
  background: `url('/img/faq_bg.jpg') no-repeat center/cover`
};

const FAQ = () => (
  <>
  <Observer />
  <div className="faqs" style={faqsBackground}>
    <div className="inner">
      <h2 data--fadein>よくあるご質問</h2>
      {faqData.map((faq, index) => (
        <FAQItem key={index} faq={faq} />
      ))}
    </div>
  </div>
  </>
);

const FAQItem = ({ faq }) => {
  return (
    <div className="faq" data--fadein>
      <h5>{faq.question}</h5>
      <p>{faq.answer}</p>
    </div>
  );
};

export default FAQ;
