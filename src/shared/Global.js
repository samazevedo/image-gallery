import { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`
    /* Reset / Normalize */



*,
*:before,
*:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    font-weight: inherit;
    font-style: inherit;
    font-family: inherit;
    vertical-align: baseline;
    background-color: transparent;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    text-size-adjust: none;
}
html {
    font-size: 1rem;
    scroll-behavior: smooth;
}
body {
    line-height: 1.5;
    font-family: 'Birthstone', cursive;
}
ol,
ul {
    list-style-type: none;
}
a {
    text-decoration: none;
    color: inherit;
}
footer,
header,
nav,
section,
main {
    display: block;
}
input {
    -webkit-appearance: none;
    border-radius: 0;
}
input:focus {
    outline: none;
}

blockquote,
q {
    quotes: none;
    &:after,
    &:before {
        content: '';
        content: none;
    }
}

// Remember to define focus styles.

// Remember to define inserts somehow.
ins {
    text-decoration: none;
}

del {
    text-decoration: line-through;
}

// Tables still need 'cellspacing="0"' in the markup.
table {
    border-collapse: separate;
    border-spacing: 0;
}

caption,
th,
td {
    text-align: left;
}
table,
td,
th {
    vertical-align: middle;
}
`
