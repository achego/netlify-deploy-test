import React from 'react'
import NavItems from '../NavBar/NavItems/NavItems'
import './DropDown.css'

const DropDown = (props) => {

    const dClass = ['containers']

    if (props.showDropDown===1){
        dClass.push('reduce')
    }
    if (props.showDropDown){
        dClass.push('reduce')
    }

    return (
        <div className={['DropDown', props.className?props.className:null].join(' ')}>
            <div></div>
            <div className={dClass.join(' ')}>
                <NavItems active={false}/>
            </div>
        </div>
    )
}

export default DropDown