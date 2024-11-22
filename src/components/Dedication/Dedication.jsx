import React from "react";
import "./Dedication.css";
import downarrow from '../../assets/down-arrow.png'

const Dedication = () => {
  const images = [
    { src: "https://placehold.jp/150x150.png", label: "運動前" },
    { src: "https://placehold.jp/150x150.png", label: "運動中" },
  ];

  return (
    <section id="dedication">
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
          <h4>
            少ない量でもトレーニング前やトレーニング中に飲むことで <br />
            パフォーマンスやカラダづくりの向上に繋がります。
          </h4>
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
          <div className="junior-digestion">
            <h2>成人と比べ・・・ <br />
              ジュニア世代は消化機能が弱い！</h2>
              <div class="arrow-down"><img src={downarrow} alt="" /></div>
              <h4>だから！</h4>
              <h2>消化吸収が良いプロテインを
              お勧めします。</h2>
              <img src="https://placehold.jp/960x150.png" alt="" />
          </div>
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
            <h4>② 不足しがちな成長期のエネルギーを補う <span>MTCオイル</span></h4>
            <p>
              成長期の子供は、発育のための大量のエネルギーが必要なのに、消化・吸収の能力が未発達です。そのため、エネルギー価の高い油脂が大事です。MCT（中鎖脂肪酸）オイルは、「一般的な油脂に比べ消化・吸収が早く、エネルギーになりやすい」特長を持ちながら、
              カラダに蓄積されにくいという性質もあることから、スポーツを頑張る子供たちにも最適なエネルギー源として注目が集まる成分です。
            </p>
          </div>
          <div className="round-shape"></div>
        </div>
      </div>
      <div className="sec5">
        <div className="calcium-magnesium">
          <div className="inner">
            <div className="calcium-magnesium text">
              <h4>③ 理想的なカルシウム＆マグネシウム</h4>
              <p>
                骨のためにはカルシウムさえ摂っていれば大丈夫…ではありません。
                実はカルシウムと一緒にマグネシウムもバランスよく摂取しなくてはどんなにカルシウムだけを摂っても骨が強くなるどころか逆効果。
                学術的に推奨されているのはカルシウム2～3に対して、マグネシウム1のバランスでの摂取です。NEXT-18
                プロテインは、この２：１の黄金割合で配合されているので、効率的にカルシウムを補給できるシステムを構築しています。
              </p>
            </div>

            <div className="calcium-magnesium img">
              <img src="" alt="calcium image" />
            </div>
          </div>
        </div>
        <div className="calcium">
          <div className="inner">
            <div className="calcium text">
              <h4>成長期に必要なカルシウム量 700mg~1,000mgが必要です！</h4>
              <p>
                カルシウムは骨となる以外にも、筋肉を働かせる役割も持っています。
                カルシウムに拮抗して働くマグネシウムは、筋肉を緩める作用を持っています。 カルマグバランスが崩れると筋肉がうまくバランスを取ることができずに、痙攣や脚の攣り（つり）が起こりやすくなります。
              </p>
            </div>
            <div className="calcium img">
              <img src="" alt="calcium image" />
            </div>
          </div>
        </div>
        <div className="vitamind">
          <div className="inner">
            <div className="vitamind text">
              <h4>ビタミンD</h4>
              <p>
                ビタミンDは、カルシウムの吸収を助ける大切なビタミンの一つです。
                日光によっても生体内でビタミンＤを生成することができますが、
                小魚やきのこ類などの摂取不足によってビタミンＤが不足がちです。
                屋外での遊びやスポーツをすることで成長期の骨格作りをサポートします。
              </p>
            </div>
            <div className="vitamind img">
              <img src="" alt="calcium image" />
            </div>
          </div>
        </div>
      </div>
      <div className="sec6">
        <div className="inner">
          <div className="recommended-for-kids">
            <h2>こんなジュニア世代にお勧めです！</h2>
            <p>
              ・スポーツに取り組んでいる子供たちに <br />
              ・勉強を頑張っている子供たちに <br />
              ・偏食、または食が細く、栄養バランスが不安なお子様に <br />
              ・スポーツと塾で忙しく食事をまともに取れないお子様に <br />
              ・ 一般的なお子様
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dedication;
