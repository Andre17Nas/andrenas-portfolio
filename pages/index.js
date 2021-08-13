import React, {useState} from 'react'
import * as S from '../styles/Styles'
import {Link} from 'react-scroll'
import Style from '../styles/Style.module.css'
import CardProfile from '../components/Card-Profile'
import Portfolio from '../components/Portfolio'
import {createClient} from 'contentful'
import Modal from '../components/Modal'
import { ToastContainer } from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'

export default function Home({projects}) {

  const [showModal, setShowModal] = useState(false)

  return (
    <S.MainWrapper>
      <S.Header/> 
      <main>
      <ToastContainer/>
          <nav className={Style.Navbar}>
            <ul>
            <Link smooth={true} to="section-home"><a>Home</a></Link>
            <Link smooth={true} to="section-portfolio"><a>Portfolio</a></Link>
            <Link><a onClick={()=> setShowModal(true)}>Contact</a></Link>
            </ul>
          </nav>
          <h1 id="section-home">FRONT END JUNIOR DEVELOPER</h1>
          <h2>.Next Js | Styled Component | Firebase | Contentful CMS </h2> 
          <CardProfile/>
          <div id="section-portfolio">
            <Portfolio props={projects}/>
          </div>          
          <S.DownloadCV>
            <a href="https://drive.google.com/file/d/1Dx5JvSYUh9X5tpdyFov6Kjc9m38JBTpw/view?usp=sharing" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCloudDownloadAlt} size="2x"/></a>
            <span>Baixar meu CV</span>
          </S.DownloadCV>
          <S.Footer> 
            <p> Copyright &copy; 2021 - André Nas. Todos os Direitos Reservados</p>
          </S.Footer>
          <Modal onClose={()=> setShowModal(false)} show={showModal}/>
      </main>  
    </S.MainWrapper>
  )
}

export async function getStaticProps(){
  const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  })

  const res = await client.getEntries({
      content_type: 'project'
  })

  return {
      props: {
          projects: res.items
      },
  }
}