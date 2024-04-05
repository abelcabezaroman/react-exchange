import React from 'react'
import "./CtxRate.scss";

export default function CtxRate({ data, getRates }) {
  const {amount} = useContext(ExchangeContext)

    return (
        <div className={data[1] === 1 ? 'c-rate c-rate--selected' : 'c-rate'}  onClick={() => getRates(data[0])}>
            <h2>{data[0]}</h2>
            <p>{data[1]}</p>
            <h2><strong>{data[1] * amount}</strong></h2>
        </div>
    )
}
