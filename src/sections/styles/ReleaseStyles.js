import styled from 'styled-components/macro'

export const ReleaseBody = styled.div`
   width: 100%;
   /* position: relative; */
   background: #FFFFFF;
`

export const ReleaseContainer = styled.div`
   width: 100%;
   padding: 50px 20px;
   max-width: 1540px;
   height: 100%;
   margin: auto;
   position: relative;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
`

export const ReleaseHeader = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   position: relative;
   margin-bottom: 1rem;
`

export const ReleaseTitle = styled.h1`
   font-size: 52px;
   font-weight: 700;
   line-height: 48px;
   letter-spacing: -0.02em;

   @media (max-width: 1025px){
      font-weight: 700;
      font-size: 44px;
      line-height: 48px;
      letter-spacing: -0.02em;
   }

   @media (max-width: 1025px){
      font-weight: 700;
      font-size: 44px;
      line-height: 48px;
      letter-spacing: -0.02em;
   }

   @media (max-width: 550px){
      font-size: 36px;
   }
`

export const ReleaseP = styled.p`
   color: #385160;
   font-weight: 400;
   font-size: 18px;
   text-align: center;

   @media (max-width: 1025px){
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
   }

   @media (max-width: 550px){
      font-size: 14px;
   }
`

export const ReleaseVector = styled.div`
   position: absolute;
   top: 10px;
   left: 30%;
   transform: translateX(-70%);

   img{
      width: 100%;
   }

   @media (max-width: 1025px){
      top: -5px;
      left: 30%;
      transform: translateX(-70%);
   }

   @media (max-width: 550px){
      top: -5px;
      left: 20%;
      transform: translateX(-70%);
   }
`

export const ReleaseCards = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;
   grid-column-gap: 20px;
   grid-row-gap: 20px;
   margin: 1rem auto;
   justify-items: stretch;
   align-items: stretch;

   @media (max-width: 1025px){
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 10px;
      grid-row-gap: 10px;
   }

   @media (max-width: 768px){
      grid-template-columns: 1fr;
      grid-column-gap: 0px;
      grid-row-gap: 10px;
   }

`

export const ReleaseButton = styled.button`
   margin:2rem auto 0 ;
   font-size: 18px;
   font-weight: 500;
   line-height: 18px;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 8px 15px;
   border: 1px solid rgba(209, 213, 219, 1);
   border-radius: 8px;
   outline: none;
   background-color: rgba(255, 255, 255, 1);
   cursor: pointer;
   /* position: relative; */

   :hover{
      transition: .3s all ease-in-out;
      background-color: rgba(209, 213, 219, 1);
   }
`