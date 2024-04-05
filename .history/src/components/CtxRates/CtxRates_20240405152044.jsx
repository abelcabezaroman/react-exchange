import React from 'react'
import Rate from '../CtxRate/CtxRate'
import "./CtxRates.scss";
export default function CtxRates({ data, amount, getRates }) {
    return (
        <div className='c-rates'>{data.map((item, index) => <Rate key={index}x data={item} amount={amount} getRates={getRates}/>)}</div>
    )
}
