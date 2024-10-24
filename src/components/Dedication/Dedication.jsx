import React from "react";
import "./Dedication.css";

const Dedication = () => {
  const images = [
    { src: "https://via.placeholder.com/150", label: "運動前" },
    { src: "https://via.placeholder.com/150", label: "運動中" },
  ];

  return (
    <section className="dedication">
      <div className="sec1">
        <div className="inner">
          <h2>このプロテインの摂取タイミング</h2>
          <div className="sec1-img">
            {images.map((image, index) => (
              <div key={index} className="image-wrapper">
                <img
                  src={image.src}
                  alt={`Image ${index + 1}`}
                  className="round-image"
                />
                <p className="image-label">{image.label}</p>
              </div>
            ))}
          </div>
          <h5>
            少ない量でもトレーニング前やトレーニング中に飲むことで <br />
            パフォーマンスやカラダづくりの向上に繋がります。
          </h5>
        </div>
      </div>
      <div className="sec2">
        <div className="inner">
          <div className="triangle"></div>
          <div className="attention-text">
            <h2>ATTENTION</h2>
            <h4>
              ムキムキになりたい！ダイエットしたい！
              <br />
              向けのプロテインではありません
            </h4>
            <h4>子供の成長を支えるプロテインサプリメントです</h4>
          </div>
        </div>
      </div>
      <div className="sec3">
        <div className="inner">
          <div className="growth-nutrients">
            <h4>スクスク伸びる成長期のカラダに必要な</h4>
            <h2>栄養素をシッカリ配合！</h2>
            <div className="wph-protein">
              <h4>① 消化吸収が良いWPHプロテイン</h4>
              <p>
                正式名称はWhey Protein
                Hydrolysate（加水分離乳清タンパク質）で、 ホエイプロテインを加水分解して細かく（低分子化）したもので、体内への吸収が早いのが特徴です。
                だから、少ない量でもトレーニング前やトレーニング中に飲むことでパフォーマンスやカラダづくりの向上に繋がります。
              </p>
              <div className="graph">
                <img
                  src="https://hongo3.co.jp/products/domestic/img/next_18protein/sec03_img4.png" // Example graph image
                  alt="WPH vs WPC Absorption Rate"
                  className="graph-image"
                />
                <p>通常のプロテイン（WPC）との比較</p>
              </div>

              <h4>WPHは筋肥大に有利なプロテイン</h4>
              <p>
                グラフはWPHとWPCの吸収速度を比較したものになります。
                WPCは45～60分で血中のBCAA濃度がピークを迎えているのに対し、WPHは約半分の30分でピークを迎えています。
                そして吸収が速い分、血中のBCAA濃度が非常に高くなっているのが分かります。
                BCAA（特にロイシン）は筋肉の合成能力を高める大事なアミノ酸です。
                血中のBCAA濃度を高くできる＝筋肉合成が高い、ということなので、WPHはWPCに比べて、筋肥大に有利なプロテインだといえます。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sec4">
        <div className="inner">
          <div className="mct-oil">
            <h4>② 不足しがちな成長期のエネルギーを補うMTCオイル</h4>
            <p>
              成長期の子供は、発育のための大量のエネルギーが必要なのに、消化・吸収の能力が未発達です。そのため、エネルギー価の高い油脂が大事です。MCT（中鎖脂肪酸）オイルは、「一般的な油脂に比べ消化・吸収が早く、エネルギーになりやすい」特長を持ちながら、
              カラダに蓄積されにくいという性質もあることから、スポーツを頑張る子供たちにも最適なエネルギー源として注目が集まる成分です。
            </p>
          </div>
          <div className="round-shape"></div>
        </div>
      </div>
      <div className="section5">
        <div className="inner">
            {/* First Paragraph */}
            <div className="paragraph">
                <div className="text centered">This is the centered text for the first paragraph.</div>
                <div className="image round-image right-image" style={{ backgroundImage: 'url(your-image-url-here)' }} />
            </div>

            {/* Second Paragraph */}
            <div className="paragraph">
                <div className="text right">This is the right-aligned text for the second paragraph.</div>
                <div className="image round-image left-image" style={{ backgroundImage: 'url(your-image-url-here)' }} />
            </div>

            {/* Third Paragraph */}
            <div className="paragraph">
                <div className="text left">This is the left-aligned text for the third paragraph.</div>
                <div className="image round-image right-image" style={{ backgroundImage: 'url(your-image-url-here)' }} />
            </div>
        </div>
        </div>
    </section>
  );
};

export default Dedication;
