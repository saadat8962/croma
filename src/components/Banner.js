import React, { useState } from 'react';

import bannerImageBrwn from '../assets/img/Ice_Cream_banner_brown.png';
import btnImageBrwn from '../assets/img/Ice_Cream_btn_brown.png';

import bannerImageRed from '../assets/img/Ice_Cream_banner_red.png';
import btnImageRed from '../assets/img/Ice_Cream_btn_red.png';

import bannerImageMango from '../assets/img/Ice_Cream_banner_mango.png';
import btnImageMango from '../assets/img/Ice_Cream_btn_mango.png';

import bannerImagePink from '../assets/img/Ice_Cream_banner_pink.png';
import btnImagePink from '../assets/img/Ice_Cream_btn_pink.png';

import bannerImagePurple from '../assets/img/Ice_Cream_banner_purple.png';
import btnImagePurple from '../assets/img/Ice_Cream_btn_purple.png';

import bannerImageYellow from '../assets/img/Ice_Cream_banner_yellow.png';
import btnImageYellow from '../assets/img/Ice_Cream_btn_yellow.png';

const imagePaths = {
  btn1: bannerImageBrwn,
  btn2: bannerImageRed,
  btn3: bannerImageMango,
  btn4: bannerImagePink,
  btn5: bannerImagePurple,
  btn6: bannerImageYellow,
};

function Banner() {

  const [currentImage, setCurrentImage] = useState(bannerImageBrwn);
  const [activeButton, setActiveButton] = useState(null);

  const handleImageChange = (buttonKey) => {
    setCurrentImage(imagePaths[buttonKey]);
    setActiveButton(buttonKey);
  }

  return (
    
  <section className={activeButton === 'btn1' ? 'banner brown' : activeButton === 'btn2' ? 'banner red' : activeButton === 'btn3' ? 'banner mango' : activeButton === 'btn4' ? 'banner pink' : activeButton === 'btn5' ? 'banner purple' : activeButton === 'btn6' ? 'banner yellow' : 'banner'}>
    <div className="container">
     <div className="banner-top-wrapper">
        <div className="banner-top-heading"> 
          <h1><span>CROMA</span> cosmetic</h1>
        </div> 
        <div className="banner-bottom-title">
          <p className="red-title">OF CROMA</p>
          <p>and body care</p> 
        </div> 
     </div>
     <div className="banner-image-wrapper ">
        <img src={currentImage}/>
     </div>
    </div>
    <div className="banner-btn-wrapper">
      <button onClick={() => handleImageChange('btn1')} className={activeButton === 'btn1' ? 'active' : ''}>
        <img src={btnImageBrwn}/>
      </button>
      <button onClick={() => handleImageChange('btn2')} className={activeButton === 'btn2' ? 'active' : ''}>
        <img src={btnImageRed}/>
      </button>
      <button onClick={() => handleImageChange('btn3')} className={activeButton === 'btn3' ? 'active' : ''}>
        <img src={btnImageMango}/>
      </button>
      <button onClick={() => handleImageChange('btn4')} className={activeButton === 'btn4' ? 'active' : ''}>
        <img src={btnImagePink}/>
      </button>
      <button onClick={() => handleImageChange('btn5')} className={activeButton === 'btn5' ? 'active' : ''}>
        <img src={btnImagePurple}/>
      </button>
      <button onClick={() => handleImageChange('btn6')} className={activeButton === 'btn6' ? 'active' : ''}>
        <img src={btnImageYellow}/>
      </button>
    </div>
  </section>
  );
}

export default Banner;
