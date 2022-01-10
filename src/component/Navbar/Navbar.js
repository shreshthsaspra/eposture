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
              <div className="collapse navbar-collapse display_navbar ms-lg-5" id="navbarNav">
                <ul className="navbar-nav ps-lg-5 ms-lg-5">
                  <li className="nav-item ">
                    <Link className="nav-link logoLink mt-2 " aria-current="page" to="#feature_next">TOP
                    </Link>
                  </li>

                  <li className="nav-item ">
                    <a className="nav-link logoLink mt-2 " aria-current="page" href="#">
                      サービス
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link logoLink mt-2 " aria-current="page" href="#">
                      お困りごと
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link logoLink mt-2 " aria-current="page" href="#">
                      ポイント
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link logoLink mt-2 " aria-current="page" href="#">
                      動画
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link logoLink mt-2 " aria-current="page" href="#">
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
