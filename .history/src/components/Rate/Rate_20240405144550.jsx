import React from 'react'

export default function Rate({ data, amount }) {
    return (
        <div>
            <p>{data[0]}</p>
            <p>{data[1]}</p>
            <p>{data[1] * amount}</p>
        </div>
    )
}
