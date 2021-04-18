import React, { useState } from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/Footer'
import './style.css'
import LinkTable from '../../components/LinkTable'
import useData from '../../Data'


function Home(props) {
    const [imgno, setimgno] = useState(1)
    const leftclick = () => {
        setimgno(imgno == 1 ? imgno : imgno - 1)
    }

    const rightclick = () => {
        setimgno(imgno == 11 ? imgno : imgno + 1)
    }

    const [posts,comments,albums] = useData()
    return (
        <div>
            <Navbar />
            <section className="container">
                <div className="main-menu"> 
                    <div className="slideContents">
                        <h5 style={{color:"white",fontWeight:"bold",letterSpacing:"1px"}}>LATEST NEWS </h5>
                        <div className="news">
                            <p className="news-element"> <a href="#"> Notification for admission in M.Tech Programme (Sponsored) for the academic session 2021-22.</a> </p>
                            <p className="news-element"> <a href="#">The Department of MHSS is organizing an international conference on "Gender Studies and Women Empowerment".</a> </p>
                            <p className="news-element"> <a href="#"> Declaration of Holiday on 14th April, 2021 (Wednesday) - Birthday of Dr. B. R. Ambedkar.</a> </p>
                        </div>
                    </div>
                    <div className="slideImageSection">
                        <button className="back" onClick={leftclick} > <i className="fas fa-angle-left"></i> </button>
                        <div className="ImageSection">
                            <img id="image1" src={require(`../../image/slides/${imgno}.jpg`).default} alt="NITA GALLERY" />
                        </div>
                        <button className="front" onClick={rightclick}> <i className="fas fa-angle-right"></i> </button>
                    </div>
                </div>

                <div className="side-menu">
                    <div className="box" style={{backgroundColor:"#e9edfb"}}>
                       <LinkTable Data = {posts} text="Get Connected"/>
                    </div>
                    <div className="box" style={{backgroundColor:"#e9edfb"}}> 
                       <LinkTable Data = {comments} text="Resources"/>
                    </div>
                    <div className="box" style={{backgroundColor:"#e9edfb"}}> 
                       <LinkTable Data = {albums} text="Featured Links"/>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Home
