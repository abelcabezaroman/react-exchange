import React, { useContext } from 'react'
import { ExchangeContext } from '../CtxExchange/CtxExchange'

export default function CtxForm() {
  
  const {amount, setAmount} = useContext(ExchangeContext)

  return (
    <div style={{marginBottom:"24px"}}>
      <input className='b-input' type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
    </div>
  )
}
