import React from 'react'
import Feature from '../../component/Feature/Feature'
import FeatureNext from '../../component/FeatureNext/FeatureNext'
import Footer from '../../component/Footer/Footer'
import Hero from '../../component/Hero/Hero'
import Navbar from '../../component/Navbar/Navbar'
import Problem from '../../component/Problem/Problem'
import Solution from '../../component/Solution/Solution'
import Story from '../../component/Story/Story'
// import MyComponent from 'react-fullpage-custom-loader'


const Home = () => {
    return (
        <>
    {/* <MyComponent /> */}

          <Navbar />
           <Hero />
           <Problem />
           <Solution />
           <Feature />
           <FeatureNext />
           <Story />
           <Footer />
        </>
    )
}

export default Home
