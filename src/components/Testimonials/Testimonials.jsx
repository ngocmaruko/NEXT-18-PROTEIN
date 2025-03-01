import React from "react";
import "./Testimonials.css";
import Observer from "../Observer/Observer";

const testimonialsData = [
  {
    title: "偏食の子供も続けやすい味！",
    text: "うちの子供は牛乳は飲めない野菜も嫌いで食事の栄養バランスが心配でした。こちらの商品はたんぱく質以外にも、色んな栄養素が摂取できるのは偏食の子供にはとても助かります！ヨーグルトの風味も、うちの子どもにはとても合っているようで、自らすすんで飲んでくれています。",
    img: "./img/target1.png",
  },
  {
    title: "食が細い子供が心配で始めました",
    text: "学校から帰ってきて、週3日程度のクラブの練習を頑張っている我が子ですが、体もたくさん動かしているはずなのに、食が細いことが心配でした。もっと食べて欲しいと思い、こちらの商品を始めました。今では帰宅後の晩御飯前に美味しそうに毎日飲んでます。",
    img: "./img/target2.png",
  },
  {
    title: "練習後のリカバリーのために始めました",
    text: "朝早くから朝練習がある娘は、練習後にカラダづくりやリカバリーのためにプロテインを摂り入れています。エネルギー消費が激しいのでリカバリーがきちんとできていないと授業にも集中出来ずに支障が出てきてしまいます。短時間でエネルギーチャージが出来るので練習後にはかかせないものとなっています。",
    img: "./img/target3.png",
  },
  {
    title: "親子で飲みやすいフレーバー",
    text: "練習後にプロテインを飲んでいましたが、親子で飲めるフレーバーがなくそれぞれ別の物を用意していました。ヨーグルト味でさっぱりと飲めるので稽古内容の復習を話しながら親子で飲んでいます。",
    img: "./img/target4.png",
  },
  {
    title: "忙しい子供の栄養補給に",
    text: "スポーツと塾で忙しく、夜の食事をまともに取れない日もしばしばあります。合間の短い時間に簡単に栄養補給ができるものはないかな、と思ってこちらの商品を飲み始めてみました。水に混ぜて簡単に飲むことができるので、塾に行く前など時間のない時の栄養補給にとても助かっています。",
    img: "./img/target5.png",
  },
];

const Testimonials = () => {
  return (
    <>
      <Observer />
      <div className="testimonials">
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            index={index}
            {...testimonial}
            showTitle={index === 0} // Pass this prop to the first testimonial
          />
        ))}
      </div>
    </>
  );
};

const TestimonialCard = ({ title, text, img, index, showTitle }) => {
  const h5BackgroundStyle = {
    background: `url('/img/comment_bg.png') no-repeat left/cover`,
    padding: "30px",
    marginBottom: "20px",
  };

  const backgroundStyle =
    index % 2 === 0
      ? {
          background: `url('/img/testimonials_bg-even.jpg') no-repeat center/cover`,
        }
      : {
          background: `url('/img/testimonials_bg-odd.jpg') no-repeat center/cover`,
        };

  return (
    <div className="testimonial" style={backgroundStyle}>
      {showTitle && (
        <div className="testimonial-title" data--fadein>
          <h2>ご利用者のお声</h2>
          <h4>商品サポーターから喜びの声が続々！</h4>
        </div>
      )}
      <div className="inner">
        <div className="testimonial-text"  data--fadeinright>
          <h5 style={h5BackgroundStyle}>{title}</h5>
          <p>{text}</p>
        </div>
        <div className="testimonial-img" data--fadeinleft>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
