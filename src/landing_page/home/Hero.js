import React from 'react';

function Hero() {
    return (
        <div className='container text-center mb-5'>
            <div className='row p-5'>
                <img src='../../assets/landing.png' alt='Hero image' className='mb-5'></img>
                <h1 className='m-3'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button type="button" style={{width:'20%', margin:'auto'}} class="btn btn-primary">Sign up for free</button>
            </div>
            {/* <div className='row my-5 p-1'>
                <div className='col-6'>
                    <h1>Trust with confidence</h1>
                    <h3>Customer-first always</h3>
                    <p>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>

                    <h3>No spam or gimmicks</h3>
                    <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

                    <h3>The Zerodha universe</h3>
                    <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h3>Do better with money</h3>
                    <p>With initiatives like and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-6'>
                    <div className='col-2'>
                    <img src='../../assets/ecosystem.png' alt='Ecosystem img'/>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default Hero;