import React from 'react'
import Button from '../../../../../components/Button/Button'
import '../../../../../index.css'
import './Date.css'
import PropTypes from 'prop-types'


const Date = (props) => {
    return (
        <div 
            className={'Date'}
            style={{
                backgroundColor:props.backgroundColor?props.backgroundColor:'yellow',
                color:props.color?props.color:'black'}}>
            <p className={'p'}>{props.date}</p>
            <h2 className={'h2'}>{props.day}</h2>
            <p className={'p'}>{props.noOfSpeakers} Speakers</p>
            <p className={'p'}>{props.noOfWorkShop} Workshop</p>
            <Button 
                backgroundColor='black'
                color='white'
                text='View Schedule'/>
        </div>
    )
}

Date.propTypes = {
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    date: PropTypes.string,
    day: PropTypes.string,
    noOfSpeakers: PropTypes.string,
    noOfWorkShop: PropTypes.string,
}

export default Date
