import React from 'react'
import './style.css'

function LinkTable({ Data, text }) {
    return (
        <div className="Linktable">
            <h2 className="title"> {text}</h2>
            <ul className="table">
                {
                    Data.slice(0,15).map(data =><li key={data.id} className="link-column"> <a href="#"> {data.title!=null ? data.title : data.name} </a></li> )
                }
            </ul>
        </div>
    )
}

export default LinkTable
