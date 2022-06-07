import styled from 'styled-components'

export const ProgressBarStyled = styled.div`
    position: absolute;
    width: 100%;
    max-width: 30rem;
    height: 0.2rem;
    background-color: ${({ theme }) => theme.colors.tertiary};
    margin-top: 2rem;
    width: ${({ progress }) => progress + '%'};
    text-align: center;
    transition: all 1s ease-in-out;
    border-radius: 0.25rem;
    font-family: 'Courier New', Courier, monospace;
    font-size: ${({ theme }) => theme.fontSizes.small};
`
