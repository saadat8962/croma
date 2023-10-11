import React, { useState, useEffect } from 'react';

import bottmDesign from '../assets/img/banner_bottom_design.svg';

function Bubble() {

  return (
  <section className='bubble-section'>
    <div className='banner-bottom-img'>
      <img src={bottmDesign}/>
    </div>
    <div className='bubble-heading-wrapper'>
      <h2>
        <span>NAME</span>
        <span>A MORE</span>
        <span>ICONIC DUO</span>
      </h2>
    </div>
 </section>
  
 
  );
}

export default Bubble;
