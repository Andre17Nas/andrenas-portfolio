import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ToastContainer } from 'react-toastify'

/*
    #222831 - Black 1
    #393E46 - black 2
    #00ADB5
    #EEEEEE
    */

export const MainWrapper = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`
export const Header = styled.div`
    /*
    #222831
    #393E46
    #00ADB5
    #EEEEEE
    */
    margin: 0;
    width: 2000px;
    height: 400px;
    background-color: #222831; 
    transform: rotate(-23.5deg);
    margin-left: -500px;
`
export const Navbar = styled.nav`
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
    margin-top: 300px;
    bottom: 0 ;

    p {
        width: 600px;
        text-align: center;
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
`
export const PortfolioCard = styled.div`
    width: 150px;
    height: 150px;
    background-color: #FFF;
    /*
    box-shadow: 0 4px 4px 0 rgba(0,0,0, 0.2);
    */
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

export const ToastContainerStyled = styled(ToastContainer)`
 position: absolute;
 z-index: 10;
` 