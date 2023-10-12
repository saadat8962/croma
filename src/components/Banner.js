import React, { useState, useEffect } from 'react';

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

import bottmSvg from '../assets/img/banner_bottom.svg';

const imagePaths = {
  btn4: bannerImageBrwn,
  btn6: bannerImageRed,
  btn2: bannerImageMango,
  btn1: bannerImagePink,
  btn5: bannerImagePurple,
  btn3: bannerImageYellow,
};

function Banner() {

  const [currentImage, setCurrentImage] = useState(bannerImagePink);
  const [activeButton, setActiveButton] = useState('btn1');

  const imageKeys = ['btn1', 'btn2', 'btn3', 'btn4', 'btn5', 'btn6'];

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = imageKeys.indexOf(activeButton);
      const nextIndex = (currentIndex + 1) % imageKeys.length;
      const nextButton = imageKeys[nextIndex];
      handleImageChange(nextButton);
    }, 3000); // Change every second (1000 milliseconds)
    return () => {
      clearInterval(interval); // Cleanup the interval when the component unmounts
    };
  }, [activeButton]);

  const handleImageChange = (buttonKey) => {
    setCurrentImage(imagePaths[buttonKey]);
    setActiveButton(buttonKey);
  }

  return (
  <section className={activeButton === 'btn1' ? 'banner pink' : activeButton === 'btn2' ? 'banner mango' : activeButton === 'btn3' ? 'banner yellow' : activeButton === 'btn4' ? 'banner brown' : activeButton === 'btn5' ? 'banner purple' : activeButton === 'btn6' ? 'banner red' : 'banner'}>
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
    <div className="banner-btn-wrapper">
      <div className='banner-btn-block'>
        <button onClick={() => handleImageChange('btn1')} className={activeButton === 'btn1' ? 'active' : ''}>
          <img src={btnImagePink}/>
        </button>
        <button onClick={() => handleImageChange('btn2')} className={activeButton === 'btn2' ? 'active' : ''}>
          <img src={btnImageMango}/>
        </button>
        <button onClick={() => handleImageChange('btn3')} className={activeButton === 'btn3' ? 'active' : ''}>
          <img src={btnImageYellow}/>
        </button>
        <button onClick={() => handleImageChange('btn4')} className={activeButton === 'btn4' ? 'active' : ''}>
          <img src={btnImageBrwn}/>
        </button>
        <button onClick={() => handleImageChange('btn5')} className={activeButton === 'btn5' ? 'active' : ''}>
          <img src={btnImagePurple}/>
        </button>
        <button onClick={() => handleImageChange('btn6')} className={activeButton === 'btn6' ? 'active' : ''}>
          <img src={btnImageRed}/>
        </button>
      </div>
    </div>
    <a href="#" className='bottom-url'>
      <img src={bottmSvg}/>
      <div className='banner-text-wrapper'>
        <h6 className='orange-text'>ORDER<br />BOBA ICE CREAM</h6>
        <h6 className='red-text'>set of 6</h6>
      </div>
    </a>
  </section>
  
 
  );
}

export default Banner;
