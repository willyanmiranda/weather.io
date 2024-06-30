import React from 'react'
import { StyledHeader, Search, Input, SearchIcon,StyledLogo, LocationButton } from '../styles/Header.styled'

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo/>
      <Search>
        <SearchIcon/>
        <Input/>
      </Search>
      <LocationButton>
        Localização atual
      </LocationButton>
    </StyledHeader>
  )
}

export default Header