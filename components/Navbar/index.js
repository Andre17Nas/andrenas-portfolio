import * as S from './styled'
import {Link} from 'react-scroll'
import {useState, useEffect} from 'react'
import Modal from '../Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar(){

    const [showModal, setShowModal] = useState(false)

    /*
       useEffect(()=>{
        if(showModal){
            document.getElementById('nav').style.backgroundColor = '#FFF';
        }else{
            document.getElementById('nav').style.backgroundColor = 'none';
        }   

    })
    */

    function HideMenu(){
        document.getElementById('toggle').checked = false;
    }
    

    return(
        <S.NavbarStyled>
            <S.LabelStyled for="toggle" id="label-toggle"><FontAwesomeIcon icon={faBars} size={'3x'}/></S.LabelStyled>
            <S.CheckboxStyled type='checkbox' id='toggle'></S.CheckboxStyled>
            <S.UlStyled id='ul'>
                <Link smooth={true} to="section-home" onClick={HideMenu}><S.LinkStyled >Home</S.LinkStyled></Link>
                <Link smooth={true} to="section-portfolio" onClick={HideMenu}><S.LinkStyled >Portfolio</S.LinkStyled></Link>
                <Link smooth={true} to="section-contact" onClick={HideMenu}><S.LinkStyled onClick={()=> setShowModal(true)}>Contact</S.LinkStyled></Link>
            </S.UlStyled>
            
            <Modal onClose={()=> setShowModal(false)} show={showModal}/>
        </S.NavbarStyled>
    )
}