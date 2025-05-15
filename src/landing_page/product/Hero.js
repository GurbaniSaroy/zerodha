import React from 'react';
function Hero() {
    return (
        <div className='container'>
            <div className='row p-5 mb-5 text-center'>
                <h1 className='text-center' style={{ margin: 'auto', padding: '2vh' }}>
                    BrokZero Products
                </h1>
                <p className='fs-5 text-muted'>Sleek, modern, and intuitive trading platforms</p>
                <p className='fs-6 text-muted'>Check out our <a href='' >investment offerings <i class="fa-solid fa-arrow-right" aria-hidden = 'true'/></a></p>
            </div>
        </div>
    );
}

export default Hero;