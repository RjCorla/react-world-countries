import React from 'react'

import { Container } from '../../styles/global'
import { HeaderStyled, Logo, ThemeSwitcher } from './styles'

const Header = ({ isDark, setIsDark }) => {
    return (
        <HeaderStyled>
            <Container flex center between>
                <Logo>Where in the world?</Logo>

                <ThemeSwitcher>
                    <label className="switch">
                        <input onChange={() => setIsDark(!isDark)} type="checkbox"/>

                        <div className="toggle-wrapper">
                            <span className="toggle">
                                <i className={`fas ${isDark ? 'fa-moon' : 'fa-sun'}`}></i>
                            </span>
                        </div>
                    </label>

                    <h6>{isDark ? 'Dark Mode' : 'Light Mode'}</h6>
                </ThemeSwitcher>
            </Container>
        </HeaderStyled>
    )
}

export default Header
