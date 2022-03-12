import {
   FooterBody,
   FooterContainer,
   FooterTop,
   FooterRight,
   FooterLogoContainer,
   FooterLogo,
   FooterTxt,
   FooterInputWrapper,
   FooterInput,
   FooterBtn,
   FooterLeft,
   FooterCol,
   FooterColH3,
   FooterColP,
   FooterBottom,
   FooterCopy,
   FooterIcons,
   FooterIcon,
   TwitterIcon,
   IgIcon,
   LinkdenIcon
} from './styles/FooterStyles'
import Logo from '../assets/logo.svg'

function FooterSection() {
   return (
      <FooterBody>
         <FooterContainer>
            <FooterTop>
               <FooterRight>
                  <FooterLogoContainer>
                     <FooterLogo src={Logo} alt="logo" />
                  </FooterLogoContainer>
                  <FooterTxt>
                     High quality web3 vectors and designs from top designers all around the world.
                  </FooterTxt>
                  <FooterInputWrapper>
                     <FooterInput 
                        type="email" 
                        placeholder="Your Email"
                     />
                     <FooterBtn>Email Me!</FooterBtn>
                  </FooterInputWrapper>
               </FooterRight>

               <FooterLeft>
                  <FooterCol>
                     <FooterColH3>Channel</FooterColH3>
                     <FooterColP>Explore</FooterColP>
                     <FooterColP>How it works</FooterColP>
                     <FooterColP>Contact Us</FooterColP>
                  </FooterCol>
                  <FooterCol>
                     <FooterColH3>Company</FooterColH3>
                     <FooterColP>Custom Work</FooterColP>
                     <FooterColP>About</FooterColP>
                     <FooterColP>FAQs</FooterColP>
                  </FooterCol>
                  <FooterCol>
                     <FooterColH3>Support</FooterColH3>
                     <FooterColP>Help center</FooterColP>
                     <FooterColP>Terms of service</FooterColP>
                     <FooterColP>Legal</FooterColP>
                     <FooterColP>Privacy policy</FooterColP>
                  </FooterCol>
               </FooterLeft>
            </FooterTop>

            <FooterBottom>
               <FooterCopy>&copy;2022 All Rights Reserved.</FooterCopy>
               <FooterIcons>
                  <FooterIcon><TwitterIcon/></FooterIcon>
                  <FooterIcon><IgIcon/></FooterIcon>
                  <FooterIcon><LinkdenIcon/></FooterIcon>
               </FooterIcons>
            </FooterBottom>
         </FooterContainer>
      </FooterBody>
   )
}

export default FooterSection