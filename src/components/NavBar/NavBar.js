import React, { useEffect, useState } from 'react'
import './NavBar.css'
import NavButton from '../NavButton/NavButton'
import DropDown from '../DropDown/DropDown'
import NavItems from './NavItems/NavItems'

const NavBar = (props) => {

    const [reduce, setReduce] = useState(false)
    const [showDropDown, setshowDropDown] = useState(false)


    const controlNavBar = () => {
        if (window.scrollY > 5){
            setReduce(true)
        }
        else {
            setReduce(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavBar)
        return () => {
            window.removeEventListener('scroll', controlNavBar)
        }
    }, [])

    const toggleDropDown = () => {
        setshowDropDown(!showDropDown)  
    }
    console.log('drop :' + showDropDown);
    console.log(reduce);
    return (
        <header className={['NavBar', ].join(' ')}>
            <DropDown 
                className={'dropdown'}
                showDropDown={showDropDown}/>
            <div className={'containers'}>
                <div className={['title', reduce?'reduce_title':null].join(' ')}>
                    Virtual Conference {props.title}
                </div>
                <nav className={reduce?'reduce_nav':null}> 
                    <NavItems />
                </nav>
                <NavButton 
                    className={'nav_btn'}
                    onClick={toggleDropDown}/>

            </div>
         </header>
    )
}

export default NavBar
