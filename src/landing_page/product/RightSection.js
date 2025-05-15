import React from "react";

function RightSection({ imageURL, productName, productDesc, learnMore }) {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-6 p-3" style={{margin:'auto'}}>
          <h1>{productName}</h1>
          <p style={{ lineHeight: '2em' }}>{productDesc}</p>
          <div>
            <a href={learnMore}>Learn More <i class="fa-solid fa-arrow-right" aria-hidden='true' /></a>
          </div>
        </div>
        <div className="col-6 p-3">
          <img src={imageURL} style={{ width: '80%' }}/>
        </div>
      </div>
    </div>
  );
}

export default RightSection;