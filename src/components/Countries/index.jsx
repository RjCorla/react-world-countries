import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { CountriesStyled, Grid } from './styles'
import { Container } from '../../styles/global'
import SearchBar from './SearchBar' 
import FilterByRegion from './FilterByRegion'
import Country from './Country'

// ! dummy data
// import { countries } from '../data'

const Countries = () => {
    const [query, setQuery] = useState('')
    const [countries, setCountries] = useState([])

    // ? fetch all countries
    const fetchCountries = async () => {
        try {
            const { data } = await axios('https://restcountries.com/v2/all')

            setCountries(data)
        } catch (error) {
            console.log(error.message)
        }
    }

    // ? handle change
    const handleChange = async (e) => {
        setQuery(e.target.value)

        try {
            let { data } = await axios(`https://restcountries.com/v2/name/${e.target.value}`)

            setCountries(data)
        } catch (error) {
            console.log(error.message)
        }
    }

    // ? handle submit
    const handleSubmit = async (e) => {
        e.preventDefault()
        if(query === '') return

        try {
            const { data } = await axios(`https://restcountries.com/v2/name/${query}`)

            setCountries(data)
        } catch (error) {
            console.log(error.message)
        }

        setQuery('')
    } 

    // ? handle filter by region
    const handleClick = async (region) => {
        try {
            const { data } = await axios(`https://restcountries.com/v2/region/${region}`)

            setCountries(data)
        } catch (error) {
            console.log(error.message)
        }
    }

    // ? useEffect
    useEffect(() => {
        fetchCountries()
    }, [])

    return (
        <CountriesStyled>
            <Container>
                <div className="filter-flex">
                    <SearchBar query={query} handleSubmit={handleSubmit} handleChange={handleChange} />
                    <FilterByRegion handleClick={handleClick} />
                </div>

                {countries.length > 0 && (
                    <Grid>
                        {countries.map(country => (
                            <Country country={country} key={country.name} />
                        ))}
                    </Grid>
                )}
            </Container>
        </CountriesStyled>
    )
}

export default Countries
