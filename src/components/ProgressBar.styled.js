import styled from 'styled-components'

export const ProgressBarStyled = styled.div`
    height: 0.5rem;
    background-color: ${({ theme }) => theme.colors.tertiary};
    margin-top: 2rem;
    margin-left: 10%;
    margin-right: 10%;
    width: ${({ progress }) => progress + '%'};
    text-align: center;
    transition: all 1s ease-in-out;
    border-radius: 0.25rem;
    font-family: 'Courier New', Courier, monospace;
    font-size: 1rem;
`
