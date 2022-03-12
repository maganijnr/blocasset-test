import {
   SpecialsBody,
   SpecialsContainer,
   SpecialsHeader,
   SpecialsTitle,
   SpecialsH2,
   SpecialsCardWrapper,
   SpecialsCard,
   CardImgWrapper,
   CardImg,
   CardInfo,
   CardH2,
   CardBtn
} from './styles/SpecialsStyles'

import {specialsCards} from '../data/data'

function SpecailSection() {
   return (
      <SpecialsBody>
         <SpecialsContainer>
            <SpecialsHeader>
               <SpecialsTitle>
                  Specially collected
               </SpecialsTitle>
               <SpecialsH2>
                  Blocasset specials
               </SpecialsH2>
            </SpecialsHeader>
            <SpecialsCardWrapper>
               {
                  specialsCards.map(info => (
                     <SpecialsCard 
                        key={info.id} 
                        bgColor={info.bgColor && info.bgColor} 
                        bgGradient={info.bgGradient && info.bgGradient}
                     >
                        <CardImgWrapper>
                           <CardImg src={info.image} alt="img"/>
                        </CardImgWrapper>
                        <CardInfo>
                           <CardH2>{info.cardH2}</CardH2>
                           <CardBtn>
                              {info.btnTxt}
                              <img src={info.btnIcon} alt="icon"/>
                           </CardBtn>
                        </CardInfo>
                     </SpecialsCard>
                  ))
               }
            </SpecialsCardWrapper>
         </SpecialsContainer>
      </SpecialsBody>
   )
}

export default SpecailSection