import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`

    body {
        margin: 0 auto;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        background-color: #EEEEEE;

    }

    main {
        margin: 0 auto;
        padding: 0;
        display: flex;
        flex-direction: column;
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

        @media(max-width: 360px){
            font-size: 3rem;
            text-align: center;
            margin: 100px 60px 0 10px;
        }
        
    }

    h2 {
        margin: 0 0 30px 0;
        font-weight: 200;
        font-size: 1.5rem;
        color: #FFF;

        @media(max-width: 360px){
            text-align: center;
        }
    }

    h3 {
        margin: 10px 0 20px 0 ;
        font-weight: 300;
        font-size: 30px;
    }

    p {
        
        width: 500px;
        font-weight: 300;
        font-size: 1rem;

        @media(max-width: 360px){
            font-size: 1.2rem;
        }
    }
    
`

export default GlobalStyle;