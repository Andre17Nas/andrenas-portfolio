import styled from 'styled-components'


export const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 5;
    width: 280px;

    @media(width: 360px){
        width: 300px;

        p{
            width: 360px;
        }
    }
`
