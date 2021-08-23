import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/*
    #222831 - Black 1
    #393E46 - black 2
    #00ADB5
    #EEEEEE
    */

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    background-image: url('/image/rectangle.svg');
    background-repeat: no-repeat;
    background-position: 50% -20%;

    @media(max-width: 360px){
        width: 130vw;


        h2 {
            color: #222831;
            font-weight: 300;
        }
    }

    @media(max-width: 768px){
        background-position: 100% 0;
    }
    
`
export const SocialWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 280px;
    justify-content: space-around;
`
export const Footer = styled.div`
    display: flex;
    text-align: center;
    margin-top: 100px;
    bottom: 0 ;
    p {
        width: 600px;
        text-align: center;
    }

    @media(width: 360px){
        p{
            width: auto;
        }
    }
`
export const PortfolioWrapper = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-weight: 300;
        font-size: 48px;
        line-height: 179.69%;
        /* or 86px */
        z-index: 2;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.49em;
        color: #222831;

        @media(max-width: 360px){
        margin: 0 auto;
        margin-top: 100px;

    }
    }

    

    /* TABLET VERSION */
    @media(max-width: 768px){
        h1{
            font-size: 2.5rem;
        }
    }
`
export const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr  1fr 1fr;
    margin-top: 40px;

    a{
        text-decoration: none;
        color: #222831;
    }

    /* TABLET VERSION */
    @media (max-width: 768px){
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        padding: 0 10px;
    }
`
export const PortfolioCard = styled.div`
    width: 150px;
    height: 150px;
    background-color: #FFF;
    margin: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    span {
        padding: 5px;
        /*
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        */
    }

    &:hover{
        background-color: #00ADB5;
        color: #FFF;
        transition: 1s;
    }

    @media(width: 360px){
        width: 140px;
        height: 140px;

        p{
            text-align: center;
        }
    }
`
export const LinkedinIconStyled = styled(FontAwesomeIcon)`
    &:hover{
        color: #2867B2;
        transition: 1s;
    }
` 
export const GithubIconStyled = styled(FontAwesomeIcon)`
    &:hover{
        /*
            #222831 - Black 1
            #393E46 - black 2
        */
        
        color: #222831;
        transition: 1s;
    }
`
export const WhatsappIconStyled = styled(FontAwesomeIcon)`
    &:hover{
        color: #4AC959;
        transition: 1s;
    }

`
/*
********** testesl
*/

export const DownloadCV = styled.div`
    display: flex;
    flex-direction: column;
    margin: 50px 0;
    align-items: center;

    a {
        color: #393E46;
    }
` 

