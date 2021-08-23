import React from 'react'
import * as S from '../styles/Styles'
import CardProfile from '../components/Card-Profile'
import Portfolio from '../components/Portfolio'
import {createClient} from 'contentful'
import { ToastContainer } from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../components/Navbar'

export default function Home({projects}) {

  return (
    <S.MainWrapper> 
      <ToastContainer/>
          <Navbar/>
          <h1 id="section-home">FRONT END JUNIOR DEVELOPER</h1>
          <h2>.Next Js | Styled Component | Contentful CMS </h2> 
          <CardProfile/>
          <main id="section-portfolio">
            <Portfolio props={projects}/>
          </main>          
          <S.DownloadCV>
            <a href="https://drive.google.com/file/d/1Dx5JvSYUh9X5tpdyFov6Kjc9m38JBTpw/view?usp=sharing" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCloudDownloadAlt} size="2x"/></a>
            <span>Baixar meu CV</span>
          </S.DownloadCV>
          <S.Footer> 
            <p> Copyright &copy; 2021 - André Nas. Todos os Direitos Reservados</p>
          </S.Footer>
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
