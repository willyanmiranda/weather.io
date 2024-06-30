import styled from "styled-components";
import Lupa from "../../assets/icons/busca.svg"
import Logo from "../../assets/icons/logo-weather.png"

export const StyledHeader = styled.header `
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 120px;
    padding: 0 40px;

`

export const StyledLogo = styled.img.attrs({srcSet: Logo, alt: "logo"}) `
   width: 200px;
`

export const Search = styled.div `
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 500px;
    height: 60px;
    background-color: #1d1c1f;
    border-radius: 28px;
    padding: 0 20px;
    gap: 20px;
`
export const SearchIcon = styled.img.attrs({srcSet: Lupa, alt: "icon search"}) `
    width: 20px;
    height: 20px;
`
export const Input = styled.input.attrs({type: 'text', placeholder: 'Procure uma cidade...'}) `
    width: 100%;
    height: 60px;
    border-radius: 28px;
    padding: 0;
    background-color: #1d1c1f;
    outline: none;
    border: none;
    color: white;

    &::placeholder {
        color: white;
    }
`

export const LocationButton = styled.button `
    width: 100%;
    max-width: 160px;
    height: 50px;
    background-color: #b5a1e5;
    color: #100e17;
    border: none;
    border-radius: 28px;
`

