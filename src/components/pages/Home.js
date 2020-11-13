import React from 'react'
import '../../App.css'
import HeroSection from '../HeroSection'
import Cards from '../Cards'
import Footer from '../Fotter'
// import ListCard from '../ListCard'

function Home () {
    return(
        <>
            <HeroSection />
            <Cards />
            {/* <ListCard /> */}
            <Footer />
        </>
    )
}

export default Home;