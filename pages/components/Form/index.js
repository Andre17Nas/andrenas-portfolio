import * as S from './styled'
import React from 'react'
import emailjs from 'emailjs-com'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Form(){


    function sendEmail(e){

        e.preventDefault();

        emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, 
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, e.target, 
            process.env.NEXT_PUBLIC_EMAILJS_USER_ID)
        .then((result)=>{
            toast.success('Mensagem Enviada com Sucesso')
        }).catch((error)=>{
            toast.error(error)
        })
        e.target.reset();
    }

    return(
       <S.FormWrapper onSubmit={sendEmail}>
           <S.FormInput required placeholder="Nome Completo" type="text" name="name"/>
           <S.FormInput required placeholder="E-mail" type="email" name="email"/>
           <S.FormTextArea required placeholder="Messagem" type='textarea' name="message"/>
           <S.FormButton>Enviar</S.FormButton>
       </S.FormWrapper> 
    )
}
