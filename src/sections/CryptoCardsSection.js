import {
   CryptoBody,
   CryptoContainer,
   CryptoCard,
   CryptoText,
   CryptoImg
} from './styles/CryptoCardsStyle'
import {cryptoCards} from '../data/data'


function CryptoCardsSection() {
   return (
      <CryptoBody>
         <CryptoContainer>
            {
               cryptoCards.map((info) => (
                  <CryptoCard key={info.id} bgColor={info.bgColor}>
                     <CryptoText>{info.text}</CryptoText>
                     <CryptoImg src={info.Image} alt="image"/>
                  </CryptoCard>
               ))
            }
         </CryptoContainer>
      </CryptoBody>
   )
}

export default CryptoCardsSection