import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
    return ( <> 
    
    <section id="header">
      <div className="common-home-div">
      <div className="container-fluid">
        <div className="row">
        <div className="col-10 mx-auto">

          <div className="row">           

         
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column"> 
                 
               <div className="home-responsive-cont">

             <div className="home-content-title">    
              <h4> <span style={{color:"#6a6464"}}> {props.name} </span>  <strong className="brand-name"> Nancy </strong> </h4>
             </div>
                  <br/>
             <h1 style={{color:"rgb(253 107 107 / 79%)"}}>Make-up Artist</h1>
             
             
              <h4 className="my-3" style={{color:"#6a6464"}}> "Enhancing beauty is my passion, and makeup is my art.
               With every stroke, I strive to bring out your unique radiance" </h4>
                    <br /> 


                  <div className="button-home-responsive">
            
              <div className="mt-3"> 
                  <NavLink to={props.visit} className="btn btn-info"> {props.btnname} </NavLink>
                  
              </div>

             
             
                 </div>


              </div>
            
            </div>

        <div className="col-lg-6 order-1 order-lg-2 header-img">


        <div className="home-img">
          <img src={props.imgsrc} className="img-fluid animated m-5" alt="home-img"/>
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

export default Common;


