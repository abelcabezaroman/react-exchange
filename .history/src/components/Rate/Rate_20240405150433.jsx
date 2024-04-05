import React from 'react'
import "./Rate.scss";

export default function Rate({ data, amount }) {
    return (
        <div className='c-rate'>
            <p>{data[0]}</p>
            <p>{data[1]}</p>
            <h2><strong>{data[1] * amount}</strong></h2>
        </div>
    )
}
