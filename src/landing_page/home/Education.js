import React from 'react';

function Education() {
    return ( 
        <div className='container' style={{marginTop:'15vh'}}>
          <div className='row'>
            <div className='col-6'>
              <img src='../../assets/education.svg'/>
            </div>
            <div className='col-6 mt-3'>
              <h2>Free and open market education</h2>
              <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
              <a href='#' > Versity<i class="fa-solid fa-arrow-right" aria-hidden = 'true'/></a>
            <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
              <a href='#'> Trading Q&A<i class="fa-solid fa-arrow-right" aria-hidden = 'true'/></a>
          </div>
            </div>
        </div>
     );
}

export default Education;