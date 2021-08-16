import styled from  'styled-components'

export const NavbarStyled = styled.nav`
    display: flex;
    position: relative;   
    letter-spacing: 0.65em;
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    float: right;
    z-index: 5;
    line-height: 60px;   
    margin: 0 auto;
    justify-content: center;
    width: 100vw;

    /* TABLET VERSION */
    @media only screen and (max-width: 768px){
        position: fixed;
        display: block;
        z-index: 15;
        background-color: #FFF;
        
    }
`
export const UlStyled = styled.ul`
    margin: 0;
    width: 100vw;
    display: flex;
    justify-content: flex-end;

    /* TABLET VERSION */
    @media only screen and (max-width: 768px){
        display: none;
        flex-direction: column;
        background-color: #FFF;
        align-items: center;
        justify-content: center;
        line-height: 150px;
        
        color: #000;
    }
`
export const LinkStyled = styled.li`
    text-decoration: none;
    list-style: none;
    margin-right: 20px;
    line-height: 100px;
    color: #FFF;
    display: inline-block;
    line-height: 40px;
    

    &:hover{
        border-bottom: 4px solid #00ADB5;
        cursor: pointer;
    }

    @media only screen and (max-width: 768px){
        display: block;
        line-height: 150px;
        color: #222831;
        font-weight: 300;

        &:hover{
            color: #00ADB5;
            border: none;
            cursor: pointer;
        }

        
    }
`
export const CheckboxStyled = styled.input`
    display: none;

    @media only screen and (max-width: 768px){   
        &:checked + ul{
            display: flex;
            
            
        }
    }
`
export const LabelStyled = styled.label`
    display: none;
    

    /* TABLET VERSION */
    @media only screen and (max-width: 768px){ 
        padding: 10px;
        margin-right: 30px;
        display: flex;
        float: right;
    }
`
