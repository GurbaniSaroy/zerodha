import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero" style={{backgroundColor:"#3167c1", color:'#FFFFFF'}}>
      <div className="p-5 " id="supportWrapper" style={{marginLeft:'1.5em'}}>
        <h4>Support Portal</h4>
        <a href="" style={{color:'#FFFFFF'}}>Track Tickets</a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-6" style={{paddingTop:"1em"}}>
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" style={{width:'100%', padding:"1em"}}/>
          <br />
          <a href="" style={{color:'#FFFFFF'}}>Track account opening</a>
          <a href="" style={{color:'#FFFFFF', margin:"2em"}}>Track segment activation</a>
          <a href="" style={{color:'#FFFFFF',  margin:"2em"}}>Intraday margins</a>
          <a href="" style={{color:'#FFFFFF', margin:"2em"}}>Kite user manual</a>
        </div>
        <div className="col-6" style={{paddingLeft:"10em", paddingTop:"1em"}}>
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="" style={{color:'#FFFFFF', textDecoration:'underline'}}>Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="" style={{color:'#FFFFFF', textDecoration:'underline'}}>Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;