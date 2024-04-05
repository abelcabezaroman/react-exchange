import React from 'react'
import "./Rate.scss";

export default function Rate({ data, amount }) {
    return (
        <div className='c-rate'>
            <h2>{data[0]}</h2>
            <p>{data[1]}</p>
            <h2><strong>{data[1] * amount}</strong></h2>
        </div>
    )
}
