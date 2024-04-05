import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Rates from '../Rates/Rates';
import Form from '../Form/Form';

export default function Exchange() {
    const [rates, setRates] = useState([]);
    const [amount, setAmount] = useState(1);

    const getRates = async (base) => {
        debugger
        const {data: {rates}} = await axios(`https://api.vatcomply.com/rates?base=${base}`)
        setRates(Object.entries(rates))
    }

    useEffect(() => {
        getRates("EUR");
    }, [])

    return (
        <div>
            <Form amount={amount} setAmount={setAmount}/>
            <Rates data={rates} amount={amount} getRates={getRates}/>

        </div>
    )
}