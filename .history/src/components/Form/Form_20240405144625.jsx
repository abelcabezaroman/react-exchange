import React from 'react'

export default function Form({amount, setAmount}) {
  return (
    <div>
      <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
    </div>
  )
}
