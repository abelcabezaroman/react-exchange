import React from 'react'
import "./Rate.scss";

export default function Rate({ data, amount }) {
    return (
        <div className='c-rate'>
            <h3>{data[0]}</h3>
            <p>{data[1]}</p>
            <h1><strong>{data[1] * amount}</strong></h1>
        </div>
    )
}
