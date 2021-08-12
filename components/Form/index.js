import * as S from './styled'

export default function Form(){
    return(
       <S.FormWrapper>
           <S.FormInput placeholder="Digite seu e-mail" type="email"/>
           <S.FormInput placeholder="assunto" type="text"/>
           <S.FormTextArea placeholder="Messagem" type='textarea'/>
           <S.FormButton type="submit">Enviar</S.FormButton>
       </S.FormWrapper> 
    )
}