import React from 'react'
import aboutus from './images/aboutus.jpeg'

const AboutUs = () => {
  return (
<div className="container">
            <div className="row">
             <div className="col-md-6">
                 <h2 className="text-center"><b>ABOUT US</b></h2>
                 <br/>
                 <p className="text-justify">
                     Zain Engineering services solutions (outsourcing solutions) located in india,We have done serval project in USA, Australia &amp; middle east.One of the world-leading service provider in engineering design and detailing for HVAC, ventilation Plumbing Electrical REVIT/ BIM 3D Modeling Plumbing system,Electrical system,Air-Conditioning system. BIM 3D Modeling Services(Architecture, Structure &amp; MEP) Clash Detection &amp; Co-ordination (Architecture, structure, MEP, HVAC, Piping services,) BIM Cost Estimating and Quantity Takeoff -3D BIM Model for MEP Coordination - We are backed by strong experience and comprised of highly talented, professional and motivated engineers.

                     Our professionals are driven by innovation, teamwork, quality and transparency in working various sectors such as shopping mall, pharma, industrial, hotel, Marine, offshore, Oil &amp; Gas.
                 </p>
             </div>
                <div className="col-md-6">
                      
                            <img style={{width:'100%'}} src={aboutus} alt="aboutus"/>
                                 </div>
               

            </div>
        </div>  )
}

export default AboutUs