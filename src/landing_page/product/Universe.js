import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="../assets/fundHouse.png" style={{width:'60%', margin:'1.3em'}}/>
          <p className="text-small text-muted">Our asset management venture<br/>that is creating simple & transparent index <br/>funds to help you save for your goals.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="../assets/sensibullLogo.svg" style={{width:'70%', margin:'2em'}}/>
          <p className="text-small text-muted">Options trading platform that lets you<br/> create strategies, analyze positions, and examine<br/>data pointss like open interest, FII/DII, and more.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="../assets/tijori.svg" style={{width:'60%', margin:'1em'}}/>
          <p className="text-small text-muted">Investment reaearch platform<br/>that offers detailed insights on stocks,<br/>sectores, supply chains, & more.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="../assets/streakLogo.png" style={{width:'70%', margin:'2em'}}/>
          <p className="text-small text-muted">Systematic trading platform<br/>that allows you to create and backtest <br/>strategies without coding.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="../assets/smallcaseLogo.png" style={{width:'70%', margin:'2em'}}/>
          <p className="text-small text-muted">Thematic investing platform<br/>that helps you invest in diversified <br/>baskets of stocks on ETFs.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="../assets/dittoLogo.png" style={{width:'70%', margin:'2em'}}/>
          <p className="text-small text-muted">Personalized advice on life<br/>and health insurance. No spam <br/>and no mis-selling.</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;