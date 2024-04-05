import React, { useEffect, useState } from 'react'

export default function Exchange() {


    const [rates, setRates] = useState([]);


    const getRates = async () => {
        const {data} = await axios("https://api.vatcomply.com/rates?base=USD")

    }

    useEffect(() => {
        getRates();
    }, [])

    return (
        <div>

        </div>
    )
}
