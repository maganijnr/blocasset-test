import styled from 'styled-components/macro'

export const WorkBody = styled.div`
   width: 100%;
   position: relative;
   background: rgba(255, 255, 255, 1);
   margin: 2rem auto;
`

export const WorkContainer = styled.div`
   width: 100%;
   max-width: 1580px;
   position: relative;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin:0 auto;
   padding: 50px 20px;
   height: 100%;
`

export const WorkHeader = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   position: relative;
   margin-bottom: 1rem;
`

export const WorkTitle = styled.h1`
   font-size: 52px;
   font-weight: 700;

   @media (max-width: 1025px){
      font-weight: 700;
      font-size: 40px;
      line-height: 48px;
   }

   @media (max-width: 550px){
      font-size: 36px;
      line-height: 44px;
   }
`


export const WorkVector = styled.div`
   position: absolute;
   top: 10px;
   left: 70%;
   transform: translateX(-30%);

   img{
      width: 100%;
   }

   @media (max-width: 1025px){
      top:0px;
      left: 67%;
      transform: translateX(-33%);
   }

   @media (max-width: 550px){
      top: -5px;
      left: 78%;
      transform: translateX(-30%);
   }
`

export const WorkCards = styled.div`
   display: flex;
   margin-top: 1rem;

   @media (max-width: 550px){
      flex-direction: column;
      align-items: center;
      justify-content: center;
   }
`

export const WorkCard = styled.div`
   width: 432px;
   max-width: 432px;
   height: 260px;
   flex-wrap: wrap;
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 0 24px;
   background: #F9FAFB;
   border-radius: 16px;
   padding: 50px 20px 10px;

   :first-child {
      margin-left: 0px;
   }

   :last-child{
      margin-right: 0px;
   }

   @media (max-width: 1025px){
      width: 296px;
      height: 260px;
      margin: 0 16px;
   }

   @media (max-width: 550px){
      width: 340px;
      height: 226px;
      margin: 16px 0px;

      :first-child {
         margin-top: 0px;
      }

      :last-child{
         margin-bottom: 0px;
      }
   }
`

export const IconWrapper = styled.div`
   width: 64px;
   height: 64px;
   background: #FFF0EB;
   border-radius: 32px;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-bottom: .5rem;
   cursor: pointer;

   @media (max-width: 1025px){
      width: 48px;
      height: 48px;
   }

`

export const Icon = styled.img`
   max-width: 30px;
   max-height: 30px;

   @media (max-width: 1025px){
      width: 23.33px;
      height: 23.33px;
   }
`

export const CardH2 = styled.h2`
   font-style: normal;
   font-weight: 700;
   font-size: 20px;
   line-height: 25px;
   text-align: center;
   letter-spacing: -0.02em;
   color: #121212;
   margin-bottom: .5rem;

   @media (max-width: 1025px){
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
   }

`

export const CardP = styled.p`
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 24px;
   text-align: center;
   color: #062638;
   margin-bottom: .5rem;

   @media (max-width: 1025px){
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
   }
`