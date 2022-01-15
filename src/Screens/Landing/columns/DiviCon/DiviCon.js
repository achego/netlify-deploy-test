import React from 'react'
import './DiviCon.css'

const DiviCon = () => {
    return (
        <div className='DiviCon'>
            <div className='DiviCon-title container'>
                <h1 className='h1'> divi conference </h1>
                <h1 className='h1 DiviCon-light-text'>summer 2021</h1>
            </div>

            <div className='DiviCon-reg container'>
                <div>
                    <div className='DiviCon-reg-date'>
                        <h3 className='h3'><span>july</span>12 - 15</h3>
                    </div>
                    <h1 className='h1'>online</h1>
                </div>

                <div className={'DiviCon-earlybird'}>
                    <div className='DiviCon-earlybird-button'>{'>'}</div>
                    <div>
                        <h4 className='h3'>earlybird registration now open</h4>
                        <p className='p'>Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DiviCon
