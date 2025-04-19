import React from 'react';

function Awards() {
    return (
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <img src='../../assets/largestBroker.svg'/>
            </div>
            <div className='col-6'>
              <h1>Largest Broker in India</h1>
              <p>2+ million BrokZero clients contribute to over 15% of all retail order volumes in India daily by trading and investing in :</p>
              <div className='row'>
                <div className='col-6'>
                  <ul>
                    <li>Futures and Options</li>
                    <li>Commodity derivatives</li>
                    <li>Currency derivatives</li>
                  </ul>
                </div>
                <div className='col-6'>
                  <ul>
                    <li>Stocks & IPOs</li>
                    <li>Direct mutual funds</li>
                    <li>Bonds and Government Securities</li>
                  </ul>
                </div>
              </div>
              <img src='../../assets/pressLogos.png'/>
            </div>
          </div>
        </div>
      );
}

export default Awards;