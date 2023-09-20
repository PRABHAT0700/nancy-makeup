import React from "react";
import Common from "./Common";
import nancyHome from "./nancyHome.png";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";

const Home = () => {
    return ( <> 
    
    <Common 
        name=" hey, i'm "
        imgsrc={nancyHome}
        visit="/about"
        btnname="Get in touch"
    />

    <Service />

    <About/>

    <Contact />
          
     </> )
}

export default Home;