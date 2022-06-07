import styled from 'styled-components'

export const FormStyled = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 5rem;
    border: 0.1rem solid #000;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    & form {
        font-family: monospace;
        font-size: 1rem;
        color: #000;
    }
    & input {
        display: none;
    }
`
