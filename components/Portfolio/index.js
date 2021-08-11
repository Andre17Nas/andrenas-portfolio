import * as S from '../../styles/Styles'
import { createClient } from 'contentful'
import Link from 'next/link'

export default function Portfolio({props}){

    return(
        <S.PortfolioWrapper>
            <h1>* Portfolio *</h1>
        <S.CardWrapper>
            {
                props.map((project) => (
                    <a href={project.fields.link} target='_blank' rel='norefer' key={project.sys.id}>     
                        <S.PortfolioCard>
                            <span>{project.fields.name}</span>               
                        </S.PortfolioCard>
                    </a> 
                )
                )}       
          </S.CardWrapper>
          </S.PortfolioWrapper>
    )
}

