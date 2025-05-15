import React from 'react';

function Pricing() {
    return (
        <div className='container' style={{ marginTop: '15vh', padding:'0%'}}>
            <div className='row'>
                <div className='col-5'>
                    <h1>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='#'>See pricing <i class="fa-solid fa-arrow-right" aria-hidden='true' /></a>
                </div>

                <div className='col-7'>
                <div className='row'>
                        <div className='col' style={{width:'100%'}}>
                            <div className='row'>
                            <img src='../../assets/pricing0.svg' style={{width:'70%'}}></img>
                            {/* <p style={{width:'30%', fontSize:'12px'}}>Free account <br/>opening</p> */}
                            </div>
                        </div>
                        <div className='col'>
                            <div className='row'>
                            <img src='../../assets/pricingEquity.svg' style={{width:'50%'}}></img>
                            <p style={{width:'50%', verticalAlign:'bottom', fontSize:'10px'}}>Free equity delivery
                                and direct mutual funds</p>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='row'>
                            <img src='../../assets/intradayTrades.svg' style={{width:'50%'}}></img>
                            <p style={{width:'50%', verticalAlign:'bottom', fontSize:'10px'}}>Intraday and
                                F&O</p>
                            </div>
                        </div>

                        </div>
                    </div>
                

            </div>
        </div>
    );
}

export default Pricing;