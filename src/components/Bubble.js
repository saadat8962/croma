import yellowBubble from '../assets/img/yellow_bubble_design.svg';

function Bubble() {

  return (
  <section className='bubble-section'>
    <div className='banner-bottom-img'>
      <img src={yellowBubble}/>
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
