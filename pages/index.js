import * as S from '../styles/Styles'
import Link from 'next/link'
import Style from '../styles/Style.module.css'
import CardProfile from '../components/Card-Profile'

export default function Home() {
  return (
    <div>
      <main>
          <nav className={Style.Navbar}>
            <ul>
            <Link href="/"><a>Home</a></Link>
            <Link href="/"><a>Blog</a></Link>
            <Link href="/"><a>Portfolio</a></Link>
            <Link href="/"><a>Contact</a></Link>
            </ul>
          </nav>
          <h1>FRONT END JUNIOR DEVELOPER</h1>
          <h2>.Next Js | Styled Component | Firebase | Contentful CMS </h2> 
          <CardProfile/>
      </main>
      <S.Header>
      </S.Header>
      
    </div>
  )
}
