import styled from 'styled-components/macro'

import {BsTwitter} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'


export const FooterBody = styled.div`
   width: 100%;
   position: relative;
   background: rgba(255, 255, 255, 1);
   margin: 2rem auto 0;
`

export const FooterContainer = styled.div`
   width: 100%;
   max-width: 1480px;
   position: relative;
   display: flex;
   flex-direction: column;
   align-items: center;
   margin:0 auto;
   padding: 50px 20px;
   height: 100%;
`

export const FooterTop = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;

   @media (max-width: 768px){
      flex-direction: column;
   }
`

export const FooterRight = styled.div`
   width: 100%;
   flex-wrap: wrap;
   padding: 10px 0px;
   flex: 2;

   @media (max-width: 1025px){
      flex: 1;
   }
`

export const FooterLogoContainer = styled.div`
   width: 180px;
   max-width: 180px;
   margin: 10px 0 40px;
`

export const FooterLogo = styled.img`
   width: 100%;
`

export const FooterTxt = styled.p`
   font-size: 14px;
   font-weight: 400;
   line-height: 160%;
   letter-spacing: -0.02em;
   color: #4b5563;
   max-width: 400px;
   flex-wrap: wrap;
`

export const FooterInputWrapper = styled.div`
   height: 40px;
   width: 380px;
   max-width: 380px;
   display: flex;
   flex-wrap: nowrap;
   margin: 40px 0 40px;
   border-radius: 6px;
   border: 1px solid #F3F4F6;

   @media (max-width: 1025px){
      max-width: 300px;
   }
`

export const FooterInput = styled.input`
   flex: 2;
   width: 100%;
   border: none;
   outline: none;
   padding-left: 10px;
   font-weight: 400;
`

export const FooterBtn = styled.button`
   flex: 1;
   width: 100%;
   background: #1F2937;
   border-radius: 6px;
   font-size: 14px;
   font-weight: 700;
   border: none;
   color: #FFFFFF;
`

export const FooterLeft = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   grid-column-gap: 50px;
   grid-row-gap: 30px;
   justify-items: stretch;
   align-items: stretch;
   width: 100%;
   flex: 1;

   @media (max-width: 1025px){
      flex: 1;
   }

   @media (max-width: 1025px){
      grid-column-gap: 30px;
      grid-row-gap: 20px;
   }

   @media (max-width: 768px){
      grid-column-gap: 20px;
      grid-row-gap: 10px;
   }

   @media (max-width: 550px){
      grid-template-columns: 1fr;
      grid-column-gap: 10px;
      grid-row-gap: 10px;
   }
`

export const FooterCol = styled.div`
   padding: 10px 0px;
   /* display: flex;
   flex-direction: column; */
   max-width: 150px;
   
   @media (max-width: 768px){
      text-align: center;
   }

   @media (max-width: 550px){
      text-align: left;
   }
`

export const FooterColH3 = styled.h3`
   font-size: 20px;
   font-weight:500;
   line-height:25px;
   color: #4b5563;
   margin-bottom: 17px;

   @media (max-width: 768px){
      margin-bottom: 12px;
   }
`

export const FooterColP = styled.p`
   margin-bottom: 17px;
   cursor: pointer;
   color: #9ca3af;
   font-size: 14px;
   font-weight:400;
   line-height: 160%;

   @media (max-width: 768px){
      margin-bottom: 12px;
   }
`

export const FooterBottom = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   border-top: 1.5px solid #9CA3AF;
`

export const FooterCopy = styled.h3`
   margin-top: 1rem;
   font-weight: 400;
   font-size: 12px;
   color: #828282;
`

export const FooterIcons = styled.div`
   display: flex;
   margin-top: 1rem;
`

export const FooterIcon = styled.div`
   margin: 0 .5rem;
   background: #062638;
   border-radius: 6px;
   width: 24px;
   height: 24px;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;

   :first-child {
      margin-right: 0;
   }

   :last-child {
      margin-left: 0;
   }
`

export const TwitterIcon = styled(BsTwitter)`
   color: #FFFFFF;
`

export const IgIcon = styled(AiOutlineInstagram)`
   color: #FFFFFF;
`

export const LinkdenIcon = styled(FaLinkedinIn)`
   color: #FFFFFF;
`