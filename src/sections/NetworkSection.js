import {
   NetworkBody,
   NetworkContainer,
   NetworkHeader,
   TopArrow,
   BottomArrow,
   NetworkH3,
   NetworkH1,
   NetworkBtn,
   BtnIcon,
   NetworkCards,
   NetworkCard,
   CardInfo,
   CardUser,
   UserImg,
   Info,
   Username,
   Usernetwork,
   Userfollow,

} from './styles/NetworkStyles'

import ArrowUp from '../assets/ArrowUp.png'
import ArrowDown from '../assets/ArrowDown.png'
import {networkCards} from '../data/data'

function NetworkSection() {
   return (
      <NetworkBody>
         <NetworkContainer>
            <NetworkHeader>
               <TopArrow>
                  <img src={ArrowDown} alt="Arrow Down"/>
               </TopArrow>
               <NetworkH3>Join the network</NetworkH3>
               <NetworkH1>
                  Monetize your skills, upload your Web3 assets and get paid immediately in crypto
               </NetworkH1>
               <NetworkBtn>
                  Become a Blocributor <BtnIcon/>
               </NetworkBtn>
            </NetworkHeader>
            <NetworkCards>
               {
                  networkCards.map(info => (
                     <NetworkCard key={info.id}>
                        <img src={info.image} alt='img'/>
                        <CardInfo>
                           <CardUser>
                              <UserImg src={info.avatar} alt='avatar'/>
                              <Info>
                                 <Username>@{info.username}</Username>
                                 <Usernetwork>{info.network}</Usernetwork>
                              </Info>
                           </CardUser>
                           <Userfollow>
                              follow
                           </Userfollow>
                        </CardInfo>
                     </NetworkCard>
                  ))
               }
            </NetworkCards>
            <BottomArrow>
               <img src={ArrowUp} alt="Arrow up"/>
            </BottomArrow>
         </NetworkContainer>
      </NetworkBody>
   )
}

export default NetworkSection