import React from 'react'
import './Hero.css';
import ScrollAnimation from 'react-animate-on-scroll';

const Hero = () => {
    return (
        <>
            <section className="hero my-5">
                <div className="container">
                    <div className="main_hero">
                        <div className="row d-flex justify-content-center align-items-center  ">
                            <div className="col-lg-5 col-11 mx-auto ">
                                <div className="d-flex justify-content-center hero_img_left mx-auto">
                                    <ScrollAnimation duration={5} animateIn='fadeIn' animateOnce={true}>
                                        <img className="heroImage" src="/images/mobile1.png" alt="Hero Images" />
                                    </ScrollAnimation>
                                </div>

 
                            </div>


                            <div className="col-lg-7 col-11 mx-auto ">
                            <ScrollAnimation duration={5} animateIn='fadeIn' animateOnce={true}>
                                <img className="img-fluid hero_right_image" src="/images/logo.png" alt="logo image" />
                               

                                    <p className="hero_para mt-5">
                                        アナログだったヘルスケアサービスを  <br />
                                        顧客が使い慣れた
                                        <img className="lineImage mx-1" src="/images/line.png" alt="line image" />
                                        でデジタル化。 <br />
                                        顧客とのコミュニケーションから管理まで <br />
                                        Webでどこからでも可能にするサービスです。
                                    </p>
                                </ScrollAnimation>

                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Hero
