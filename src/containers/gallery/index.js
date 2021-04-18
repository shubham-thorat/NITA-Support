import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/navbar'
import './style.css'

function About() {
    
    return (
        <div>
            <Navbar/>
            <div className="Image-box">
                <img src={require(`../../image/Gallery/1.jpg`).default} alt="nice"/>
                <img src={require(`../../image/Gallery/2.jpg`).default} alt="nice"/>
                <img src={require(`../../image/Gallery/3.jpg`).default} alt="nice"/>
                <img src={require(`../../image/Gallery/4.jpg`).default} alt="nice"/>
                <img src={require(`../../image/Gallery/5.jpg`).default} alt="nice"/>
                <img src={require(`../../image/Gallery/6.jpg`).default} alt="nice"/>
                <img src={require(`../../image/Gallery/7.jpg`).default} alt="nice"/>
                <img src={require(`../../image/Gallery/8.jpg`).default} alt="nice"/>
                <img src={require(`../../image/Gallery/9.jpg`).default} alt="nice"/>
                <img src={require(`../../image/Gallery/10.jpg`).default} alt="nice"/>           
                <img src={require(`../../image/Gallery/11.jpg`).default} alt="nice"/>           
                <img src={require(`../../image/Gallery/12.jpg`).default} alt="nice"/>           
                <img src={require(`../../image/Gallery/13.jpg`).default} alt="nice"/>           
                <img src={require(`../../image/Gallery/14.jpg`).default} alt="nice"/>           
                <img src={require(`../../image/Gallery/15.jpg`).default} alt="nice"/>           
                <img src={require(`../../image/Gallery/16.jpg`).default} alt="nice"/>           
                <img src={require(`../../image/Gallery/17.jpg`).default} alt="nice"/>           
                <img src={require(`../../image/Gallery/18.jpg`).default} alt="nice"/>           
                <img src={require(`../../image/Gallery/19.jpg`).default} alt="nice"/>           
                <img src={require(`../../image/Gallery/20.jpg`).default} alt="nice"/>           
                <img src={require(`../../image/Gallery/22.jpg`).default} alt="nice"/>           
                <img src={require(`../../image/Gallery/21.jpg`).default} alt="nice"/>           
            </div>
            <Footer/>
        </div>
    )
}

export default About
