import React from 'react';
import './Story.css';
import { Link } from 'react-router-dom';

const Story = () => {
    return (
        <>
            <section className="story" id="story">
                <div className="container">
                    <div className="story_rap">
                        <div className="story_heading">
                            <span>
                                <img className='story_logo me-4 mb-3' src="/images/logo.png" alt="Logo" />
                                開発者ストーリー
                            </span>
                        </div>
                        <div className="story_content">
                            <p>
                                2001年に初めての姿勢測定器の開発に携わり・・・ <br />

                                それまでスポーツクラブに通われているお客様へ、健康になるためには運動することが最も大切だとお伝えしていました。しかし実際は、足腰の痛みなど慢性的な症状を抱えながら、スポーツクラブに通って頂いていた方が多かったと思います。スポーツクラブの会員様を姿勢測定していくと、今まで知ることが出来なかった、
                                お客様の身体的な悩みや問題を目にすることが出来ました。また、それを緩和するために必要なことがわかってきました。最も大切なことは姿勢のゆがみが大きくなるとカラダへの負担が増え、さまざまな症状が現れ、逆に姿勢を整えると身体的な悩みや問題が楽になることも知りました。
                                <br />
                                小さいころは、落ち着きがなくロッカーの上を走るような子どもでした。学生の頃は、決められたことをするのが嫌い、工夫するのは得意でした。水泳は得意で、ジュニアオリンピックに出場したこともあります。


                            </p>
                            <div className="story_img py-3">
                                <img src="/images/story1.png" alt="Story Image" />
                            </div>
                            <p>
                                英語は苦手でしたが、留学して環境が変わり、学び方が変わることで面白いと思うようになります。大学専門課程で人体の事を勉強し始めると、周りの人に役に立てる仕事をしたいと思うようになりました。
                                <br />
                                帰国後、父が肋膜炎になり、退院後も身体をほとんど動かさなくなり健康状態は悪くなる一方。少しでも運動してもらいたかったのですが、いっぺん通りの助言やアドバイスでは生活習慣を変えることはできず、軽い脳梗塞を起こして歩けなくなり、晩年は寝たきりになりました。人は頭でわかっていても、心が動かないと行動できないことを実感しました。
                                <br />
                                健康によいものには興味があり、自身の健康には気づかっていましたが、生活環境の変化や、プレッシャーなどで体調を崩すことがありました。あるとき、発熱と全身の痛みで立ち上がることができなくなり、救急車で運ばれ、入院。ギランバレー症候群の疑いがあるので1ヶ月入院が必要と告げられ、パニックを起こしました。
                                <br />
                                しかし親身になって考えてくれる人たちに助けられ、落ち着いて考えたところ、治療方針に疑問があり、他の病院で診察を受けたところ、病気の兆候や入院の必要性はないとのこと。

                                <br />

                                <div className="bottom_img">
                            <img src="/images/footer1.png" alt="" />
                        </div>
                        <br />
                        <br />

                                その後、しばらくはめまいや感覚麻痺がありましたが、仕事に復帰することが出来きました。そのときに感じたことは「気の持ちようで症状は変化するもの」。もし気分が落ち込んだまま、必要のない治療を受けていれば、本当になにかの病気になっていたかもしれません。
                                <br />
                                これまで経験から、姿勢測定器を使って、より多くの方に「姿勢に興味を持ってもらい、ココロを動かして、健康になってもらいたい」と考えています。
                                <br />

                                姿勢のゆがみから健康に着目することが広まれば、との思いで、外部販売を開始し、現在ではさまざまな施設で導入されています。ご要望に応じてプログラムや帳票のカスタマイズも承ります。お気軽にお問合せください。
                                <br />

                            </p>

 
                        </div>
                        <Link to="/contact">
                        <div className=" pBox solution_button mt-5">
                            <div className="mt-5 me-5 pt-4">

                                <div className="nav_box nav_box_first pt-1">
                                    <p>お問合せはこちら <img className="img-fluid" style={{ width: "8%" }} src="/images/arrow.png" alt="arrow" /></p>
                                </div>
                                <div className="nav_box nav_box_second"></div>
                            </div>

                        </div>
                        </Link>

                       

                        {/* <div className="bottom_img">
                            <img src="/images/footer1.png" alt="" />
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Story
