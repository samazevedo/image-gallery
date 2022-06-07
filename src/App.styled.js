import styled from 'styled-components'

export const MainStyled = styled.main`
    display: grid;
    grid-template-rows: 1fr 0.5fr 1fr 3fr;
    justify-items: center;
    & h1 {
        position: fixed;
        top: 1%;
        left: 2%;
        font-size: ${(props) => props.theme.fontSizes.large};
        color: ${(props) => props.theme.colors.primary};
    }
    & h2 {
        font-size: ${(props) => props.theme.fontSizes.xxlarge};
        color: ${(props) => props.theme.colors.secondary};
        margin-top: 10vh;
    }
    & p {
        font-size: ${(props) => props.theme.fontSizes.large};
    }
`
