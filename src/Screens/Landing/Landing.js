import React from 'react'
import Layout from '../../components/Layout/Layout'
import Register from '../About/colums/Register/Register'
import AboutEvent from './columns/AboutEvent/AboutEvent'
import DiviCon from './columns/DiviCon/DiviCon'
import JoinUs from './columns/JoinUs/JoinUs'
import Tickets from './columns/Tickets/Tickets'

const Landing = () => {
    return (
        <Layout>
            <DiviCon />
            <AboutEvent />
            <JoinUs />
            <Tickets />
            <Register />
        </Layout>
    )
}

export default Landing
