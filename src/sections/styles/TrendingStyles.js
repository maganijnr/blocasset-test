import styled from 'styled-components/macro'
import Carousel from 'react-elastic-carousel'

export const TrendingBody = styled.div`
   width: 100%;
   height: 85vh;
   position: relative;
   background: rgba(255, 255, 255, 1);
   margin: 1rem auto;
`

export const TrendingContainer = styled.div`
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
export const TrendingHeader = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   position: relative;
   margin-bottom: 1rem;

`

export const TrendingTitle = styled.h1`
   font-size: 52px;
   font-weight: 700;

   @media (max-width: 1025px){
      font-size: 44px;
      line-height: 48px;
   }

   @media (max-width: 550px){
      font-size: 36px;
      line-height: 44px;
   }
`

export const TrendingP = styled.p`
   color: #385160;
   font-weight: 400;
   font-size: 18px;

   @media (max-width: 1025px){
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
   }

   @media (max-width: 550px){
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
   }
`

export const TrendingVector = styled.div`
   position: absolute;
   top: 10px;
   left: 70%;
   transform: translateX(-30%);

   img{
      width: 100%;
   }
`
export const TrendingCarousel = styled(Carousel)`
   margin-top: 2rem;
   padding: 10px 0;
   button.rec-dot{
      background: rgba(229, 231, 235, 1);
      /* box-shadow: 0 0 1px 3px rgba(229, 231, 235, 0.5); */
   }

   button.rec-dot:hover, button.rec-dot:active, button.rec-dot:focus  {
      box-shadow: 0 0 1px 3px rgba(229, 231, 235, 0.5);
   }

   @media (max-width: 1025px){
      width: 100%;
   }
`
export const CardBody = styled.div`
   border: 0.5px solid rgba(229, 231, 235, 1);
   background: rgba(249, 250, 251, 1);
   position: relative;
   height: 475px;
   width: 318px;
   left: 0px;
   top: 0px;
   border-radius: 8px;

   @media (max-width: 1025px){
      margin: 0 1rem;
      height: 450px;
      width: 300px;
   }
`

export const CardTop = styled.div`
   padding: 16px;
`

export const CardImgContainer = styled.div`
   height: 294px;
   width: 286px;
   border-radius: 4px;
   position: relative;
`

export const CardImg = styled.img`
   width: 100%;

`

export const CardIcons = styled.div`
   position: absolute;
   top: 10px;
   right: 10px;
   display: flex;
   flex-direction: column;
   align-items: center;
`

export const CardIcon = styled.img`
   margin: .8rem 0;
   cursor: pointer;
`

export const CardH2 = styled.h2`
   font-weight: 500;
   font-size: 20px;
   line-height: 25px;
`

export const CardCoinInfo = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin: .5rem auto;

`

export const CoinShare = styled.div`
   height: 30.809831619262695px;
   width: 32px;
   left: 0px;
   top: 0px;
   border-radius: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   background: #E5E5E5;
`

export const CoinData = styled.div`

`

export const CoinMatic = styled.h3`
   font-weight: 500;
   font-size: 16px;
   line-height: 20px;
`

export const CoinPrice = styled.h5`
   font-weight: 400;
   font-size: 12px;
   line-height: 15px;
`

export const CardBottom = styled.div`
   display: flex;
   align-items: center;
   border-top: 0.5px solid rgba(209, 213, 219, 1);
   padding: 16px;
`

export const CardAvatarContainer = styled.div`
   width: 40px;
   height: 40px;
   border-radius: 100%;
   margin-right: 12px;
   overflow: hidden;
`

export const CardAvatar = styled.img`
   width: 100%;
`

export const CardName = styled.h4`
   font-weight: 500;
   font-size: 14px;
   line-height: 18px;
   color: #385160;
`