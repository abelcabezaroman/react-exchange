import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Rates from '../CtxRates/CtxRates';
import Form from '../CtxForm/CtxForm';

export const ExchangeContext = React.createContext();

export default function CtxExchange() {
    const [rates, setRates] = useState([]);
    const [amount, setAmount] = useState(1);

    const getRates = async (base) => {
        const { data: { rates } } = await axios(`https://api.vatcomply.com/rates?base=${base}`)
        setRates(Object.entries(rates))
    }

    useEffect(() => {
        getRates("EUR");
    }, [])

    return (
        <ExchangeContext.Provider value={{ amount, setAmount , getRates }}>
            <div>
                <Form />
                <Rates data={rates}  />
            </div>
        </ExchangeContext.Provider>
    )
}
