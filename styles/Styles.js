import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const PortfolioCard = styled.div`
    width: 225px;
    height: 200px;
    background-color: #FFF;
    box-shadow: 0 4px 4px 0 rgba(0,0,0, 0.2);
    margin-left: 20px;
    display: flex;
    flex-direction: column;



    span {
        padding: 5px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 215px;
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
        /**/
        transition: 1s;
    }
`
export const WhatsappIconStyled = styled(FontAwesomeIcon)`
    &:hover{
        color: #4AC959;
        transition: 1s;
    }
`