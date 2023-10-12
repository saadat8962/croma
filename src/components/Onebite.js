import oneBite from '../assets/img/one_bite_bg.svg';
import oneBiteBubble from '../assets/img/onebite_bubble_img.svg';
import whiteArrow from '../assets/img/white-arrow-left.svg';
import mangoImg from '../assets/img/Mango_Chamoy.png';
import redImg from '../assets/img/Churro_Raspberry.png';
import brownImg from '../assets/img/Double_Espresso.png';
import yellowImg from '../assets/img/Gooey_Fried_Banana.png';


import React, { useState, useEffect } from 'react';

function Onebite() {
  const imageList = [redImg, brownImg, yellowImg, mangoImg];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 800); // Change image every 1000 milliseconds (1 second)

    return () => {
      // Clean up the interval when the component unmounts
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section className="onebite-section">
      <div className="onebite-bg-img">
        <img src={oneBite} alt="One Bite Background" />
      </div>
      <div className="onebite-bubble-img">
        <img src={oneBiteBubble} alt="One Bite Bubble" />
      </div>
      <div className="onebite-content-wrapper">
        <h2>After</h2>
        <div className="onebite-img">
          <img src={imageList[currentImageIndex]} alt="One Bite Image" />
        </div>
        <h2 className="mt-14">One Bite,</h2>
        <h3>
          <span>You'll never</span>
          <span>go back to basic</span>
          <span>ice cream</span>
        </h3>
        <img className="white-arrow-down" src={whiteArrow} alt="White Arrow" />
      </div>
    </section>
  );
}

export default Onebite;

