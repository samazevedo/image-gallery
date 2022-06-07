import styled from 'styled-components'

export const ProgressBarStyled = styled.div`
    position: absolute;
    width: 100%;
    max-width: 25rem;
    height: 0.1rem;
    background-color: ${({ theme }) => theme.colors.quinary};
    margin-top: 2rem;
    width: ${({ progress }) => progress + '%'};
    text-align: center;
    transition: all 1s ease-in-out;
    border-radius: 0.25rem;
    font-family: 'Courier New', Courier, monospace;
    font-size: ${({ theme }) => theme.fontSizes.small};
`
