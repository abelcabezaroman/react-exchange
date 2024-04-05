import React from 'react'
import Rate from '../CtxRate/CtxRate'
import "./CtxRates.scss";
export default function CtxRates({ data }) {
    return (
        <div className='c-rates'>{data.map((item, index) => <Rate key={index}x data={item} />)}</div>
    )
}
