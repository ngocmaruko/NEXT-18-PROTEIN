import React from "react";
import "./Dedication.css";

const Dedication = () => {
  return (
    <section id="dedication">
      <div className="dedication__sec1">
        <div className="inner">
          <h2>このプロテインの摂取タイミング</h2>
          <div className="dedication__sec1-img">
            <div className="image-wrapper pre_workout">
              <img src="/img/pre_workout.png" alt="" className="round-image" />
              <p className="image-label">運動前</p>
            </div>
            <div className="image-wrapper during_workout">
              <img
                src="/img/during_workout.png"
                alt=""
                className="round-image"
              />
              <p className="image-label">運動後</p>
            </div>
          </div>
          <h4>
            少ない量でもトレーニング前やトレーニング中に飲むことで <br />
            パフォーマンスやカラダづくりの向上に繋がります。
          </h4>
        </div>
      </div>
      <div className="dedication__sec2">
        <div className="inner">
          <div className="dedication__sec2-attention">
            <div className="dedication__sec2-attention--mark">
              <img src="/img/attention_mark.png" alt="" />
              <h2 className="highline">ATTENTION</h2>
            </div>
            <h4>
              ムキムキになりたい！ダイエットしたい！
              <br />
              向けのプロテインではありません
            </h4>
            <h2 className="highline">
              子供の成長を支えるプロテインサプリメント <br /> <span>です</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="dedication__sec3">
        <div className="dedication__sec3-junior-protein">
          <div className="inner">
            <div className="digest-text">
              <h2>
                成人と比べ・・・ <br />
                ジュニア世代は{" "}
                <span className="highline">消化機能が弱い！</span>
              </h2>
              <div className="arrow-down">
                <img src="./img/downarrow.png" alt="" />
              </div>
              <h4>だから！</h4>
              <h2>
                <span className="highline">消化吸収が良いプロテイン</span>を
                <br /> お勧めします。
              </h2>
            </div>
            <img className="digest-img" src="./img/digest.png" alt="" />
          </div>
        </div>
        <div className="dedication__sec3-growth-nutrients">
          <div className="inner">
            <div className="growth-nutrients__text">
              <h4>スクスク伸びる成長期のカラダに必要な</h4>
              <h2>
                <span className="highline">栄養素をシッカリ配合！</span>
              </h2>
              <div className="wph-protein">
                <div className="title-number">
                  <img src="/img/WPH-1.png" alt="" />
                  <h4>消化吸収が良いWPHプロテイン</h4>
                </div>
                <p>
                  正式名称はWhey Protein
                  Hydrolysate（加水分離乳清タンパク質）で、 ホエイプロテインを加水分解して細かく（低分子化）したもので、体内への吸収が早いのが特徴です。
                  <br />
                  だから、少ない量でもトレーニング前やトレーニング中に飲むことでパフォーマンスやカラダづくりの向上に繋がります。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="dedication__sec3-graph">
          <div className="inner">
            <div className="graph">
              <img
                src="/img/graph.png"
                alt="WPH vs WPC Absorption Rate"
                className="graph-image"
              />
              <p>通常のプロテイン（WPC）との比較</p>
            </div>

            <h4>WPHは筋肥大に有利なプロテイン</h4>
            <p>
              グラフはWPHとWPCの吸収速度を比較したものになります。
              WPCは45～60分で血中のBCAA濃度がピークを迎えているのに対し、WPHは約半分の30分でピークを迎えています。
              <br />
              そして吸収が速い分、血中のBCAA濃度が非常に高くなっているのが分かります。
              <br />
              BCAA（特にロイシン）は筋肉の合成能力を高める大事なアミノ酸です。
              <br />
              血中のBCAA濃度を高くできる＝筋肉合成が高い、ということなので、WPHはWPCに比べて、筋肥大に有利なプロテインだといえます。
            </p>
          </div>
        </div>
        <div className="dedication__sec3-mct-oil">
          <div className="inner">
            <div className="mct-oil">
              <div className="title-number">
                <img src="/img/MCT-2.png" alt="" />
                <h4>
                  不足しがちな成長期のエネルギーを補う <br />
                  MCTオイル
                </h4>
              </div>
              <p>
                成長期の子供は、発育のための大量のエネルギーが必要なのに、消化・吸収の能力が未発達です。そのため、エネルギー価の高い油脂が大事です。MCT（中鎖脂肪酸）オイルは、「一般的な油脂に比べ消化・吸収が早く、エネルギーになりやすい」特長を持ちながら、
                カラダに蓄積されにくいという性質もあることから、スポーツを頑張る子供たちにも最適なエネルギー源として注目が集まる成分です。
              </p>
            </div>
            <div className="round-shape"></div>
          </div>
        </div>
      </div>
      <div className="dedication__sec3-calcium-magnesium">
        <div className="calcium-magnesium">
          <div className="inner">
            <div className="calcium-magnesium text">
              <h4>理想的なカルシウム＆マグネシウム</h4>
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
              <h4>
                成長期に必要なカルシウム量 <br /> 700mg~1,000mgが必要です！
              </h4>
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
      </div>
      <div className="dedication__sec3-vitamind">
        <div className="inner">
          <div className="dedication__sec3-vitamind-text">
            <div className="title-number">
              <img src="/img/vd-3.png" alt="" />
              <h4>
                カルシウムの吸収を助ける <br />
                ビタミンD
              </h4>
            </div>
            <p>
              ビタミンDは、カルシウムの吸収を助ける大切なビタミンの一つです。
              日光によっても生体内でビタミンＤを生成することができますが、
              小魚やきのこ類などの摂取不足によってビタミンＤが不足がちです。
              屋外での遊びやスポーツをすることで成長期の骨格作りをサポートします。
            </p>
          </div>
          <div className="dedication__sec3-vitamind-img img">
            <img src="" alt="calcium image" />
          </div>
        </div>
      </div>
      <div className="dedication__sec4">
        <div className="inner">
          <div className="recommended-for-kids">
            <h2>こんなジュニア世代にお勧めです！</h2>
            <ul>
              <li>
                <span class="highlight">スポーツに取り組んでいる</span>
                子供たちに
              </li>
              <li>
                <span class="highlight">勉強を頑張っている</span>子供たちに
              </li>
              <li>
                偏食、または食が細く、
                <span class="highlight">栄養バランスが不安</span>なお子様に
              </li>
              <li>
                スポーツと塾で忙しく
                <span class="highlight">食事をまともに取れない</span>お子様に
              </li>
              <li>
                技術はあっても<span class="highlight">競り負けてしまう</span>
                お子様に
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="dedication__sec5">
        <div className="inner">
          <h2>
            小学生、中学生、高校生のお子様に！ <br />
            もちろん、トップアスリートの方にも！
          </h2>
          <div className="target">
            <div class="column">
              <div class="item">
                <p>偏食の子供も続けやすい味！</p>
                <img src="./img/target1.png" alt="Image 1" />
              </div>
              <div class="item">
                <p>親子で飲みやすいフレーバー</p>
                <img src="./img/target2.png" alt="Image 2" />
              </div>
            </div>
            <div class="column">
              <div class="item">
                <p>
                  練習後のリカバリーのために
                  <br />
                  始めました
                </p>
                <img src="./img/target3.png" alt="Image 3" />
              </div>
              <div class="item">
                <p>
                  食が細い子供が心配で <br /> 始めました
                </p>
                <img src="./img/target4.png" alt="Image 4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dedication__sec6"></div>
    </section>
  );
};

export default Dedication;
