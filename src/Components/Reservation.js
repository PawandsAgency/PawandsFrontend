import React from 'react'
import Video from '../assents/head11.jpg'
import "./reservationstyle.css"
function Reservation() {
  return (
    <div className='Resevation'>
       
        <div class="container text-center">
  <div class="row align-items-start">
    <div class="col">
    <h3>SCHEDULE FREE 20 MINIUTE <span style={{color:"#FFD700"}}>MEETING</span></h3>
    <p>As a result of this 20-minute conversation, we will have effectively planned and prepared to provide you with the best and most accurate support and opportunities. From there, your success will be entirely your own achievement.</p>
    <button className="button-86" role="button">Book a Call</button>
    </div>
    <div class="col col-img">
    <img src={Video}></img>
    </div>
  </div>
</div>
    </div>
  )
}

export default Reservation




