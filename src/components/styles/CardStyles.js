import styled from 'styled-components/macro'

export const CardBody = styled.div`
   width: 318px;
   max-width: 318px;
   height: 475px;
   min-height: 475px;
   border: 0.5px solid rgba(229, 231, 235, 1);
   background: rgba(249, 250, 251, 1);
   border-radius: 8px;

   @media (max-width: 1025px){
      width: 308px;
      max-width: 308px;
      height: 475px;
      margin: 0 1rem;
   }

   @media (max-width: 550px){
      height: 475px;
      width: 335px;
      margin: 0;
   }
`

export const CardTop = styled.div`
   width: 100%;
   position: relative;
   padding: 16px;

   @media (max-width: 1025px){
      padding: 15px;
   }
`

export const CardImgContainer = styled.div`
   position: relative;
`

export const CardImg = styled.img`
   width: 100%;
`

export const CardIcons = styled.div`
   position: absolute;
   top: 10px;
   right: 8px;
   z-index: 1;
   width: 40px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`

export const CardIcon = styled.img`
   max-width: 35px;
   max-height: 35px;
   margin: .8rem 0;
   cursor: pointer;
`

export const CardH2 = styled.h2`
   font-size: 20px;
   font-weight: 500;
   color: #062638;
`

export const CardCoinInfo = styled.div`
   margin-top: 12px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 100%;
   margin-bottom: .5rem;

   @media (max-width: 1025px){
      margin-bottom: .3rem;
   }
`

export const CoinShare = styled.div`
   width: 32px;
   height: 30.81px;
   background: rgba(229, 229, 229, 1);
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 100%;
`

export const CoinData = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
`

export const CoinMatic = styled.h3`
   margin-bottom: 4px;
   color: #062638;
   font-size: 16px;
   font-weight: 500;
`

export const CoinPrice = styled.h5`
   font-weight: 400;
   font-size: 12px;
   line-height: 15px;
   color: #6B7280;
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

   @media (max-width: 768px) {
      /* width: 30px;
      height: 30px; */
   }
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