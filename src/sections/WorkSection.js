import {
   WorkBody,
   WorkContainer,
   WorkHeader,
   WorkTitle,
   WorkVector,
   WorkCards,
   WorkCard,
   IconWrapper,
   Icon,
   CardH2,
   CardP
} from './styles/WorkStyles'

import {workCards} from '../data/data'
import Vector from '../assets/releaseVector.svg'

function WorkSection() {
   return (
      <WorkBody>
         <WorkContainer>
            <WorkHeader>
               <WorkTitle>How it works</WorkTitle>
               <WorkVector>
                  <img src={Vector} alt="vectore"/>
               </WorkVector>
            </WorkHeader>
            <WorkCards>
               {
                  workCards.map(info => (
                     <WorkCard key={info.id}>
                        <IconWrapper>
                           <Icon src={info.cardImage} alt="icon"/>
                        </IconWrapper>
                        <CardH2>{info.cardH2}</CardH2>
                        <CardP>{info.cardP}</CardP>
                     </WorkCard>
                  ))
               }
            </WorkCards>
         </WorkContainer>
      </WorkBody>
   )
}

export default WorkSection