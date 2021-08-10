import * as S from '../styles/Styles'
import Link from 'next/link'
import Style from '../styles/Style.module.css'
import CardProfile from '../components/Card-Profile'
import Image from 'next/image'

export default function Home() {
  return (
    <S.MainWrapper>
      <S.Header/> 
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
          <S.PortfolioWrapper>
          <h1>* Portfolio *</h1>
          <S.CardWrapper>
              <S.PortfolioCard>
                <Image src="/image/img3.jpg" width={148} height={80} layout="responsive"/>
                <span>Nome do Projeto asadasdasdasdasdasda dasdasdas asdasdas asdas dasd asdasdasd as asdasd asda sdasd</span>               
              </S.PortfolioCard>

              <S.PortfolioCard>
                <Image src="/image/img3.jpg" width={148} height={80} layout="responsive"/>
                <span>Nome do Projeto asadasdasdasdasdasda dasdasdas asdasdas asdas dasd asdasdasd as asdasd asda sdasd</span>               
              </S.PortfolioCard>

              <S.PortfolioCard>
                <Image src="/image/img3.jpg" width={148} height={80} layout="responsive"/>
                <span>Nome do Projeto asadasdasdasdasdasda dasdasdas asdasdas asdas dasd asdasdasd as asdasd asda sdasd</span>               
              </S.PortfolioCard>

          </S.CardWrapper>
        </S.PortfolioWrapper>
          <S.Footer>
            <p> Copyright &copy; 2021 - André Nas. Todos os Direitos Reservados</p>
          </S.Footer>
      </main>  
    </S.MainWrapper>
  )
}
 