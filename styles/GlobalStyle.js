import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`

    body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
    }

    main {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        position: absolute;
        z-index: 5;
        width: 100vw;
        height: 100vh;
        align-items: center;
    }

    h1 {
        font-style: normal;
        font-weight: normal;
        font-size: 2.5rem;
        line-height: 115px;
        color: #FFF;
        text-align: center;
        margin-top: 54px;

    }
    
`

export default GlobalStyle;