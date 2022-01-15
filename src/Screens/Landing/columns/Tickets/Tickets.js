import React from 'react'
import Date from './Date/Date'
import './Tickets.css'
import '../../../../index.css'
import consta from '../../../../dummyData'

const Tickets = () => {

    const dates = consta.dates.map(
        date => <Date 
                    backgroundColor={date.backgroundColor}
                    color={date.color}
                    day={date.day}
                    noOfSpeakers={date.noOfSpeakers}
                    noOfWorkShop={date.noOfWorkShop}
                    date={date.date}/>
    )

    return (
        <div className={'Tickets'}>
            <div className={'container'}>
                <div className={'dates'}>
                    {dates}
                </div>
            </div>
        </div>
    )
}

export default Tickets
