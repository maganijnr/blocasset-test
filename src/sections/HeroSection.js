import {
   HeroBody,
   HeroContainer,
   HeroInfo,
   HeroTitle,
   HeroH5,
   ElipseContainer,
   ElipseItem,
   CoinImgOne,
   CoinImgTwo,
   InputContainer,
   InputP,
   InputWrapper,
   DropDown,
   DropDownOption,
   Input,
   Button
} from './styles/HeroStyles'

import EthereumImg from '../assets/ethereum.png'
import BitcoinImg from '../assets/bitcoin.png'
import SearchImg from '../assets/search.svg'
import BgImage from '../assets/ellipseImage.png'

function HeroSection() {
   return (
      <HeroBody>
         <HeroContainer bgImage={BgImage}>
            <CoinImgOne>
               <img src={EthereumImg} alt="coin"/>
            </CoinImgOne>
            <CoinImgTwo>
               <img src={BitcoinImg} alt="coin"/>
            </CoinImgTwo>
            <HeroInfo>
               <ElipseContainer>
                  <ElipseItem></ElipseItem>
                  <ElipseItem></ElipseItem>
                  <ElipseItem></ElipseItem>
               </ElipseContainer>
               <HeroTitle>
                  Discover, and sell unique web3 assets.
               </HeroTitle>
               <HeroH5>
                  Make your project eye-catching with awesome web3 assets. For both commercial and personal purposes.
               </HeroH5>
            </HeroInfo>
            <InputContainer>
               <InputWrapper>
                  <DropDown>
                     <DropDownOption>Image</DropDownOption>
                     <DropDownOption>Videos</DropDownOption>
                     <DropDownOption>Coins</DropDownOption>
                  </DropDown>
                  <Input 
                     type="text" 
                     placeholder="Search all images"
                  />
                  <Button>
                     <img src={SearchImg} alt="Search"/>
                  </Button>
               </InputWrapper>
               <InputP>Popular: nft, web3, stickers, icons, cryptocurrency</InputP>
            </InputContainer>
         </HeroContainer>
      </HeroBody>
   )
}

export default HeroSection