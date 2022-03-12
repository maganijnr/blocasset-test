import styled from 'styled-components/macro'

export const SpecialsBody = styled.div`
   margin: 1rem auto;
   width: 100%;
   position: relative;
   background: rgba(249, 250, 251, 1);
`

export const SpecialsContainer = styled.div`
   width: 100%;
   max-width: 1540px;
   position: relative;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin:0 auto;
   padding: 50px 20px;
   height: 100%;
`

export const SpecialsHeader = styled.div`
   text-align: center;
   width: 100%;
   position: relative;
   margin-bottom: 48px;

`

export const SpecialsTitle = styled.h3`
   color: #CC572F;
   font-style: normal;
   font-weight: 400;
   font-size: 20px;
   line-height: 28px;
   text-align: center;
   letter-spacing: -0.02em;
   margin-bottom: 12px;

   @media (max-width: 1025px) {
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
   }

   @media (max-width: 550){
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
   }

`

export const SpecialsH2 = styled.h2`
   font-style: normal;
   font-weight: 600;
   font-size: 36px;
   line-height: 40px;
   text-align: center;
   letter-spacing: -0.02em;
   color: #062638;

   @media (max-width: 1025px) {
      font-weight: 700;
      font-size: 44px;
      line-height: 48px;
   }

   @media (max-width: 550px) {
      font-weight: 700;
      font-size: 36px;
      line-height: 44px;
   }
`

export const SpecialsCardWrapper = styled.div`
   display: flex;
   align-items: center;
   flex-wrap: wrap;

   @media (max-width: 550px){
      flex-direction: column;

   }
`

export const SpecialsCard = styled.div`
   flex: 1;
   width: 600px;
   max-width: 600px;
   height: 478px;
   min-height: 478px;
   position: relative;
   background: ${({bgColor}) => bgColor};
   cursor: pointer;
   margin: 0 1rem;
   overflow: hidden;
   border-radius: 8px;

   @media (max-width: 1025px) {
      width: 449.99px;
      height: 465.49px;
   }

   @media (max-width: 550px) {
      width: 359.77px;
      height: 300.94px;
      margin: 1rem 0;
   }
`

export const CardImgWrapper = styled.div`
   width: 100%;
   height: 100%;
   position: absolute;
   top: 0;
   left: 0;

   @media (max-width: 550px){
      width: 359.77px;
      height: 300.94px;
   }
`

export const CardImg = styled.img`
   /* width: 100%; */
`

export const CardInfo = styled.div`
   position: absolute;
   z-index: 1;
   max-width: 232px;
   flex-wrap: wrap;
   top: 25px;
   left: 30px;
`

export const CardH2 = styled.h2`
   font-style: normal;
   font-weight: 400;
   font-size: 36px;
   line-height: 38px;
   color: #FFFFFF;
   margin-bottom: 1rem;

   @media (max-width: 1025px){
      font-weight: 500;
      font-size: 24px;
      line-height: 32px;
   }

   /* @media (max-width: 550px){
      font-weight: 700;
      font-size: 20px;
      line-height: 28px;
   } */
`

export const CardBtn = styled.button`
   background: transparent;
   border: none;
   padding: 8px 8px;
   color: #FFFFFF;
   display: flex;
   align-items: center;
   font-weight: 500;
   font-size: 16px;
   line-height: 24px;
   cursor: pointer;

   img{
      margin-left: 1rem; 
   }
`
