import React from 'react';
import './Dedication.css'; 

const IntakeTiming = () => {
  const images = [
    { src: 'https://via.placeholder.com/150', label: '運動前' },
    { src: 'https://via.placeholder.com/150', label: '運動中' },
  ]; 

  return (
    <section className='intake-timing'>
      <div className="inner">
        <h2>このプロテインの摂取タイミング</h2>
          <div className='intake-timing-img'>
        {images.map((image, index) => (
          <div key={index} className="image-wrapper">
            <img src={image.src} alt={`Image ${index + 1}`} className="round-image" />
            <p className="image-label">{image.label}</p> {/* Label below each image */}
          </div>
        ))}
        </div>
        <h5>少ない量でもトレーニング前やトレーニング中に飲むことで <br />
        パフォーマンスやカラダづくりの向上に繋がります。</h5>
      </div>      
    </section>
  );
};

export default IntakeTiming;
