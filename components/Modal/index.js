import React, { useState, useEffect} from 'react'
import ReactDOM from "react-dom";
import Form from '../Form';
import * as S from "./styled";

const Modal = ({show, onClose}) =>{
    const [isBrowser, setIsBrowser] = useState(false)

    useEffect(() => {
        setIsBrowser(true)
    }, [])

    const handleCloseClick = (e)=>{
        e.preventDefault()
        onClose()
    }

    const modalContent = show ? (
        <S.ModalOverlay>
            <S.ModalWrapper>
                <S.ModalHeader>
                    <span onClick={handleCloseClick}>X</span>
                </S.ModalHeader>
                <S.ModalBody>
                    <Form/>
                </S.ModalBody>
            </S.ModalWrapper>
        </S.ModalOverlay>
    ) : null;

    if(isBrowser){
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById('modal-root')
        )
    }else{
        return null
    }
}

export default Modal;