import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Header = styled.div`
    /*
    #222831
    #393E46
    #00ADB5
    #EEEEEE
    */
    margin: 0;
    position: relative;
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