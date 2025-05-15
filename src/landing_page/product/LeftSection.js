import React from 'react';

function LeftSection({ imageURL, productName, productDesc, tryDemo, LearnMore, googlePlay, appStore }) {
    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-6 p-3'>
                    <img src={imageURL} style={{ width: '80%' }} />
                </div>
                <div className='col-6  p-3' style={{ margin: 'auto' }}>
                    <h1>{productName}</h1>
                    <br></br>
                    <p style={{ lineHeight: '2em' }}>{productDesc}</p>
                    <div>
                        <a href={tryDemo}>Try Demo
                            <i class="fa-solid fa-arrow-right" aria-hidden='true' /></a>
                        <a href={LearnMore} style={{ marginLeft: '10em' }}>
                            Learn More
                            <i class="fa-solid fa-arrow-right" aria-hidden='true' />
                        </a>
                    </div>
                    <div className='mt-3'>
                        <a href={googlePlay}>
                            <img src='../assets/googlePlayBadge.svg' />
                        </a>
                        <a href={appStore}>
                            <img src='../assets/appStoreBadge.svg' style={{ marginLeft: '7em' }} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;