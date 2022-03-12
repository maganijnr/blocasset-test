import styled from 'styled-components/macro'

import {BsArrowRight} from 'react-icons/bs'

export const NetworkBody = styled.div`
   width: 100%;
   position: relative;
   background: rgba(255, 255, 255, 1);
   margin: 1rem auto;
`

export const NetworkContainer = styled.div`
   width: 100%;
   max-width: 1540px;
   position: relative;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin:0 auto;
   padding: 60px 20px;
   height: 100%;

`

export const NetworkHeader = styled.div`
   width: 900px;
   max-width: 900px;
   flex: wrap;
   text-align: center;
   position: relative;
`

export const TopArrow = styled.div`
   position: absolute;
   top: 20%;
   left: -15%;
   /* transform: translate(-85%, -40%); */
`

export const BottomArrow = styled.div`
   position: absolute;
   top: 90%;
   transform: translateY(-5%);
   right: 20%;
   transform: translateX(60%);
`

export const NetworkH3 = styled.h3`
   color: #CC572F;
   font-size: 24px;
   font-weight: 400;
   line-height: 32px;
   letter-spacing: -0.02em;

   @media(max-width: 1025px){
      font-weight: 400;
      font-size: 24px;
      line-height: 32px;
      text-align: center;
      letter-spacing: -0.02em;
   }

   @media (max-width: 550px){
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
      text-align: center;
      letter-spacing: -0.02em;
   }
`

export const NetworkH1 = styled.h1`
   color: #1F2937;
   letter-spacing: -0.02em;
   font-size: 36px;
   font-weight: 400;
   line-height: 44px;
   margin: 22px 0;

   @media(max-width: 1025px){
      font-weight: 400;
      font-size: 36px;
      line-height: 44px;
      text-align: center;
      letter-spacing: -0.02em;
   }

   @media (max-width: 550px){
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
      text-align: center;
      letter-spacing: -0.02em;
   }
`

export const NetworkBtn = styled.button`
   display: flex;
   align-items: center;
   background: #062638;
   border: none;
   border-radius: 8px;
   padding: 14px 24px;
   color: #FFFFFF;
   margin: 0 auto;
   font-size: 16px;
   line-height: 24px;
   font-weight: 600;
   cursor: pointer;

   @media (max-width: 1025px){
      font-size: 16px;
   }

   @media (max-width: 550px){
      font-size: 16px;
   }
`

export const BtnIcon = styled(BsArrowRight)`
   margin-left: .5rem;
   color: #FFFFFF;
`

export const NetworkCards = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 100%;
   height: 100%;
   margin: 1.5rem auto 0;
   padding: 0 20px;
   
   @media (max-width: 1025px){

      overflow-x: scroll;

      &::-webkit-scrollbar{
         width: 0;
      }
   }
`

export const NetworkCard = styled.div`
   max-width: 315px;
   min-height: 315px;
   border: none;
   border-radius: 8px;
   overflow: hidden;
   cursor: pointer;

   :hover {
      transform: scale(1.2);
      transition: .3s ease-in-out transform;
   }

   /* @media (max-width: 1025px){
      max-width: 280px;
      min-height: 280px;
   } */
`

export const CardInfo = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
`

export const CardUser = styled.div`
   display: flex;
   align-items: center;
`

export const UserImg = styled.img`
   margin-right: .5rem;
`

export const Info = styled.div`
   flex-wrap: nowrap;
`

export const Username = styled.h3`
   font-size: 18px;
   color: #4B5563;
   line-height: 160%;
   font-weight: 400;
`

export const Usernetwork = styled.h5`
   color: #9CA3AF;
   font-size: 14px;
   line-height: 160%;
   font-weight: 400;
`

export const Userfollow = styled.h3`
   color: #ff6d3b;
   line-height: 160%;
   font-weight: 500;
   font-size: 18px;
`

