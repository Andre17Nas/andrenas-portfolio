import * as S from './styled'
import ProfileImage from '../../styles/ProfileImage'

export default function CardProfile(){
    return(
        <S.ProfileWrapper>
            <ProfileImage src="/image/img.jpg" width="200px" height="200px"/>
            <h3>ANDRÉ NAS</h3>
            <p>Eae! meu nome é André do Nascimento Barroso, mais conhecido como André Nas. 
            Sou formado em Ciência da Computação mas que migrou para o mundo Web. 
            Apaixonado por Games tudo que toca põe alguma referencia escondida. </p>
        </S.ProfileWrapper>
    )
}