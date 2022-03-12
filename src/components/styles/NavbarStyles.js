import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'

import {FiMenu} from 'react-icons/fi'
import {VscChromeClose} from 'react-icons/vsc'

export const NavBody = styled.div`
   background: #FFFFFF;
   position: relative;
   height: 80px;
   width: 100%;
   display: flex;
`

export const NavContainer = styled.div`
   width: 100%;
   background-color: inherit;
   max-width: 1540px;
   margin: 0 auto;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0 20px;
   position: relative;
`

export const NavRight = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   height: 100%;
   
`

export const NavLogoWrapper = styled.div`
   width: 180px;
   max-width: 180px;
   cursor: pointer;
`

export const NavLogo = styled.img`
   width: 100%;
`

export const Separator = styled.div`
   width: 3px;
   height: 100%;
   max-height: 40px;
   background: rgba(229, 231, 235, 1);
   margin: auto 25px;
   display: inline-block;

   @media(max-width: 1025px){
      display: none;
   }
`

export const NavItems = styled.div`
   display: flex;

   @media(max-width: 1025px){
      display: none;
   }
`

export const NavItem = styled(Link)`
   margin: 0 20px;
   color: #111827;
   font-weight: 600;
   font-size: 20px;
   
   :first-child {
      margin-left: 0px;
   }

   :last-child{
      margin-right: 0px;
   }
`

export const NavLeft = styled.div`
   display: flex;
   align-items: center;

   @media(max-width: 1025px){
      display: none;
   }
`

export const WhiteBtn = styled.button`
   padding: 12px 22px;
   color: #111827;
   font-weight: 600;
   font-size: 20px;
   border-radius: 8px;
   border: 2px solid #D1D5DB;
   background-color: #FFFFFF;
   margin-right: 1rem;
   cursor: pointer;

   :hover{
      transition: background ease-in-out .3s;
      background: #D1D5DB;
   }
`

export const BlackBtn = styled.button`
   padding: 12px 22px;
   color: #FFFFFF;
   font-weight: 600;
   font-size: 20px;
   border-radius: 8px;
   border: 2px solid #111827;
   background-color: #111827;
   margin-right: 1rem;
   cursor: pointer;
`

export const NavMenuBtnOpen = styled.div`
   display: none;

   @media(max-width: 1025px){
      width: 35px;
      height: 35px;
      display: flex;
      cursor: pointer;
   }
`

export const NavMenuBtnClose = styled.div`
   display: none;

   @media(max-width: 1025px){
      width: 35px;
      height: 35px;
      display: flex;
      cursor: pointer;
   }
`

export const BarIcon = styled(FiMenu)`
   width: 100%;
   height: 100%;
   color: #385160;
`
export const CloseIcon = styled(VscChromeClose)`
   width: 100%;
   height: 100%;
   color: #385160;
`

export const MenuItems = styled.div`
   display: none;

   @media(max-width: 1025px){
      display: flex;
      top: ${({isOpen}) => isOpen ? "80px": "-1000px"};
      left: 0;
      position: absolute;
      width: 100%;
      background: rgba(229, 229, 229, .99);
      z-index: 10;
      margin: 0 auto;
      display: flex;
      /* align-items: center; */
      flex-direction: column;
      padding: 20px 20px;
      transition: all .55s ease-in-out;
   }

`

export const MenuItemContainer = styled.div`
   display: flex;
   /* align-items: center; */
   flex-direction: column;
`

export const MenuItem = styled(Link)`
   margin: 10px 0px;
   color: #111827;
   font-weight: 600;
   font-size: 20px;
   
   :first-child {
      margin-top: 0px;
   }

   :last-child{
      margin-bottom: 0px;
   }
`

export const MenuBtnContainer = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-top: 1rem;

   @media (max-width: 768px) {
      flex-direction: column;
   }
`

export const MenuWhiteBtn = styled.button`
   padding: 10px 14px;
   color: #111827;
   font-weight: 600;
   font-size: 18px;
   border-radius: 8px;
   border: 2px solid #D1D5DB;
   background-color: #FFFFFF;
   margin-right: .5rem;
   cursor: pointer;

   :hover{
      transition: background ease-in-out .3s;
      background: #D1D5DB;
   }

   @media (max-width: 768px) {
      margin: 0 auto .5rem;
      width: 220px;
      min-width: 195px;
   }
`

export const MenuBlackBtn = styled.button`
   padding: 10px 14px;
   color: #FFFFFF;
   font-weight: 600;
   font-size: 18px;
   border-radius: 8px;
   border: 2px solid #111827;
   background-color: #111827;
   margin-left: .5rem;
   cursor: pointer;

   @media (max-width: 768px) {
      margin: 0.5rem auto 0;
      width: 220px;
      min-width: 195px;
   }
`

