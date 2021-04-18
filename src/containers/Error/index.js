import React from 'react'
import './style.css'
function Error(props) {
    return (
        <div className="box" style={{ justifyContent: 'center',alignItems: 'center',height:"100vh",width: '100vw'}}>
            <h1 style={{color:'red'}}> Error 404! </h1>
            <img src={require('../../image/error.jfif').default} alt="Error 404!"/>
        </div>
    )
}

export default Error
