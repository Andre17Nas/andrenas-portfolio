import styled from 'styled-components'

export const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    height: 400px;

    @media(max-width: 360px){
        width: 300px;
    }
    
    @media(max-width: 768px){
        width: 400px;
    }
`
export const FormInput = styled.input`
    margin: 10px;
    padding-left: 4px;
    width: 400px;
    height: 40px;
    font-size: 1.1rem;
    border: none;
    border-bottom: 2px solid #EEEEEE;

    &:focus{
        outline: 2px solid #EEEEEE;
    }

    @media(max-width: 360px){
        width: 300px;
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

    @media(max-width: 360px){
        width: 300px;
    }
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

