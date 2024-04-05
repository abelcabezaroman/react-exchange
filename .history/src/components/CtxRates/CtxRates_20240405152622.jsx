import React from 'react'
import Rate from '../CtxRate/CtxRate'
import "./CtxRates.scss";
export default function CtxRates({ data, getRates }) {
    return (
        <div className='c-rates'>{data.map((item, index) => <Rate key={index}x data={item} getRates={getRates}/>)}</div>
    )
}
