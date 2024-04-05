import React, { useEffect, useState } from 'react'

export default function Exchange() {


    const [rates, setRates] = useState([]);


    const getRates = async () => {
        const {data: {rates}} = await axios("https://api.vatcomply.com/rates?base=EUR")
        setRates(rates)
    }

    useEffect(() => {
        getRates();
    }, [])

    console.log(rates);

    return (
        <div>

        </div>
    )
}
