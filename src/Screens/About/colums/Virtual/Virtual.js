import React from 'react'
import './Virtual.css'
import '../../../../index.css'
import Button from '../../../../components/Button/Button'

const Virtual = () => {
    return (
        <section className='Virtual container'>
           <div className={'container'}>
                <div className={'text'}>
                    <h2 className={'h3'}>A virtual web developer conference</h2>
                    <Button 
                        className={'v_button'}
                        text='View Schedule'
                        border='1px solid #FFF022'
                        />
                </div>
                <div className={'image'}></div>
           </div>
        </section>
    )
}

export default Virtual
