import React from "react";
import "./Dedication.css";
import Observer from "../Observer/Observer";

const Dedication = () => {
  return (
    <>
      <Observer addDelay={true} />
      <section id="dedication">
        <div className="dedication__sec1">
          <div className="inner">
            <h2>このプロテインの摂取タイミング</h2>
            <div className="dedication__sec1-img" data--fadein>
              <div className="image-wrapper pre_workout">
                <img
                  src="/img/pre_workout.png"
                  alt=""
                  className="round-image"
                />
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
        <div
          className="dedication__sec2"
          style={{
            background: 'url("/img/attention_bg.png") no-repeat center/cover',
          }}
        >
          <div className="inner">
            <div className="dedication__sec2-attention" data--fadein>
              <div className="dedication__sec2-attention--mark">
                <img src="/img/attention_mark.png" alt="" />
                <h2 className="accent">ATTENTION</h2>
              </div>
              <h4>
                ムキムキになりたい！ダイエットしたい！
                <br />
                向けのプロテインではありません
              </h4>
              <h2 className="accent">
                子供の成長を支えるプロテインサプリメント <br />{" "}
                <span>です</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="dedication__sec3">
          <div
            className="dedication__sec3-junior-protein"
            style={{
              background: 'url("/img/sec3-1_bg.png") no-repeat center/cover',
            }}
          >
            <div className="inner">
              <div className="digest-text">
                <h2 data--fadedown>
                  成人と比べ・・・ <br />
                  ジュニア世代は{" "}
                  <span className="accent">消化機能が弱い！</span>
                </h2>
                <div className="arrow-down" data--fadedown>
                  <img src="./img/downarrow.png" alt="" />
                </div>
                <h4>だから！</h4>
                <h2 data--fadein>
                  <span className="accent">消化吸収が良いプロテイン</span>を
                  <br /> お勧めします。
                </h2>
              </div>
              <img className="digest-img" src="./img/digest.png" alt="" />
            </div>
          </div>
          <div
            className="dedication__sec3-growth-nutrients"
            style={{
              background: 'url("/img/sec3-2_bg.png") no-repeat center/cover',
            }}
          >
            <div className="inner">
              <div className="growth-nutrients__text" data--fadein>
                <h4>スクスク伸びる成長期のカラダに必要な</h4>
                <h2>
                  <span className="accent">栄養素をシッカリ配合！</span>
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
          <div
            className="dedication__sec3-graph"
            style={{
              background: 'url("/img/sec3-3_bg.png") no-repeat center/cover',
            }}
          >
            <div className="inner">
              <div className="graph">
                <img
                  src="/img/graph.png"
                  alt="WPH vs WPC Absorption Rate"
                  className="graph-image"
                />
                <p>通常のプロテイン（WPC）との比較</p>
              </div>

              <h4 data--fadein>WPHは筋肥大に有利なプロテイン</h4>
              <p data--fadein>
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
              <div className="mct-oil-text text right" data--fadeinleft>
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
              <div className="mct-oil-img round-shape left" data--fadeinright>
                <img src="/img/mct-oil_img.jpg" alt="calcium image" />
              </div>
            </div>
          </div>
          <div
            className="dedication__sec3-calcium-magnesium"
            style={{
              background: 'url("/img/sec3-4_bg.jpg") no-repeat center/cover',
            }}
          >
            <div className="calcium-magnesium">
              <div className="inner">
                <div
                  className="calcium-magnesium-text text left"
                  data--fadeinright
                >
                  <h4>理想的なカルシウム＆マグネシウム</h4>
                  <p>
                    骨のためにはカルシウムさえ摂っていれば大丈夫…ではありません。
                    実はカルシウムと一緒にマグネシウムもバランスよく摂取しなくてはどんなにカルシウムだけを摂っても骨が強くなるどころか逆効果。
                    学術的に推奨されているのはカルシウム2～3に対して、マグネシウム1のバランスでの摂取です。NEXT-18
                    プロテインは、この２：１の黄金割合で配合されているので、効率的にカルシウムを補給できるシステムを構築しています。
                  </p>
                </div>

                <div
                  className="calcium-magnesium-img round-shape right"
                  data--fadeinleft
                >
                  <img src="/img/ca-mg_img.jpg" alt="calcium image" />
                </div>
              </div>
            </div>
            <div className="calcium">
              <div className="inner">
                <div className="calcium-text text right" data--fadeinleft>
                  <h4>
                    成長期に必要なカルシウム量 <br /> 700mg~1,000mgが必要です！
                  </h4>
                  <p>
                    カルシウムは骨となる以外にも、筋肉を働かせる役割も持っています。
                    カルシウムに拮抗して働くマグネシウムは、筋肉を緩める作用を持っています。 カルマグバランスが崩れると筋肉がうまくバランスを取ることができずに、痙攣や脚の攣り（つり）が起こりやすくなります。
                  </p>
                </div>
                <div className="calcium-img round-shape left" data--fadeinright>
                  <img src="/img/calcium_img.jpg" alt="calcium image" />
                </div>
              </div>
            </div>
          </div>
          <div
            className="dedication__sec3-vitamind"
            style={{
              background: 'url("/img/sec3-5_bg.png") no-repeat center/cover',
            }}
          >
            <div className="inner">
              <div
                className="dedication__sec3-vitamind-text text left"
                data--fadeinright
              >
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
              <div
                className="dedication__sec3-vitamind-img round-shape right"
                data--fadeinleft
              >
                <img src="/img/vd_img.jpg" alt="calcium image" />
              </div>
            </div>
          </div>
        </div>

        <div
          className="dedication__sec4"
          style={{
            background: 'url("/img/sec4_bg.jpg") no-repeat center/cover',
          }}
        >
          <div className="inner">
            <div className="recommended-for-kids" data--fadein>
              <h2>こんなジュニア世代にお勧めです！</h2>
              <ul>
                <li style={{ position: "relative", paddingLeft: "3rem" }}>
                  <div
                    style={{
                      position: "absolute",
                      left: "0",
                      top: "0.2em",
                      width: "2.5rem",
                      height: "2.5rem",
                      background:
                        'url("/img/li_mark.png") no-repeat center center',
                      backgroundSize: "contain",
                    }}
                  ></div>
                  <span className="highlight">スポーツに取り組んでいる</span>{" "}
                  子供たちに
                </li>
                <li style={{ position: "relative", paddingLeft: "3rem" }}>
                  <div
                    style={{
                      position: "absolute",
                      left: "0",
                      top: "0.2em",
                      width: "2.5rem",
                      height: "2.5rem",
                      background:
                        'url("/img/li_mark.png") no-repeat center center',
                      backgroundSize: "contain",
                    }}
                  ></div>
                  <span className="highlight">勉強を頑張っている</span>{" "}
                  子供たちに
                </li>
                <li style={{ position: "relative", paddingLeft: "3rem" }}>
                  <div
                    style={{
                      position: "absolute",
                      left: "0",
                      top: "0.2em",
                      width: "2.5rem",
                      height: "2.5rem",
                      background:
                        'url("/img/li_mark.png") no-repeat center center',
                      backgroundSize: "contain",
                    }}
                  ></div>
                  偏食、または食が細く、
                  <span className="highlight">栄養バランスが不安</span>
                  なお子様に
                </li>
                <li style={{ position: "relative", paddingLeft: "3rem" }}>
                  <div
                    style={{
                      position: "absolute",
                      left: "0",
                      top: "0.2em",
                      width: "2.5rem",
                      height: "2.5rem",
                      background:
                        'url("/img/li_mark.png") no-repeat center center',
                      backgroundSize: "contain",
                    }}
                  ></div>
                  スポーツと塾で忙しく
                  <span className="highlight">食事をまともに取れない</span>{" "}
                  お子様に
                </li>
                <li style={{ position: "relative", paddingLeft: "3rem" }}>
                  <div
                    style={{
                      position: "absolute",
                      left: "0",
                      top: "0.2em",
                      width: "2.5rem",
                      height: "2.5rem",
                      background:
                        'url("/img/li_mark.png") no-repeat center center',
                      backgroundSize: "contain",
                    }}
                  ></div>
                  技術はあっても
                  <span className="highlight">競り負けてしまう</span> お子様に
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="dedication__sec5"
          style={{
            background: 'url("/img/sec5_bg.jpg") no-repeat center/cover',
          }}
        >
          <div className="inner">
            <h2 style={{ position: "relative" }} data--fadein>
              小学生、中学生、高校生のお子様に！ <br />
              もちろん、トップアスリートの方にも！
              <div
                style={{
                  position: "absolute",
                  content: '""',
                  background: 'url("/img/target_line.png") no-repeat center',
                  backgroundSize: "contain",
                  width: "100%",
                  height: "130px",
                  bottom: "-60px",
                  left: "0",
                  zIndex: -1,
                }}
              ></div>
            </h2>
            <div className="target">
              <div className="column">
                <div className="item" data--fadein>
                  <p>偏食の子供も続けやすい味！</p>
                  <img src="./img/target1.png" alt="Image 1" />
                </div>
                <div className="item" data--fadein>
                  <p>親子で飲みやすいフレーバー</p>
                  <img src="./img/target2.png" alt="Image 2" />
                </div>
              </div>
              <div className="column">
                <div className="item" data--fadein>
                  <p>
                    練習後のリカバリーのために
                    <br />
                    始めました
                  </p>
                  <img src="./img/target3.png" alt="Image 3" />
                </div>
                <div className="item" data--fadein>
                  <p>
                    食が細い子供が心配で <br /> 始めました
                  </p>
                  <img src="./img/target4.png" alt="Image 4" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="dedication__sec6"
          style={{
            background: 'url("/img/athlete_bg.png") no-repeat center/cover',
          }}
        >
          <div className="athlete">
            <img src="/img/athlete.png" alt="" data--fadein />
            <img src="/img/athlete_txt.png" alt="" data--fadeinleft />
          </div>
        </div>
      </section>
    </>
  );
};

export default Dedication;
