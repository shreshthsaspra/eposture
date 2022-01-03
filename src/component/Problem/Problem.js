import React from 'react'
import './Problem.css'

const Problem = () => {
    return (
        <>
            <section className="problem">
                <div className="container">
                    <div className="problem_rap">
                        <div className="problem_heading">
                            <h1>こんな <span>お悩み</span>でないですか？</h1>
                        </div>
                        <div className="problem_content1 mb-5">
                            <span>
                                全ての顧客へバランスよくサービスを <br />
                                届けたいが、どうすれば？
                            </span>
                        </div>
                        <div className="">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="problem_content1 mt-5">
                                        <span>
                                            一人ひとりの顧客と向き合いたいが <br />
                                            人手も足りないし,時間の余裕が無い？
                                        </span>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <img className='img-fluid problem1_img' src="/images/problem1.png" alt="Problem Image" />
                                </div>
                            </div>
                        </div>

                        <div className="problem2_img">
                            <img className='img-fluid' src="/images/problem2.png" alt="Problem2" />
                        </div>

                    </div>
                </div>
            </section>
        </>
    ) 
}

export default Problem
