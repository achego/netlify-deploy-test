import React from 'react'
import './JoinUs.css'

const JoinUs = () => {
    return (
        <div className='JoinUs'>
            <div className='JoinUs-container'>
                <h3 className='h3'>{'Join us for 3 days of Talks & Workshops'}</h3>
                <div className='JoinUs-timer'>
                    <div>
                        <h3 className='h3'>00</h3>
                        <p>Day(s)</p>
                    </div>
                    <div>
                        <h3 className='h3'>00</h3>
                        <p>Hours(s)</p>
                    </div>
                    <div>
                        <h3 className='h3'>00</h3>
                        <p>Minutes(s)</p>
                    </div>
                    <div>
                        <h3 className='h3'>00</h3>
                        <p>Seconds(s)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinUs
