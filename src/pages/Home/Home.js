import React, {useState, useEffect} from 'react'
import Feature from '../../component/Feature/Feature'
import Feature4 from '../../component/feature4/Feature4'
import FeatureNext from '../../component/FeatureNext/FeatureNext'
import Footer from '../../component/Footer/Footer'
import Hero from '../../component/Hero/Hero'
import Loader from '../../component/Loader'
import Navbar from '../../component/Navbar/Navbar'
import Problem from '../../component/Problem/Problem'
import Solution from '../../component/Solution/Solution'
import Story from '../../component/Story/Story'
import Video from '../../component/Video/Video'
// import MyComponent from 'react-fullpage-custom-loader'


const Home = () => {
    const [ spinner, setSpinner ] = useState(true);

  // It will be executed before rendering
  

  useEffect(() => {
    setTimeout(() => setSpinner(false), 3000)
  }, []);

  
  

    return (
        spinner ? 
        <Loader /> : 
        <>
    {/* <MyComponent /> */}

          <Navbar />
           <Hero />
           <Problem />
           <Solution />
           <Feature />
           <Feature4 />

           <FeatureNext />
           <Video />
           <Story />
           {/* <Loader /> */}
           <Footer />
        </>
    )
}

export default Home
