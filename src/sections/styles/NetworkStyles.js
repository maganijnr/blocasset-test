import styled from 'styled-components/macro'

import {BsArrowRight} from 'react-icons/bs'

export const NetworkBody = styled.div`
   text-align: center;
   width: 100%;
`

export const NetworkContainer = styled.div`
   margin: 2rem 0rem;
   height: 100%;
   width: 100%;

   @media (max-width:550px){
      min-height: 900px;
   }
`

export const NetworkHeader = styled.div`
   position: relative;
`

export const TopArrow = styled.div`
   width: 129px;
   height: 86px;
   transform: rotate(10deg);
   margin-left: -20px;
   position: absolute;
   top: 200px;
   left: 90px;

   img{
      width: 100%;
   }

   @media (max-width:1024px){
      width: 120px;
      height: 80px;
      /* transform: rotate(10deg); */
      margin-left: -20px;
      position: absolute;
      top: 20px;
      left: 110px;
   }

   @media (max-width:600px){
      width: 82px;
      height: 55px;
      /* transform: rotate(10deg); */
      margin-left: -20px;
      position: absolute;
      top: 120px;
      left: 35%;
   }

   @media (max-width:550px){
      position: absolute;
      top: 100px;
      left: 35%;
   }

`

export const BottomArrow = styled.div`
   position: absolute;
   bottom: 20px;
   right: 250px;
   width: 129px;
   height: 86px;

   img{
      width: 100%;
   }

   @media (max-width:1024px){
      width: 129px;
      height: 86px;
      transform: rotate(10deg);
      margin-left: -20px;
      position: absolute;
      top: 80%;
      transform: translateY(10%);
      left: 800px;
   }

   @media (max-width:600px){
      left: 220px;
      top: 90%;
      transform: translateY(10%);
   }
`

export const NetworkH3 = styled.h3`
   padding: 123px 0 22px 0;
   font-size: 24px;
   line-height: 32px;
   font-weight: 400;
   font-size: 24px;
   line-height: 32px;
   text-align: center;
   letter-spacing: -0.02em;
   color: #CC572F;


   @media (max-width: 1024px){
      padding: 123px 0 22px 0;
      font-size: 24px;
      line-height: 32px;
      font-weight: 400;
   }

   @media (max-width: 900px){
      padding: 123px 0 22px 0;
      font-size: 24px;
      line-height: 32px;
      font-weight: 400;
   }

   @media (max-width: 900px){
      padding: 213px 0 22px 0;
      font-size: 18px;
      line-height: 24px;
      font-weight: 400;
   }
`

export const NetworkH1 = styled.h1`
   font-weight: 500;
   width: 65%;
   margin: auto;
   padding: 0 0 64px;
   font-size: 36px;
   line-height: 44px;
   /* or 122% */

   text-align: center;
   letter-spacing: -0.02em;

   /* Neutral/800 */

   color: #1F2937;

   @media (max-width: 1024px){
      font-size: 36px;
      line-height: 44px;
      font-weight: 500;
      width: 85%;
      margin: auto;
      padding: 0 0 64px;
   }

   @media (max-width: 900px){
      font-size: 30px;
      line-height: 44px;
      font-weight: 500;
      width: 85%;
      margin: auto;
      padding: 0 0 64px;
   }

   @media (max-width: 600px){
      font-size: 24px;
      line-height: 32px;
      width: 65%;
      margin: auto;
      padding: 0 0 24px;
   }

   @media (max-width: 500px){
      width: 95%;
   }
`

export const NetworkBtn = styled.button`
   font-size: 16px;
   line-height: 24px;
   font-weight: 600;
   border: none;
   background: #062638;
   border-radius: 8px;
   color: #FFFFFF;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 14px 24px;
   margin:  0 auto .5rem;
   cursor: pointer;
`

export const BtnIcon = styled(BsArrowRight)`
   margin-left: 10px;
`
export const NetworkCards = styled.div`
   display: flex;
   justify-content: center;
   padding: 0 35px;
   gap: 22px;
   position: relative;

   @media(max-width: 1024px){
      padding-bottom: 70px;
   }

   @media(max-width: 600px){
      display: flex;
      flex-direction: column;
      padding-bottom: 0px;
   }
`

export const NetworkCard = styled.div`
   cursor: pointer;

   :hover{
      transform: scale(1.12);
      transition: .3s ease-in-out all;
   }
   :nth-child(1){
      width: 264px;
   }

   :nth-child(2){
      width: 450px;
      /* background: red; */
   }

   :nth-child(3){
      width: 381px;
   }
   
   :nth-child(4){
      width: 264px;
   }
   
   :nth-child(2){
      margin: 20px 0;
   }

   :nth-child(3) {
      margin: 73px 0;
   }

   @media (max-width: 1024px) {
      :nth-child(2) {
         margin: 87px 0;
         display: none;
      }
   }

   @media (max-width: 900px) {
      :nth-child(2){
         display: none;
      }

      :nth-child(4) {
         /* margin: 87px 0; */
         display: none;
      }
   }

   @media (max-width: 600px){
      :nth-child(1){
         margin: 40px 0 0;
      }
      :nth-child(3){
         margin: 0;
      }
      :nth-child(4){
         margin: 0 0 150px;
         display: block;
      }

      :nth-child(1),
      :nth-child(3),
      :nth-child(4){
         width: 100%;
      }
   }

   img{
      width: 100%;
      max-width:264px;
   }
`

export const CardInfo = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   position: relative;
   width: 265px;
   margin: 0 auto;
`

export const CardUser = styled.div`
   display: flex;
`

export const UserImg = styled.img`
   margin-right: .5rem;
`

export const Info = styled.div`
   padding-left: 6px;
   text-align: left;
`

export const Username = styled.h3`
   font-size: 18px;
   font-weight: 400;
   line-height: 160%;
   color: #4B5563;
`

export const Usernetwork = styled.h5`
   font-size: 14px;
   line-height: 160%;
   color: #9CA3AF;
   font-weight: 400;
`

export const Userfollow = styled.h3`
   color: #ff6d3b;
   font-size: 18px;
  line-height: 28px;
  cursor: pointer;
`

