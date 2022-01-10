import React from 'react'
import './Problem.css'
import ScrollAnimation from 'react-animate-on-scroll';


const Problem = () => {
    return (
        <>
            <section className="problem">
                <div className="container">
                    <div className="problem_rap">
                        <div className="problem_heading">
                        <ScrollAnimation duration={3}  animateIn='fadeIn' animateOnce={true}>

                            <h1>こんな <span>お悩み</span>でないですか？</h1>
                            </ScrollAnimation>
                        </div>
                        <div className="problem_content1 mb-5">
                        <ScrollAnimation duration={3} delay={100} animateIn='fadeIn' animateOnce={true}>

                            <span>
                                全ての顧客へバランスよくサービスを <br />
                                届けたいが、どうすれば？
                            </span>
                            </ScrollAnimation>
                        </div>
                        <div className="">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="problem_content1 mt-5">
                         <ScrollAnimation duration={3} delay={100}  animateIn='fadeIn' animateOnce={true}>

                                        <span>
                                            一人ひとりの顧客と向き合いたいが <br />
                                            人手も足りないし,時間の余裕が無い？
                                        </span>
                                        </ScrollAnimation>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                         <ScrollAnimation duration={3} delay={200}  animateIn='fadeIn' animateOnce={true}>

                                    <img className='img-fluid problem1_img' src="/images/problem1.png" alt="Problem Image" />
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div> 


                        <ScrollAnimation duration={3} delay={300}  animateIn='fadeIn' animateOnce={true}>
                        <div className="problem2_img">
                   

                            <img className='img-fluid' src="/images/problem2.png" alt="Problem2" />
                           
                        </div>
                        </ScrollAnimation>

                    </div>
                </div>
            </section>
        </>
    ) 
}

export default Problem
