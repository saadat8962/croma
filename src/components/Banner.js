import BannerImage from '../assets/img/Boba_x_Ice_Cream_Muracoffee_Brown.png';


function Banner() {
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
        <img src={BannerImage}/>
     </div>
    </div>
  </section>
  );
}

export default Banner;
