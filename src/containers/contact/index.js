import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/navbar'
import './style.css'

function Contact() {
    return (
        <div>
            <Navbar />
            <div className="contact-box">
                <img src={require(`../../image/Contact/image.jpg`).default} alt="NIT Agartala"/>
                    <h3 style={{ margin: "20px 0" }}> Contact Us</h3>
                <div className="info">
                    <p> <strong> Address : </strong> </p>
                    <p>  National Institute of Technology, Agartala </p>
                    <p> P.O.: NIT Agartala </p>
                    <p>Barjala, Jirania, TRIPURA (W) </p>
                    <p>Pin: 799046 </p>
                </div>
                <div>
                    <a href="" > Map and driving directions to NITA campus </a>
                </div>

                <div className="info">
                    <p style={{fontWeight:"500"}}> Office of Director  </p>
                    <p> Contact: : </p>
                    <p> Phone: 0381 2546630 </p>
                    <p>Fax: 0381-2546360 </p>
                </div>

                <div className="info">
                    <p style={{fontWeight:"500"}}> Office of Dean Academic  </p>
                    <p> Contact: : </p>
                    <p>Phone: 0381-2548537 (O), 0381-2548510 (O) </p>
                    <p>Fax: 0381-2548512, 0381-2546360 </p>
                </div>

                <div className="info">
                    <p style={{fontWeight:"500"}}> Office of Registrar  </p>
                    <p> Contact: : </p>
                    <p>Phone: 0381 2546629 (O)</p>
                    <p>Fax: 0381-2548512 </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
