import React from 'react'
import './NavButton.css'

const NavButton = (props) => {

    return(
        <div 
            className={['NavButton', props.className?props.className:null].join(' ')}
            onClick={props.onClick}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default NavButton;