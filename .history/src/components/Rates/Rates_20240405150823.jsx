import React from 'react'
import Rate from '../Rate/Rate'
import "./Rates.scss";
export default function Rates({ data, amount, getRates }) {
    return (
        <div className='c-rates'>{data.map((item, index) => <Rate key={index}x data={item} amount={amount} getRates={getRates}/>)}</div>
    )
}
