import React from 'react'
import Rate from '../Rate/Rate'

export default function Rates({ data }) {
    return (
        <div>{data.map((item, index) => <Rate key={index} data={item} />)}</div>
    )
}
