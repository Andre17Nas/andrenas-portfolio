import { faGithubAlt, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import * as S from '../../styles/Styles'
import { createClient } from 'contentful'

export default function CardSocial(){

    /*
    
    */

    return(
        <S.SocialWrapper>
            <a href="https://www.linkedin.com/in/andrenas" target="_blank" rel="noreferrer" >
            <S.LinkedinIconStyled icon={ faLinkedinIn } size={'2x'} color="#393E46"/></a>

            <a href="https://github.com/andre17nas" target="_blank" rel="noreferrer">
            <S.GithubIconStyled icon={ faGithubAlt } size={'2x'} color="#393E46"/></a>

            <a href="https://www.linkedin.com/in/andrenas" target="_blank" rel="noreferrer">
            <S.WhatsappIconStyled icon={ faWhatsapp } size={'2x'} color="#393E46"/></a>
        </S.SocialWrapper>
    )
}
