import React from 'react'
import Button from '../../../../components/Button/Button'
import '../../../../index.css'
import './Show.css'

const Show = () => {
    return (
        <article className={['container', 'Show'].join(' ')}>
            <h1 className={'h1'}>About the event</h1>
            <div>
                <p className={'p'}>
                Faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                </p>
                <Button 
                    text='Save your seat'
                    backgroundColor='#FF6AF0'/>
            </div>
        </article>
    )
}

export default Show
