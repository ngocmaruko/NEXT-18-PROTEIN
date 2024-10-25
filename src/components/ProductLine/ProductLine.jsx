import React from "react";
import "./ProductLine.css";
import test from "../../assets/tablet.jpg";

const ProductLine = () => {
  return (
    <section id="productline">
      <div className="sec8">
        <div className="inner">
          <h2>商品ラインナップ</h2>
          <div className="product-line">
            <div className="product-item">
              <img src={test} alt="Product 1" className="product-image" />
              <h3 className="product-name">ヨーグルト味</h3>
              <p className="product-description">
                すっきりと飲みやすいヨーグルト風味です。
              </p>
            </div>
            <div className="product-item">
              <img src={test} alt="Product 2" className="product-image" />
              <h3 className="product-name">ココア味</h3>
              <p className="product-description">
                ホエイプロテインを配合しています。
                牛乳と混ぜてさらにおいしいココア味です。
              </p>
            </div>
          </div>
          <ul className="purchase">
            <li className="hongo">
              <button className="purchase-button">HONGO公式サイト</button>
            </li>
            <li className="amazon">
              <button className="purchase-button">Amazon</button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductLine;
