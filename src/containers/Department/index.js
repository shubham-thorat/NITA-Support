import React from 'react'
import './style.css'
import { useLocation } from 'react-router-dom'
import useDepartmentData from '../../Data/department'
import Navbar from '../../components/navbar'
import Footer from '../../components/Footer'

function Department() {
    const location = useLocation()
    const [data] = useDepartmentData(location.pathname)
    // console.log(data)
    return (
        <div>
            <Navbar/>
            <div>
                <h3> OverView</h3>
                <p className="passage">
                The Department of Computer Science and Engineering of National Institute of Technology Agartala offers an undergraduate and postgraduate programme in Computer Science and Engineering where students are encouraged to acquire knowledge facilities with an integrated thinking about education research & development, application and training. The students are provided knowledge to understand the fundamental of basic sciences and humanities, inter disciplinary knowledge, innovation, creative problem solving abilities, intellectual honest and professional ethics, capacity for team work in inter disciplinary, national and international environment. The first undergraduate batch rolled out in the year 2003. Since its inception in 1999, the department has always been recognized for excellence.
                </p>
            </div>
            <h3> Faculty</h3>
            {
                data.length ?
                    data.map(user =>
                        <div className="table-container" key={user.id}>
                            <div className="name">
                                <h3 className="heading"> {user.name}</h3>
                            </div>
                            <div className="userData">
                                <div className="item" style={{width: "130px"}}>
                                    <p className="field"> <strong> Username</strong> </p>
                                    <p className="field"> <strong> Email</strong> </p>
                                    <p className="field"> <strong> Phone</strong> </p>
                                    <p className="field"> <strong> Website</strong> </p>
                                </div>
                                <div className="item">
                                    <p className="field"> {user.username} </p>
                                    <p className="field"> {user.email} </p>
                                    <p className="field"> {user.phone} </p>
                                    <p className="field">{user.website} </p>
                                </div>
                                <div className="item">
                                    <img src={require('../../image/me.jpg').default} alt={user.username} className="staffimage"/>
                                </div>
                            </div>
                        </div>
                        ) :
                null
            }
            <Footer />
        </div>
                    )
}

export default Department
