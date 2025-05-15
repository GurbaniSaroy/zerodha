import React from 'react';
import { Link } from 'react-router-dom';
function Team() {
    return (
        <>
            <div className='container'>
                <div className='row p-6' style={{ margin: 'auto' }}>
                    <h1 className='text-center' style={{ margin: 'auto' }}>
                        People
                    </h1>
                </div>

                <div className='row mx-5' style={{ padding: '1em' }} >

                    <div className='col-6 text-center'>
                        <img src='../../../assets/CEO.jpg' style={{ borderRadius: '100%', width: '60%' }} />
                        <h3 className='mt-5'>Gurbani Saroy</h3>
                        <h6>Founder, CEO</h6>
                    </div>

                    <div className='col-6' style={{ marginTop: '3em', lineHeight: '2em' }}>
                        <ul style={{ listStyleType: 'none', fontSize: '1.1em' }}>
                            <li>Gurbani Saroy bootstrapped and founded BrokZero in 2025 to overcome the hurdles he faced during his decade long stint as a trader. Today, BrokZero has changed the landscape of the Indian broking industry.</li>
                            <br />

                            <li>She is the President of the <a href='#'>Student Literary Club</a> and Secretary at <a href='#' >University Placement Committee (UPC)</a></li>

                            <br />
                            <li>Reading books is more than a hobby for her</li>
                            <br />
                            <li>Connect on 
                                <a href='/'>Homepage</a> / 
                                <a href=''>TradingQnA</a> /
                                <a href=''>LinkedIn</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Team;