import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [top, setTop] = useState("active")
  const [active, setActive] = useState("")
  const [show, setShow] = useState("")

  const [problem, setProblem] = useState("")

  const [solution, setSolution] = useState("")

  const [feature, setFeature] = useState("")
  const [video, setVideo] = useState("")

  const [story, setStory] = useState("")



  const listenScrollEvent = (event) => {
    if (window.scrollY >= 0 && window.scrollY <= 600 ) {
       setTop("active")
       setSolution("")
      setProblem("")
      setFeature("")
      setVideo("")
      setStory("")

      // alert("Height reached")

    } 
    if (window.scrollY >= 601 && window.scrollY <= 1700 ) {
      setProblem("active")
      setTop("")
      setSolution("")
      setFeature("")
      setVideo("")
      setStory("")


     // alert("Height reached")

   } 


    if (window.scrollY >= 1700 && window.scrollY <= 3000 ) {
       setSolution("active")
       setTop("")
      setProblem("")
      setFeature("")
      setVideo("")
      setStory("")


      // alert("Height reached")

    } 

    if (window.scrollY >= 3000 && window.scrollY <= 5000 ) {
      setFeature("active")
      setSolution("")
      setTop("")
      setProblem("")
      setVideo("")
      setStory("")

     // alert("Height reached")

   } 
   if (window.scrollY >= 5000 && window.scrollY <= 5800 ) {
    setFeature("")
    setSolution("")
    setTop("")
    setProblem("")
    setVideo("active")
    setStory("")

   // alert("Height reached")

 } 

 if (window.scrollY >= 5800  ) {
  setFeature("")
  setSolution("")
  setTop("")
  setProblem("")
  setVideo("")
  setStory("active")

 // alert("Height reached")

} 
  
  }

  // console.log("Show", show);
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  
  }, [])


 


  return (
    <>
      <div className="main_navbar" style={{ overflowX: "hidden" }}>
        <div className="nav_container">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container">
              <Link to="/" className="navbar-brand">
                <img className="img-fluid mt-3  " style={{ width: "50%" }} src="/images/logo.png" alt="Logo Image" />
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse display_navbar " id="navbarNav">
                <ul className="navbar-nav  ">
                  <li className="nav-item  nav_margin" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                    <a className={`nav-link single logoLink mt-2 ${show} ${top}`} href="#">
                   <p>
                   TOP
                   </p>
                    
                    </a>
                  </li>

                  <li className="nav-item nav_margin "  data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                    <a href="#problem" className={`nav-link logoLink mt-2 ${problem}`} >
                       <p>???????????????</p>  
                    </a>
                  </li>

                  <li className="nav-item nav_margin" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                    <a className={`nav-link logoLink mt-2 ${solution}`} aria-current="page" href="#solution">
                       <p>????????????</p>
                    </a>
                  </li>

                  <li className="nav-item nav_margin " data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                    <a className={`nav-link logoLink mt-2 ${feature}`} aria-current="page" href="#feature">
                      ????????????
                    <p></p>
                    </a>
                  </li>
                  <li className="nav-item nav_margin  " data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                    <a className={`nav-link logoLink mt-2 ${video}`} aria-current="page" href="#video">
                       <p> ??????</p>
                      
                    </a>
                  </li>
                  <li className="nav-item  nav_margin  " data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                    <a className={`nav-link logoLink mt-2 ${story}`} aria-current="page" href="#story">
                       <p>???????????????</p> 
                    </a>
                  </li>
                </ul>


                <div className=" nav-item" >

                  <Link to="/contact" className="nav-link">
                    <div className=" pBox">
                      <div className="nav_box nav_box_first pt-1">
                        <p>????????????????????????</p>
                      </div>
                      <div className="nav_box nav_box_second"></div>
                    </div>
                  </Link>

                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

    </>
  )
}

export default Navbar
