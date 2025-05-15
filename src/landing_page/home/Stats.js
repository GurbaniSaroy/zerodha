import React from 'react';

function Stats() {
    return (
        <div className='container' style={{marginTop:'15vh'}}>
            <div className='row' >
                <div className='col-6'>
                    <h1 style={{ marginBotton: '30px' }}>Trust with confidence</h1>

                    <div style={{ marginTop: '5px', marginBotton: '32px' }}>
                        <h3 className='mt-5 fs-4' style={{ marginBotton: '32px' }}>Customer-first always</h3>
                        <p>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                        <div />


                        <div style={{ marginTop: '5px', marginBotton: '32px' }}>
                            <h3 className='fs-4'>No spam or gimmicks</h3>
                            <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                        </div>

                        <div style={{ marginTop: '5px', marginBotton: '32px' }}>
                            <h3 className='fs-4'>The BrokZero universe</h3>
                            <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                        </div>

                        <div style={{ marginTop: '5px', marginBotton: '32px' }}>
                            <h3 className='fs-4'>Do better with money</h3>
                            <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                        </div>

                    </div>
                </div>
                <div className='col-6'>
                    <img src='../../assets/ecosystem.png' style={{ width: '100%', margin: 'auto 0' }} alt='ecosystem img' />
                    <div>
                        <a href='#' className='mx-5'>Explore our products <i class="fa-solid fa-arrow-right" aria-hidden = 'true'/></a>

                        <a href='#' className='mx-5'>Try Kite demo <i class="fa-solid fa-arrow-right" aria-hidden = 'true'/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;