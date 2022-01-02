import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className="footer my-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <img className='footer_logo' src="/images/logo.png" alt="" />
                        </div>
                        <div className="col-lg-6">
                            <ul className='footer_list mt-3'>
                                <a href='#feature_next'>
                                    <li>TOP　</li>
                                </a>
                                <a href='#feature_next'>
                                    <li>サービス　</li>
                                </a>
                                <a href='#feature_next'>
                                    <li>お困り</li>
                                </a>
                                <a href='#feature_next'>
                                    <li>ポイント</li>
                                </a>
                                <a href='#feature_next'>
                                    <li>動画</li>
                                </a>
                                <a href='#feature_next'>
                                    <li>ストーリー</li>
                                </a>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <Link to="/contact" className="nav-link d-flex justify-content-end ">
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
            </footer>
        </>
    )
}

export default Footer
