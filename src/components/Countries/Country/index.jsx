import React from 'react'

import { Card, Details, Img } from './styles'

const Country = ({ country }) => {
    const formatNumber = (num) => num && num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

    return (
        <Card to={`/${country.name}`}>
            <Img className='flag' src={country.flag} alt={country.name}/>

            <Details>
                <h2>{country.name}</h2>

                <ul>
                    <li><strong>Population: </strong>{formatNumber(country.population)}</li>
                    <li><strong>Region: </strong>{country.region}</li>
                    <li><strong>Capital: </strong>{country.capital}</li>
                </ul>
            </Details>
        </Card>
    )
}

export default Country
