import React, { useEffect, useState } from 'react'

export default function Exchange() {


    const [rates, setRates] = useState([]);


    const getRates = async () => {
        const {data: {rates}} = await axios("https://api.vatcomply.com/rates?base=USD")
        setRates(rates)
    }

    useEffect(() => {
        getRates();
    }, [])

    return (
        <div>

        </div>
    )
}
