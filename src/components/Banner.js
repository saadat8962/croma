import React, { useState } from 'react';
import bannerImageBrwn from '../assets/img/Boba_x_Ice_Cream_Muracoffee_Brown.png';
import btnImageBrwn from '../assets/img/Boba_x_Ice_Cream_r1_1L0A6324_portrait_btn.png';
import bannerImageRed from '../assets/img/Boba_x_Ice_Cream_PikaChurro_banner.png';
import btnImageRed from '../assets/img//Boba_x_Ice_Cream_r1_1L0A6413_Portrait_btn.png';


function Banner() {

  const [currentImage, setCurrentImage] = useState(bannerImageBrwn);

 function handleImageRed() 
 {
  setCurrentImage(bannerImageRed)
 }

 function handleImageBrwn() 
 {
  setCurrentImage(bannerImageBrwn)
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
      <button onClick={handleImageBrwn} className='btn-1'>
        <img src={btnImageBrwn}/>
      </button>
      <button onClick={handleImageRed} className='btn-1'>
        <img src={btnImageRed}/>
      </button>
    </div>
  </section>
  );
}

export default Banner;
