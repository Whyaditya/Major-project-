// src/components/AboutUs.js
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-us">
            <div id="new" style={{ backgroundImage: `url(/image/l2.jpg)` }}></div>
            <div id="l">
                <p id="b">About us-</p>
                <p id="f">Propertypal is a full stack service provider for all real estate needs, with services including property listings, property valuation, and buying. As the largest platform for buyers and sellers of property to connect in a transparent manner. Propertypal has an active base of over 15 lakh property listings.</p>
                <p id="f">Launched in Aug'06, Propertypal Realty Services Limited is one of the subsidiaries of Times Internet Limited (wholly owned subsidiary of Bennett, Coleman & Co. Ltd - The Times Group).</p>
                <p id="f">Propertypal has consolidated its position of being the No.1 property portal in India. To facilitate its users to buy/ sell/ rent properties even on the go, Propertypal has also come up with an all-new app & mobile site for users. They can now search properties & contact owners/agents even when on the move. With the new app users can also post property, check the responses received on them, and even contact the interested buyers/tenants instantly.</p>
                <p id="s">
                    For any further queries, feedback & alliances you can reach us at:-
                    <p id="new1">Email: support@Propertypal.com</p>
                </p>
            </div>
            <div id="r">
                <div>
                    <div className="r">
                        <div className="new" id="p1" style={{ backgroundImage: `url(/image/aditya_ayush.jpg)` }}></div>
                        <div className="d">
                            <div className="name">Aditya Ayush</div>
                            <div className="des">Founder & Project Manager & Developer<br />22601221195</div>
                        </div>
                    </div>
                    <div className="r">
                        <div className="d">
                            <div className="name">Shreya Kapoor</div>
                            <div className="des">Developer & co-founder<br />22601221221</div>
                        </div>
                        <div className="new" id="p2" style={{ backgroundImage: `url(/image/shreya.jpg)` }}></div>
                    </div>
                    <div className="r">
                        <div className="new" id="p3" style={{ backgroundImage: `url(/image/aniket.jpg)` }}></div>
                        <div className="d">
                            <div className="name">Aniket Kumar Sisodiya</div>
                            <div className="des">Developer & Executive Officer<br />22601221228</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="r">
                        <div className="new" id="p4" style={{ backgroundImage: `url(/image/himanshu.jpg)` }}></div>
                        <div className="d">
                            <div className="name">Himanshu Rai</div>
                            <div className="des">Founder & Developer<br />22601221238</div>
                        </div>
                    </div>
                    <div className="r">
                        <div className="d">
                            <div className="name">Baibhav Agarwal</div>
                            <div className="des">Developer & Chief Technology Officer<br />22601221092</div>
                        </div>
                        <div className="new" id="p5" style={{ backgroundImage: `url(/image/baibhav.jpg)` }}></div>
                    </div>
                    <div className="r">
                        <div className="new" id="p6" style={{ backgroundImage: `url(/image/kumar.jpg)` }}></div>
                        <div className="d">
                            <div className="name">Aaditya Kumar</div>
                            <div className="des">Testing & QA<br />22601221235</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
