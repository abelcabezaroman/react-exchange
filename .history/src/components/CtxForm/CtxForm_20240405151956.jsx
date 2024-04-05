import React from 'react'

export default function CtxForm({amount, setAmount}) {
  return (
    <div style={{marginBottom:"24px"}}>
      <input className='b-input' type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
    </div>
  )
}
