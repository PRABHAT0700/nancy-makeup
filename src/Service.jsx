import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const Service = () => {
    return (<>

    <div className="portfolioHead">
        <div className="my-3"> <br />
            <h1 className="text-center"> My Portfolio </h1>
        </div>

        <br />

            { Sdata.map( (val, ind) => {
 
                    return <Card 
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    description={val.description}
                    />

                    } )
            }
        
    </div>

    </>)
}

export default Service;