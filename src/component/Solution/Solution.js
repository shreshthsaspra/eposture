import React from 'react'
import './Solution.css'
import ScrollAnimation from 'react-animate-on-scroll';


const Solution = () => {
    return (
        <>
            <section className="solution">
                <div className="container">
                    <div className="solution_heading">
                        <ScrollAnimation duration={4} animateIn='fadeIn' animateOnce={true}>

                            <p> それ  <img className='img-fluid mx-3 solution_logo' src="/images/logo.png" alt="logo" /> で解決できます！</p>
                        </ScrollAnimation>
                    </div>
                    <div className="solution_rap">


                        <div className="row">
                            <div className="col-lg-5 mx-auto">
                                <ScrollAnimation duration={4} delay={100} animateIn='fadeIn' animateOnce={true}>

                                    <img className='img-fluid solution_img1' src="/images/solution1.png" alt="Solution 1 Images" />
                                </ScrollAnimation>
                            </div>
                            <div className="col-lg-7">
                                <ScrollAnimation duration={4} delay={200} animateIn='fadeIn' animateOnce={true}>

                                    <p className="solution_para">
                                        高齢者に最も利用されている <img className='solution_para_img' src="/images/line.png" alt="line image" /> を
                                        <br />活  用することで全ての顧客が使い易く、便利。 <br />
                                        必要な情報もいつでもWebで確認でき、 <br />
                                        フィードバックも簡単。
                                    </p>


                                    <div className=" pBox solution_button">
                                        <div className="nav_box nav_box_first pt-1">
                                            <p>お問合せはこちら <img className="img-fluid" style={{ width: "8%" }} src="/images/arrow.png" alt="arrow" /></p>
                                        </div>
                                        <div className="nav_box nav_box_second"></div>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                        <div className="three_solution ">
                            <div className="">
                            <ScrollAnimation duration={4} delay={100} animateIn='fadeIn' animateOnce={true}>


                                <div className="row">

                                    <div className="col-lg-4 col-11 mx-auto feature_bottom_margin ">
                                        {/* <ScrollAnimation duration={4}  animateIn='fadeIn' animateOnce={true}> */}

                                        <div className="solution_circle">
                                            <div className="solution_number">
                                                <span>1</span>
                                            </div>
                                        </div>
                                        {/* </ScrollAnimation> */}

                                            <div className="solution_box">
                                                <div className="solution_box_text " style={{ textAlign: "right" }}>
                                                    <p>電話やFAXは廃止。 <br />
                                                        チャットで簡単に <br />
                                                        顧客とやり取り</p>
                                                </div>
                                            </div>
                                        <div className="solution3_1_img">
                                            <img className="img-fluid  " src="/images/solution3_1.png" alt="Solution 1" />
                                        </div>



                                    </div>
                                    <div className="col-lg-4 col-11 mx-auto feature_bottom_margin">
                                    
                                        <div className="solution_circle">
                                            <div className="solution_number">
                                                <span>2</span>
                                            </div>
                                        </div>
                                        <div className="solution_box">
                                            <div className="solution_box_text">
                                                <p>多数の顧客の情報も <br />
                                                    自動的に収集,解析
                                                </p>
                                            </div>


                                        </div>
                                        <div className="solution3_2_img">
                                            <img className="img-fluid  " src="/images/solution3_2.png" alt="Solution 1" />
                                        </div>

                                    </div>
                                    <div className="col-lg-4 col-11 mx-auto feature_bottom_margin">

                                        <div className="solution_circle">
                                            <div className="solution_number">
                                                <span>3</span>
                                            </div>
                                        </div>


                                        <div className="solution_box">
                                            <div className="solution_box_text" style={{ textAlign: "center" }}>
                                                <p>誰もが使い慣れた <br />
                                                    LINEで顧客もらくらく <br />
                                                    使いやすい</p>
                                            </div>
                                        </div>
                                        <div className="solution3_3_img">
                                            <img className="img-fluid  " src="/images/line.png" alt="Solution 1" />
                                        </div>

                                    </div>

                                </div>
                                </ScrollAnimation>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Solution
