import React from 'react';
import vision from './images/vision.jpeg';
import mission from './images/mission.jpeg';

const Vision = () => {
  return (
    <div>
<div class="container">
            <div class="row">
             <div class="col-md-6">
                 <h2 class="text-center"><b>VISION</b></h2>
                 <br/>
                 <p class="text-justify">
                    We strive hard to fulfill all our client requirements and always try to provide them greener and innovative solutions. zain engineering services solutions
have enough man power that makes us survive in dignified industry by offering all engineering solutions under one roof. Over years of experience and expertise, our well versed professionals have gain momentum in international standards and codes to provide designs as per client native codes.

                 </p>
             </div>
                <div class="col-md-6">
                         
                            <img style={{width:'100%'}} src={vision} alt="vision"/>
                </div>
               

            </div>
            <br/>
            <div class="row">
                             <div class="col-md-6">
                         
                             <img style={{width:'100%'}} src={mission} alt="mission"/>
             
                </div>
                <div class="col-md-6">
                 <h2 class="text-center"><b>MISSION</b></h2>
                 <br/>
                 <p class="text-justify">
                   zain engineering services solutions
is a premier provider of world class HVAC Engineering services across the globe. The purpose of serving clients is to provide them with one stop- solutions for all engineering services.


                 </p>
             </div>
  

            </div>
        </div>


    </div>
  )
}

export default Vision