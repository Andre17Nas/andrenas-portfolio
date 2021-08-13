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
`

export const ModalWrapper = styled.div`
    background: white;
    width: 500px;
    height: 400px;
    padding: 15px;
    z-index: 7;
`

export const ModalHeader = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 25px;    

    span:hover{
        color: #00ADB5;
        cursor: pointer;
    }
`

export const ModalBody = styled.div`
    padding-top: 10px;
`