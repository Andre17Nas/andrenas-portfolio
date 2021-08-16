import styled from "styled-components";

export const ModalOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 5;

    @media only screen and(max-width: 768px){

    }
`

export const ModalWrapper = styled.div`
    background-color: #FFF;
    width: 500px;
    height: 400px;
    padding: 15px;
    z-index: 7;

    @media (max-width: 768px){
        width: 400px;
    }
    
`

export const ModalHeader = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 25px;    

    span:hover{
        color: #00ADB5;
        cursor: pointer;
    }

    @media only screen and(max-width: 768px){
        
    }
    
`

export const ModalBody = styled.div`
    padding-top: 10px;

    @media (max-width: 768px){
        height: 360px;
    }
`