import styled from 'styled-components'

export const FormStyled = styled.form`
    width: 100%;
    height: 100%;
    padding: 2% 0;
    font-family: monospace;
    font-size: ${({ theme }) => theme.fontSizes.xsmall};
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.quaternary};
    border-radius: 3rem;
    border: 0.1px solid ${({ theme }) => theme.colors.secondary};
    width: 3rem;
    height: 3rem;
    & input {
        width: 3rem;
        height: 3rem;
        opacity: 0;
        cursor: pointer;
    }
    & .output {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 3rem;
        height: 3rem;
        & .error {
            color: ${({ theme }) => theme.colors.primary};
            font-size: ${({ theme }) => theme.fontSizes.xsmall};
            width: 10rem;
        }
    }
`
