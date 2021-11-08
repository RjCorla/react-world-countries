import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { BordersStyled, BorderLink } from './styles'

// !dummy data
import { bordersData } from '../../data'

const Borders = ({ borders }) => {
    const [borderCountries, setBorderCountries] = useState([])

    const fetchBorderCountries = async (borders) => {
        try {
            const { data } = await axios(`https://restcountries.com/v2/alpha?codes=${borders.join(',')}`)

            setBorderCountries(data)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        fetchBorderCountries(borders)

    }, [borders])

    return (
        <BordersStyled>
            <strong>Border Countries:</strong>

            {borderCountries.map(border => (
                <BorderLink to={`./${border.name}`} key={border.name}>{border.name}</BorderLink>   
            ))}
        </BordersStyled>
    )
}

export default Borders
