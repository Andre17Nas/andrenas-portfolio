import { faGithubAlt, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import * as S from '../../styles/Styles'

export default function CardSocial(){

    /*
    "https://www.linkedin.com/in/andrenas"
    "https://github.com/andre17nas"

    <p> Copyright &copy; 2021 - André Nas. Todos os Direitos Reservados</p>
    */

    return(
        <S.SocialWrapper>
            <a href="https://www.linkedin.com/in/andrenas" target="_blank"  >
            <S.LinkedinIconStyled icon={ faLinkedinIn } size={'2x'} color="#393E46"/></a>

            <a href="https://github.com/andre17nas" target="_blank">
            <S.GithubIconStyled icon={ faGithubAlt } size={'2x'} color="#393E46"/></a>

            <a href="https://www.linkedin.com/in/andrenas" target="_blank">
            <S.WhatsappIconStyled icon={ faWhatsapp } size={'2x'} color="#393E46"/></a>
        </S.SocialWrapper>
    )
}