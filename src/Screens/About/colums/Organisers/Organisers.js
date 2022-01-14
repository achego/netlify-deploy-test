import React from 'react'
import './Organisers.css'
import  '../../../../index.css'
import Organiser from './Organiser/Organiser'
import consta from '../../../../dummyData'

const Organisers = () => {

    const organisers = consta.dum.map(
        organiser => <Organiser
                        key={organiser.id}
                        name={organiser.name}
                        position={organiser.position} />)

    return (
        <div className={'Organisers container'}>
            <h2 className={'title h2'}>Event Organisers</h2>
            <div className={'organiser'}>
                {organisers}
            </div>
        </div>
    )
}

export default Organisers
