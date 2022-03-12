import {
   NavBody,
   NavContainer,
   NavRight,
   NavLogoWrapper,
   NavLogo,
   Separator,
   NavItems,
   NavItem,
   NavLeft,
   WhiteBtn,
   BlackBtn,
   NavMenuBtnOpen,
   BarIcon,
   MenuItems,
   MenuItemContainer,
   MenuBtnContainer,
   MenuItem,
   MenuWhiteBtn,
   MenuBlackBtn,
   NavMenuBtnClose,
   CloseIcon
} from './styles/NavbarStyles'
import {useState} from 'react'

import Logo from '../assets/logo.svg'


function Navbar() {
   const [isOpen, setIsOpen] = useState(false)

   return (
      <NavBody>
         <NavContainer>
            <NavRight>
               <NavLogoWrapper>
                  <NavLogo src={Logo} alt="logo" />
               </NavLogoWrapper>
               <Separator> </Separator>
               <NavItems>
                  <NavItem to="/">Images</NavItem>
                  <NavItem to="/">Icons</NavItem>
                  <NavItem to="/">Illustrations</NavItem>
                  <NavItem to="/">Videos</NavItem>
               </NavItems>
            </NavRight>
            {
               isOpen 
               && isOpen 
                  ? <NavMenuBtnClose onClick={() => setIsOpen(false)}>
                     <CloseIcon/>
                  </NavMenuBtnClose> 
                  : <NavMenuBtnOpen onClick={() => setIsOpen(true)}>
                     <BarIcon/>
                  </NavMenuBtnOpen>
            }
            <NavLeft>
               <WhiteBtn>Become a Contributor</WhiteBtn>
               <BlackBtn>Connect Wallet</BlackBtn>
            </NavLeft>
         </NavContainer>

         <MenuItems isOpen={isOpen && isOpen}>
            <MenuItemContainer>
               <MenuItem to="/">Images</MenuItem>
               <MenuItem to="/">Icons</MenuItem>
               <MenuItem to="/">Illustrations</MenuItem>
               <MenuItem to="/">Videos</MenuItem>
            </MenuItemContainer>
            <MenuBtnContainer>
               <MenuWhiteBtn>Become a contributor</MenuWhiteBtn>
               <MenuBlackBtn>Connect wallet</MenuBlackBtn>
            </MenuBtnContainer>
         </MenuItems>
      </NavBody>
   )
}

export default Navbar