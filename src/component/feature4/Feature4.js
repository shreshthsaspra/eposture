import React from 'react';
import './Feature4.css';

const Feature4 = () => {
    return <>
        <div className="feature4">
            <div className="container">
                <div className="feature4_main">
                    <div className="feature1_main">
                        <img className='feature1_main_img' src="/images/f1.png" alt="" />
                        <div className="feature1_main_text">
                            <span>運動へのアドバイス</span>
                            <p>
                                タップすることで、さらなるメニューが表示されます。ここでは、何を使った、何を目的とした運動を行いたいのかをユーザーが選択す
                                ることで的確なアドバイスを出すことが可能です。 <br /> <br />

                                ユーザーがどれだけこの機能を、どのように活用したのかは、管理画面で一律で管理することが可能です。

                            </p>
                        </div>
                    </div>
                    <div className="feature2_main">
                        <div className="feature2_main_text">
                            <span><p className='feature2_main_text_h'>食事へのアドバイス</p>
                                <br />
                                <p className='feature2_main_text_p'>
                                    導入される事業者様が、自由にアドバイス項目、アンケート項目を設定することができます。 <br /> <br />
                                    ユーザーがどのようにアンケートに回答したのかのデータをもとに、ユーザーの食事に関するデータを取得、フィードバックすることが可能です。
                                </p>
                            </span>
                        </div>
                        <img className='feature2_main_img' src="/images/f2.png" alt="" />

                    </div>
                    <img className='feature4_main_img img-fluid' src="/images/mobile1.png" alt="" />
                    <img className='line1 img-fluid' src="/images/line1.png" alt="" />
                    <img className='line2 img-fluid' src="/images/line2.png" alt="" />
                    <img className='line3 img-fluid' src="/images/line3.png" alt="" />
                    <img className='line4 img-fluid' src="/images/line4.png" alt="" />




                    <div className="feature3_main">
                        <img className='feature3_main_img' src="/images/f3.png" alt="" />
                        <div className="feature3_main_text">
                            <span>姿勢へのアドバイス</span>
                            <p>
                                ユーザーが撮った画像、もしくはその場で撮影した画像を解析し、姿勢に対してフィードバックを自動で出すことができます。
                                。 <br /> <br />

                                送信された画像、撮影された画像は、解析結果を含めてサーバーに保存され、管理者画面から確認できます。


                            </p>
                        </div>


                    </div>

                    <div className="feature_main_4">
                        <div className="feature4_main_text">
                            <span><p className='feature4_main_text_h'>記録の確認</p>
                                <br />
                                <p className='feature4_main_text_p'>
                                    各項目を選択すると設定したウェブサイトに遷移し、設定し、定期的に記録した多種多様な測定項目（バイタル情報など）をデータ化、グラフ化して確認することができます。
                                    。 <br /> <br />
                                    それぞれのユーザーの情報は管理画面で確認することができCSVとして集計できます。
                                </p>
                            </span>
                        </div>
                        <img className='feature_main_img_4' src="/images/mobile1.png" alt="" />
                    </div>
                </div>
            </div>


        </div>
    </>;
};

export default Feature4;
