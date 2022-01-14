import React from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import './Layout.css'

const Layout = (props) => {
    return (
        <div className={'Layout'}>
            <NavBar title={props.navTitle}/>
                <main>
                    {props.children}
                </main>
            <Footer />
        </div>
    )
}

export default Layout
