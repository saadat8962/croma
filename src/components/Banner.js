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

  const handleImageChange = (buttonKey) => {
    setCurrentImage(imagePaths[buttonKey]);
  }

  return (
    
  <section className="banner">
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
     <div className="banner-image-wrapper">
        <img src={currentImage}/>
     </div>
    </div>
    <div className='banner-btn-wrapper'>
      <button onClick={() => handleImageChange('btn1')} className='btn-1'>
        <img src={btnImageBrwn}/>
      </button>
      <button onClick={() => handleImageChange('btn2')} className='btn-1'>
        <img src={btnImageRed}/>
      </button>
      <button onClick={() => handleImageChange('btn3')} className='btn-1'>
        <img src={btnImageMango}/>
      </button>
      <button onClick={() => handleImageChange('btn4')} className='btn-1'>
        <img src={btnImagePink}/>
      </button>
      <button onClick={() => handleImageChange('btn5')} className='btn-1'>
        <img src={btnImagePurple}/>
      </button>
      <button onClick={() => handleImageChange('btn6')} className='btn-1'>
        <img src={btnImageYellow}/>
      </button>
    </div>
  </section>
  );
}

export default Banner;
