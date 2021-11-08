import React, { useState } from 'react'

import { FilterStyled } from './styles'

const FilterByRegion = ({ handleClick }) => {
    const [showDropDown, setShowDropDown] = useState(false)

    return (
        <FilterStyled onClick={() => setShowDropDown(!showDropDown)} className={showDropDown ? 'show' : ''}>
            <span>Filter by Region</span>
            <i className='fas fa-chevron-down'></i>
            <ul>
                <li onClick={() => handleClick('africa')}>Africa</li>
                <li onClick={() => handleClick('americas')}>Americas</li>
                <li onClick={() => handleClick('asia')}>Asia</li>
                <li onClick={() => handleClick('europe')}>Europe</li>
                <li onClick={() => handleClick('oceania')}>Oceania</li>
            </ul>
        </FilterStyled>
    )
}

export default FilterByRegion