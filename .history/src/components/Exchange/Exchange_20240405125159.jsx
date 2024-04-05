import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Exchange() {


    const [rates, setRates] = useState([]);


    const getRates = async () => {
        const {data: {rates}} = await axios("https://api.vatcomply.com/rates?base=EUR")
        setRates(Object.entries(rates))
    }

    useEffect(() => {
        getRates();
    }, [])


    return (
        <div>

        </div>
    )
}
