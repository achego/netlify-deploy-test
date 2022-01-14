import React from 'react'
import './Organiser.css'
import PropTypes from 'prop-types'

const Organiser = (props) => {
    return (
        <div className={'Organiser'}>
            <div>{props.image}</div>
            <p className={'position'}>{props.position}</p>
            <p className={['name'].join(' ')}>{props.name}</p>
        </div>
    )
}

Organiser.propTypes = {
    image: PropTypes.string,
    position: PropTypes.string,
    name: PropTypes.string,
}

export default Organiser
