import React from 'react'
import './feature.css'

const Feature = () => {
    return (
        <>
            <section className="feature">
                <div className="container">
                    <div className="feature_rap">
                        <div className="f_box">
                            <div className="feature_box feature_first_box ">
                                <div className="feature_list feature_first_box_top " style={{ marginTop: "6rem" }}>
                                    <div className="row">
                                        <div className="col-md-3 col-11 mx-auto">
                                            <div className="feature_list_image">
                                                <img className='img-fluid' src="/images/feature1.png" alt=" feature1" />
                                            </div>

                                        </div>
                                        <div className="col-md-9 col-11 mx-auto">
                                            <p className="feature_list_text ms-lg-5 mt-md-4">
                                                チャット形式のアンケートで, <br />
                                                回答に応じて食事,運動などを自動で顧客に提案
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="feature_list" >
                                    <div className="row">
                                        <div className="col-md-3 col-11 mx-auto">
                                            <div className="feature_list_image">
                                                <img className='img-fluid' src="/images/feature2.png" alt=" feature1" />
                                            </div>

                                        </div>
                                        <div className="col-md-9 col-11 mx-auto">
                                            <p className="feature_list_text ms-lg-5 mt-md-4">
                                                顧客の体重・血圧アドのデータも自動で蓄積。 <br />
                                                ウェブで全てのデータがグラフで確認可能。
                                            </p>
                                        </div>
                                    </div>
                                </div>


                                <div className="feature_list" >
                                    <div className="row">
                                        <div className="col-md-3 col-11 mx-auto">
                                            <div className="feature_list_image">
                                                <img className='img-fluid' src="/images/feature3.png" alt=" feature1" />
                                            </div>

                                        </div>
                                        <div className="col-md-9 col-11 mx-auto">
                                            <p className="feature_list_text ms-lg-5 mt-md-4">
                                                顧客の利用状況、各種記録をWebで確認。集計もラクラク。 <br />
                                                自動でデータを整理、欲しい情報へ簡単にアクセス。
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className=" pBox solution_button"> 
                                    <div className="mt-5 me-5 pt-4">

                                        <div className="nav_box nav_box_first  ">
                                            <p>お問合せはこちら <img className="img-fluid" style={{ width: "8%" }} src="/images/arrow.png" alt="arrow" /></p>
                                        </div>
                                        <div className="nav_box nav_box_second"></div>
                                    </div>

                                </div>


                            </div>
                            <div className="feature_box feature_box_second_box"></div>
                            <div className="feature_small_box feature_third_box">
                                <div className="d-flex  justify-content-center align-items-center mt-4 feature_third_top">
                                    <img className='feature_box3_img img-fluid' src="/images/logo.png" alt="Logo " />
                                    <span className="feature_box3_span">で何ができる？</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Feature
