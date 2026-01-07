import React from 'react'
import Hero from '../components/sections/hero'
import Portfolio from '../components/sections/portfolio'

const Home = () => {
    return (
        <>
            <Hero />
            <Portfolio limit={9} />
        </>
    )
}

export default Home
