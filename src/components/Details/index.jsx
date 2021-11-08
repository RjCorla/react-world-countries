import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { DetailsStyled, Grid, Figure, Content } from './styles'
import { Container } from '../../styles/global'
import Back from './Back'
import Spinner from './Spinner'
import Borders from './Borders'

// ! dummy data

import { detailsdata } from '../data'

const Details = ({ match }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [details, setDetails] = useState({})

    const formatNumber = (num) => num && num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    const formatArrOfObjects = (arr) => {
        // ? format name value of object into an array
        return arr.map(item => item.name)
    };

    // ? fetch country
    const fetchCountryDetails = async (country) => {
        try {
            const { data } = await axios(`https://restcountries.com/v2/name/${country}`)

            setDetails(data[0])
            setIsLoading(false)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        fetchCountryDetails(match.params.country)

    }, [match.params.country])

    return (
        <DetailsStyled>
            <Container>
                <Back>
                    {isLoading ? <Spinner /> : (
                        <Grid>
                            <Figure>
                                <img src={details.flag} alt={details.name}/>
                            </Figure>

                            <Content>
                                <h2 className='country'>{details.name}</h2>

                                <div className="row">
                                    <ul className="col">
                                        <li><strong>Native Name: </strong>{details.nativeName}</li>
                                        <li><strong>Population: </strong>{formatNumber(details.population)}</li>
                                        <li><strong>Region: </strong>{details.region}</li>
                                        <li><strong>Sub Region: </strong>{details.subregion}</li>
                                        <li><strong>Capital: </strong>{details.capital}</li>
                                    </ul>

                                    <ul className="col">
                                        {details.topLevelDomain && details.topLevelDomain.length > 0 ? (
                                            <li><strong>Top Level Domain: </strong>{details.topLevelDomain.join(', ')}</li>
                                        ) : ''}

                                        {details.currencies && details.currencies.length > 0 ? (
                                            <li><strong>Currencies: </strong>{formatArrOfObjects(details.currencies)}</li>
                                        ) : ''}

                                        {details.languages && details.languages.length > 0 ?  (
                                            <li><strong>Languages: </strong>{formatArrOfObjects(details.languages).join(', ')}</li>
                                        ) : ''}
                                    </ul>
                                </div>

                                {details.borders && details.borders.length > 0 ? (
                                    <Borders borders={details.borders} />
                                ) : ''}
                            </Content>
                        </Grid>
                    )}
                </Back>
            </Container>
        </DetailsStyled>
    )
}

export default Details
