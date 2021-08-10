import * as S from './styled'
import ProfileImage from '../../styles/ProfileImage'
import CardSocial from '../Card-Social'

export default function CardProfile(){
    return(
        <S.ProfileWrapper>
            <ProfileImage src="/image/img.jpg" width="200px" height="200px"/>
            <h3>ANDRÉ NAS</h3>
            <p>Eae! meu nome é André do Nascimento Barroso, sou formado em Ciência da Computação e sou apaixonado por desenvolvimento Web. 
            Estou em busca de me tornar especialista na Area em alguns anos. <br/>
            A gente pode trocar uma idéia sobre tecnologia, trabalho ou qualquer coisa! Minhas redes estão aqui embaixo. ^^ </p>
            <CardSocial/>
        </S.ProfileWrapper>
    )
}