import React from 'react';
import CountUp from 'react-countup';



const Cards = ({data:{confirmed,recovered,deaths,lastUpdate}}) => {
    if(!confirmed){
        return 'loading...';
    }
    return (
        <>
 <div className="container"> 
   <div className="row main1" >
    <div className="col-12 col-sm-3 ml-5 ml-sm-0">
        <div className="card border-success mb-3">
           <div className="card-header bg-transparent border-success">Infected</div>
             <div className="card-body text-success">
                <h5 className="card-title">
                    <CountUp
                        start={0}
                        end={confirmed.value}
                        duration={3}
                        separator=","
                    />
                </h5>
                <p className="card-text">
                   {new Date(lastUpdate).toDateString()}
                </p>
             </div>
           <div className="card-footer bg bg-primary "></div>
           </div>
    </div>
    <div className="col-12 col-sm-3">
        <div className="card border-success  mb-3" >
           <div className="card-header  bg-transparent border-success ">Recovered</div>
             <div className="card-body text-success">
                <h5 className="card-title">
                <CountUp
                        start={0}
                        end={recovered.value}
                        duration={3}
                        separator=","
                />
                </h5>
                <p className="card-text">
                   {new Date(lastUpdate).toDateString()}
                </p>
             </div>
           <div className="card-footer bg bg-success"></div>
           </div>
    </div>
    <div className="col-12 col-sm-3">
        <div className="card border-danger mb-3" >
           <div className="card-header bg-transparent border-success">Deaths</div>
             <div className="card-body text-success">
                <h5 className="card-title">
                <CountUp
                        start={0}
                        end={deaths.value}
                        duration={3}
                        separator=","
                />
                </h5>
                <p className="card-text">
                   {new Date(lastUpdate).toDateString()}
                </p>
             </div>
           <div className="card-footer bg bg-danger"></div>
           </div>
    </div>
</div>
</div>  

        </>
    )
}

export default Cards;
