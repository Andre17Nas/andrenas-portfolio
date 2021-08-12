import React, {useState} from 'react'
import * as S from '../styles/Styles'
import Link from 'next/link'
import Style from '../styles/Style.module.css'
import CardProfile from './components/Card-Profile'
import Portfolio from './components/Portfolio'
import {createClient} from 'contentful'
import Modal from './components/Modal'
import { ToastContainer } from 'react-toastify'

export default function Home({projects}) {

  const [showModal, setShowModal] = useState(false)

  return (
    <S.MainWrapper>
      <S.Header/> 
      <main>
      <ToastContainer/>
          <nav className={Style.Navbar}>
            <ul>
            <Link href="/"><a>Home</a></Link>
            <Link href="/"><a>Portfolio</a></Link>
            <Link href="/"><a onClick={()=> setShowModal(true)}>Contact</a></Link>
            </ul>
          </nav>
          <h1>FRONT END JUNIOR DEVELOPER</h1>
          <h2>.Next Js | Styled Component | Firebase | Contentful CMS </h2> 
          <CardProfile/>

          <Portfolio props={projects}/>  

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