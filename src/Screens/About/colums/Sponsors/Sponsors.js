import React from 'react'
import Sponsor from './Sponsor/Sponsor'
import './Sponsors.css'
import '../../../../index.css'

const Sponsors = () => {

    let sponsors = []

    for (let index = 0; index < 8; index++) {
        sponsors.push(<Sponsor key={index}/>)
    }

    return (
        <section className={['Sponsors', 'container'].join(' ')}>
            <h2 className={'h2'}>{'Sponsors & partners'}</h2>
            <div>
                {sponsors}
            </div>
        </section>
    )
}

export default Sponsors
