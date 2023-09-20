import React from "react";
import nancyHome from "./nancyHome.png";
import { NavLink } from "react-router-dom";
import aboutPic from "./aboutPic.png";

const About = () => {
    return ( <> 



<section id="header">
      <div className="common-home-div">
      <div className="container-fluid">
        <div className="row">
        <div className="col-10 mx-auto">

          <div className="row">           

         
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column "> 
                 
                <div className="about-cont">
                
        
             <h1 style={{color:"rgb(253 107 107 / 79%)", textAlign:"center"}}>About Me</h1>
             
                <br />
              <p className="my-3" style={{color:"#6a6464"}}> 
              I'm Nancy Tiwari, a passionate and highly skilled professional 
              makeup artist with a penchant for creativity and an unwavering dedication 
              to my craft. I honed my expertise through a comprehensive one-year professional 
              makeup artist course at IDA, where I garnered invaluable knowledge and hands-on experience.
               My commitment to excellence has been recognized with the honor of Best Makeup Artist. Over 
               the course of my career, I have had the privilege of working on a diverse range of projects, 
               from intricate bridal makeup to imaginative fantasy looks and much more. Each endeavor is a canvas 
               for me to blend artistry and technique, ensuring that every face I touch exudes confidence and allure. 
               With a deep-seated belief in the transformative power of makeup, I am dedicated to bringing out the unique 
               beauty in every individual I have the pleasure of working with. Welcome to my world of artistry and transformation. </p>
                   
              
               </div>
              
            
            </div>

         

          <div className="col-lg-6 order-1 order-lg-2 header-img">

            <div className="about-respon-pic">
              <img src={aboutPic} className="img-fluid animated m-5" alt="home-img"/>
            </div>

          

          </div>  

        </div>

        </div>
        </div>
      </div>
      </div>


</section>

   

     </> )
}

export default About;


