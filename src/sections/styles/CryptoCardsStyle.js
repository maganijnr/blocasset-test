import styled from 'styled-components/macro'

export const CryptoBody = styled.div`
   width: 100%;
   height: 100%;
   max-height: 600px;
   position: relative;
   background: rgba(255, 255, 255, 1);
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 50px 20px;

   @media (max-width: 1025px){
      max-height: 500px;
      padding: 40px 20px;
   }

   @media (max-width: 768px){
      max-height: 500px;
      padding: 30px 20px;
   }

   @media (max-width: 550px){
      max-height: 400px;
      padding: 20px 20px;
   }
`

export const CryptoContainer = styled.div`
   background: rgba(255, 255, 255, 1);
   width: 100%;
   max-width: 1540px;
   position: relative;
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin: 0 auto;
   padding: 20px 20px;
   height: 100%;
   overflow-x: scroll;

   ::-webkit-scrollbar{
      width: 0;
   }
`

export const CryptoCard = styled.div`
   width: 296px;
   min-width: 296px;
   height: 339.63px;
   margin: 1rem;
   background: ${({bgColor}) => bgColor};
   color: #FFFFFF;
   position: relative;
   overflow: hidden;
   border-radius: 8px;
   cursor: pointer;

   @media (max-width: 768px) {
      width: 290px;
      min-width: 290px;
   }

   @media (max-width: 550px){
      width: 200px;
      max-width: 200px;
      height: 270.23px;
   }
`

export const CryptoText = styled.h2`
   position: absolute;
   top: 10px;
   left: 20px;
   font-weight: 700;
   font-size: 32px;
   line-height: 40px;
   letter-spacing: -0.02em;

   @media (max-width: 768px){
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 36px;
      letter-spacing: -0.02em;
   }
`

export const CryptoImg = styled.img`
   width: 100%;
   position: absolute;
   top: 60%;
   left: 50%;
   transform: translate(-50%, -40%);
   background: transparent;

   @media (max-width: 550px){
      max-width: 200px;
      max-height: 200px;
      top: 55%;
      left: 55%;
      transform: translate(-45%, -45%);
   }
`