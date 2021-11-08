import React from 'react'
import styled from 'styled-components'

import { useHistory } from 'react-router-dom'

const Back = ({ children }) => {
    const history = useHistory()

    return (
        <>
            <BackStyled onClick={() => history.push('/')}>
                <i className="fas fa-arrow-left"></i>
                Back
            </BackStyled>
            {children}
        </>
    )
}

export default Back

// ? styled
const BackStyled = styled.span`
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 3px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    color: ${props => props.theme.text};
    margin-bottom: 2rem;
    cursor: pointer;
    background: ${props => props.theme.elements};

    i {
        margin-right: 0.5rem;
    }
`