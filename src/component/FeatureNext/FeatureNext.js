import React from 'react';
import './FeatureNext.css'

const FeatureNext = () => {
    return (
        <div>
            <section className="feature_next" id="feature_next">
                <div className="container">
                    <div className="feature_next_rap">
                        <div className="feature_next_heading">
                            <span>
                                <img className='img-fluid feature_next_logo me-4 mt-4' src="/images/logo.png" alt="Logo" />
                                LINEチャットボットが「あなたの顧客の悩みに役立つ」サンプル事例
                            </span>
                        </div>
                        <div className="feature_next_content">
                            <div className="feature_next_left_content">
                                <p>
                                    体の動きが軽くなる <br />
                                    足に痛みがあったが楽になった <br />
                                    以前は、立ち上がるときにふらつくことがあったが、 <br />
                                    しっかり立つことができた <br />
                                    筋肉がつき、歩幅が広くなった <br />
                                    以前より、歩いても違和感が出なくなった <br />
                                    椅子に座ったとき、お腹が気になっていたが、少しすっきりした <br />
                                    肩・首が動きづらく、腕が上げづらいのが、動きがよくなってきた <br />
                                    自宅で家事をすることが辛かったが、楽になってきた <br />
                                    普段の食事に気を使うようになり、１０品目を取るように注意するようになってきた自分では食事の量が多いと思っていたが、少ないことに気づき注意するようになった
                                </p>
                            </div>
                            <div className="feature_next_right_content">
                            <img src="/images/featureNext.png" alt="FeatureNext Images" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FeatureNext
