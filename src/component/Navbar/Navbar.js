import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
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
                  <li className="nav-item mx-lg-4 ">
                    <a className="nav-link logoLink mt-2 " aria-current="page" href="#">TOP
                    </a>
                  </li>

                  <li className="nav-item mx-lg-4 ">
                    <a className="nav-link logoLink mt-2 " aria-current="page" href="#problem">
                      お困りごと
                    </a>
                  </li>

                  <li className="nav-item mx-lg-4 ">
                    <a className="nav-link logoLink mt-2 " aria-current="page" href="#solution">
                      サービス
                    </a>
                  </li> 
                  
                  <li className="nav-item mx-lg-4 ">
                    <a className="nav-link logoLink mt-2 " aria-current="page" href="#feature">
                      ポイント
                    </a>
                  </li>
                  <li className="nav-item mx-lg-4 ">
                    <a className="nav-link logoLink mt-2 " aria-current="page" href="#video">
                      動画
                    </a>
                  </li>
                  <li className="nav-item mx-lg-4 ">
                    <a className="nav-link logoLink mt-2 " aria-current="page" href="#story">
                      ストーリー
                    </a>
                  </li>
                </ul>


                <div className=" nav-item" >

                  <Link to="/contact" className="nav-link">
                    <div className=" pBox">
                      <div className="nav_box nav_box_first pt-1">
                        <p>お問合せはこちら</p>
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
