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
        align-items: center;
    }

    h1 {
        font-style: normal;
        font-weight: normal;
        font-size: 2.5rem;
        color: #FFF;
        text-align: center;
        margin-top: 54px;
        margin-bottom: 0;
    }

    h2 {
        margin: 0 0 30px 0;
        font-weight: 200;
        font-size: 1.5rem;
        color: #FFF;
    }

    h3 {
        margin: 10px 0 20px 0 ;
        font-weight: 300;
        font-size: 30px;
    }

    p {
        
        width: 200px;
        font-weight: 300;
        font-size: 1rem;
    }
    
`

export default GlobalStyle;