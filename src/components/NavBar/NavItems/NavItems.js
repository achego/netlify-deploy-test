import React from 'react'
import './NavItems.css'

const NavItems = (props) => {
    return (
        <ul className={'NavItems'}>
            <li className={'active'}>about</li>
            <li>Home</li>
            <li>landing</li>
            <li>event</li>
            <li>speakers</li>
            <li>schedule</li>
            <li>pricing</li>
            <li>blog</li>
            <li>contact</li>
        </ul>
    )
}

export default NavItems