import styled from 'styled-components'

export const MainStyled = styled.main`
    display: grid;
    align-items: center;
    & h1 {
        font-size: ${(props) => props.theme.fontSizes.large};
        color: ${(props) => props.theme.colors.primary};
    }
    & h2 {
        font-size: ${(props) => props.theme.fontSizes.xxlarge};
        text-align: center;
        color: ${(props) => props.theme.colors.secondary};
        margin-top: 10vh;
    }
    & p {
        text-align: center;
        font-size: ${(props) => props.theme.fontSizes.large};
    }
`
