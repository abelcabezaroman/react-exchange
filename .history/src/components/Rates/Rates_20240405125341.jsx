import React from 'react'

export default function Rates({data}) {
  return (
    <div>{data.map((item, index) =>  <div>
        <p>{item[0]}</p>
        <p>{item[1]}</p>
    </div>)}</div>
  )
}
