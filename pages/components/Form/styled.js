import styled from 'styled-components'

import { ToastContainer } from 'react-toastify'

export const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    height: 400px;
    
`
export const FormInput = styled.input`
    margin: 10px;
    padding-left: 4px;
    width: 400px;
    height: 40px;
    font-size: 1.2rem;
    border: none;
    border-bottom: 2px solid #EEEEEE;

    &:focus{
        outline: 2px solid #EEEEEE;
    }
`
export const FormTextArea = styled.textarea`
    margin: 10px;
    padding-left: 4px;
    width: 400px;
    height: 140px;
    font-size: 1.1rem;
    justify-content: baseline;
    border: 2px solid #EEEEEE;
    outline: #393E46;
`

export const FormButton = styled.button`
    width: 100px;
    height: 40px;
    background-color: #00ADB5;
    border: none;
    color: #FFF;
    text-transform: uppercase;    


    &:hover{
        background-color: #FFF;
        color: #00ADB5;
        border: 3px solid #EEEEEE;
        transition: 1s;
        cursor: pointer;
    }
`

