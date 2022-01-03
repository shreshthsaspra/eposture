import React from 'react';
import Navbar from '../../component/Navbar/Navbar';

import './Contact.css';

const Contact = () => {
    return (
        <>
            <Navbar />
            <section className="contact_page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="contact_heading">
                                <h1>お問い合わせ</h1>
                                <p>弊社やサービスに関しては、お気軽にお問い合わせください。
                                    フォームの誤送信や,入力ミスにはお気をつけください。
                                    メールでのお問い合わせは、こちらのフォームからお願い致します。
                                </p>
                            </div>
                            <div className="contact_form">

                                <div className="row mb-3">
                                    <label for="colFormLabel" className="col-sm-3 col-form-label contact_label">お名前</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control control_input" id="colFormLabel" placeholder="" />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <label for="colFormLabel" className="col-sm-3 col-form-label contact_label">お名前(フリガナ)</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control control_input" id="colFormLabel" placeholder="" />
                                    </div>
                                </div>


                                <div className="row mb-3">
                                    <label for="colFormLabel" className="col-sm-3 col-form-label contact_label">会社名</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control control_input" id="colFormLabel" placeholder="" />
                                    </div>
                                </div>


                                <div className="row mb-3">
                                    <label for="colFormLabel" className="col-sm-3 col-form-label contact_label">電話番号</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control control_input" id="colFormLabel" placeholder="" />
                                    </div>
                                </div>


                                <div className="row mb-3">
                                    <label for="colFormLabel" className="col-sm-3 col-form-label contact_label">メールアドレス</label>
                                    <div className="col-sm-9">
                                        <input type="email" className="form-control control_input" id="colFormLabel" placeholder="" />
                                    </div>
                                </div>

                                <div class="mb-5">
                                    <label for="exampleFormControlTextarea1" className="form-label contact_label">お問い合わせ内容</label>
                                    <textarea className="form-control control_input mb-0" id="exampleFormControlTextarea1" rows="4"></textarea>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 mx-auto">
                                    <div className=" pBox my-5 pb-5">
                                    <div className="contact_box contact_box_first  pt-3">
                                        <p>お問合せはこちら</p>
                                    </div>
                                    <div className="contact_box contact_box_second"></div>
                                </div>
                                    </div>
                                </div>

                                

                            </div>
                        </div>
                    </div>
                </div>



            </section>
        </>
    )
}

export default Contact
