import React from 'react'

import { Form } from './styles'

const SearchBar = ({ query, handleSubmit, handleChange }) => {
    return (
        <Form onSubmit={handleSubmit}>
            <button type="submit" className='btn'><i className="fas fa-search"></i></button>
            <input type="text" value={query} onChange={handleChange} placeholder='Search for a country...'/>
        </Form>
    )
}

export default SearchBar