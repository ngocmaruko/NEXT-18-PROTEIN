import React from "react";
import "./Testimonials.css";
import tablet from "../../assets/tablet.jpg";
import ScrollAnimationObserver from "../Observer/Observer";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonial">
        <h2>ご利用者のお声</h2>
        <h4>商品サポーターから喜びの声が続々！</h4>
        <div className="inner">
          <div className="testimonial-text">
          <ScrollAnimationObserver animationClass="slide-right">
            <h5>偏食の子供も続けやすい味！</h5>
            </ScrollAnimationObserver>

            <br />
            <p>
              うちの子供は牛乳は飲めない野菜も嫌いで食事の栄養バランスが心配でした。こちらの商品はたんぱく質以外にも、色んな栄養素が摂取できるのは偏食の子供にはとても助かります！
              ヨーグルトの風味も、うちの子どもにはとても合っているようで、自らすすんで飲んでくれています。
            </p>
          </div>
          <div className="testimonial-img">
            <img src='./img/target1.png' alt="" />
          </div>
        </div>
      </div>
      <div className="testimonial">
        <div className="inner">
          <div className="testimonial-text">
          <ScrollAnimationObserver animationClass="slide-right">
            <h5>食が細い子供が心配で始めました</h5>
            </ScrollAnimationObserver>
            <br />
            <p>
              学校から帰ってきて、週3日程度のクラブの練習を頑張っている我が子ですが、体もたくさん動かしているはずなのに、食が細いことが心配でした。
              もっと食べて欲しいと思い、こちらの商品を始めました。今では帰宅後の晩御飯前に美味しそうに毎日飲んでます。
            </p>
          </div>
          <div className="testimonial-img">
            <img src='./img/target2.png' alt="" />
          </div>
        </div>
      </div>
      <div className="testimonial">
        <div className="inner">
          <div className="testimonial-text">
          <ScrollAnimationObserver animationClass="slide-right">
            <h5>練習後のリカバリーのために始めました</h5>
            </ScrollAnimationObserver>
            <br />
            <p>
              朝早くから朝練習がある娘は、練習後にカラダづくりやリカバリーのためにプロテインを摂り入れています。エネルギー消費が激しいのでリカバリーがきちんとできていないと授業にも集中出来ずに支障が出てきてしまいます。短時間でエネルギーチャージが出来るので練習後にはかかせないものとなっています。
            </p>
          </div>
          <div className="testimonial-img">
            <img src='./img/target3.png' alt="" />
          </div>
        </div>
      </div>
      <div className="testimonial">
        <div className="inner">
          <div className="testimonial-text">
          <ScrollAnimationObserver animationClass="slide-right">
            <h5>親子で飲みやすいフレーバー</h5>
            </ScrollAnimationObserver>
            <br />
            <p>
              練習後にプロテインを飲んでいましたが、親子で飲めるフレーバーがなくそれぞれ別の物を用意していました。ヨーグルト味でさっぱりと飲めるので稽古内容の復習を話しながら親子で飲んでいます。
            </p>
          </div>
          <div className="testimonial-img">
            <img src='./img/target4.png' alt="" />
          </div>
        </div>
      </div>
      <div className="testimonial">
        <div className="inner">
          <div className="testimonial-text">
          <ScrollAnimationObserver animationClass="slide-right">
            <h5>忙しい子供の栄養補給に</h5>
            </ScrollAnimationObserver>
            <br />
            <p>
              スポーツと塾で忙しく、夜の食事をまともに取れない日もしばしばあります。合間の短い時間に簡単に栄養補給ができるものはないかな、と思ってこちらの商品を飲み始めてみました。水に混ぜて簡単に飲むことができるので、塾に行く前など時間のない時の栄養補給にとても助かっています。
            </p>
          </div>
          <div className="testimonial-img">
            <img src='./img/target5.png' alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
