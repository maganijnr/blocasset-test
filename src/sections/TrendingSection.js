import {
   TrendingBody,
   TrendingContainer,
   TrendingHeader,
   TrendingTitle,
   TrendingP,
   TrendingVector,
   TrendingCarousel,
   CardBody,
   CardTop,
   CardImgContainer,
   CardImg,
   CardIcons,
   CardIcon,
   CardH2,
   CardCoinInfo,
   CoinShare,
   CoinData,
   CoinMatic,
   CoinPrice,
   CardBottom,
   CardAvatarContainer,
   CardAvatar,
   CardName
} from './styles/TrendingStyles'
import {useState,useEffect} from 'react'


import {trendingCards} from '../data/data'
import Vector from '../assets/releaseVector.svg'
import HeartIcon from '../assets/icons/heartIcon.svg'
import ShareIcon from '../assets/icons/shareIcon.svg'
import ArrowDownIcon from '../assets/icons/arrowDownIcon.svg'
import FolderIcon from '../assets/icons/folderIcon.svg'
import PurpleShare from '../assets/icons/shareVector.svg'
import Carousel from 'react-elastic-carousel'

function TrendingSection() {
   const [dim, setDim] = useState()
   useEffect(() =>{
      setDim(window.innerWidth)
   },[])

   console.log(dim)
   return (
      <TrendingBody>
         <TrendingHeader>
            <TrendingTitle>Trending</TrendingTitle>
            <TrendingP>Newly minted assets from top artists around the world</TrendingP>
            <TrendingVector>
               <img src={Vector} alt="img"/>
            </TrendingVector>
         </TrendingHeader>
         <TrendingContainer>
            {
               dim > 1025 && <TrendingCarousel 
                  itemsToShow={4} 
                  autoPlaySpeed={2000} 
                  showArrows={false} 
                  enableAutoPlay={true} 
                  easing="ease" 
                  initialActiveIndex={20}

               >
                  {
                     trendingCards.map(info => (
                        <CardBody key={info.id}>
                           <CardTop>
                              <CardImgContainer>
                                 <CardImg src={info.image} alt="img"/>
                                 <CardIcons>
                                    <CardIcon src={ArrowDownIcon} alt="icon"/>
                                    <CardIcon src={HeartIcon} alt="icon"/>
                                    <CardIcon src={ShareIcon} alt="icon"/>
                                    <CardIcon src={FolderIcon} alt="icon"/>
                                 </CardIcons>
                              </CardImgContainer>
                              <CardH2>{info.cardH2}</CardH2>
                              <CardCoinInfo>
                                 <CoinData>
                                    <CoinMatic>{info.cardH3}</CoinMatic>
                                    <CoinPrice>${info.price}</CoinPrice>
                                 </CoinData>
                                 <CoinShare>
                                    <img src={PurpleShare} alt="icon"/>
                                 </CoinShare>
                              </CardCoinInfo>
                           </CardTop>
                           <CardBottom>
                              <CardAvatarContainer>
                                 <CardAvatar src={info.avatar} alt="avatar"/>
                              </CardAvatarContainer>
                              <CardName>@{info.username}</CardName>
                           </CardBottom>
                        </CardBody>
                     ))
                  }
               </TrendingCarousel>
            }
            {
              dim > 601 && dim < 1025 && <TrendingCarousel 
               itemsToShow={3} 
               autoPlaySpeed={2000} 
               showArrows={false} 
               enableAutoPlay={true} 
               easing="ease" 
               initialActiveIndex={20}
            >
               {
                  trendingCards.map(info => (
                     <CardBody key={info.id}>
                        <CardTop>
                           <CardImgContainer>
                              <CardImg src={info.image} alt="img"/>
                              <CardIcons>
                                 <CardIcon src={ArrowDownIcon} alt="icon"/>
                                 <CardIcon src={HeartIcon} alt="icon"/>
                                 <CardIcon src={ShareIcon} alt="icon"/>
                                 <CardIcon src={FolderIcon} alt="icon"/>
                              </CardIcons>
                           </CardImgContainer>
                           <CardH2>{info.cardH2}</CardH2>
                           <CardCoinInfo>
                              <CoinData>
                                 <CoinMatic>{info.cardH3}</CoinMatic>
                                 <CoinPrice>${info.price}</CoinPrice>
                              </CoinData>
                              <CoinShare>
                                 <img src={PurpleShare} alt="icon"/>
                              </CoinShare>
                           </CardCoinInfo>
                        </CardTop>
                        <CardBottom>
                           <CardAvatarContainer>
                              <CardAvatar src={info.avatar} alt="avatar"/>
                           </CardAvatarContainer>
                           <CardName>@{info.username}</CardName>
                        </CardBottom>
                     </CardBody>
                  ))
               }
            </TrendingCarousel>
            }
            {
               dim < 601 && <TrendingCarousel 
               itemsToShow={1}
               autoPlaySpeed={2000} 
               showArrows={false} 
               enableAutoPlay={true} 
               easing="ease" 
               initialActiveIndex={20}
               outerSpacing={2}
               pagination={false}
            >
               {
                  trendingCards.map(info => (
                     <CardBody key={info.id}>
                        <CardTop>
                           <CardImgContainer>
                              <CardImg src={info.image} alt="img"/>
                              <CardIcons>
                                 <CardIcon src={ArrowDownIcon} alt="icon"/>
                                 <CardIcon src={HeartIcon} alt="icon"/>
                                 <CardIcon src={ShareIcon} alt="icon"/>
                                 <CardIcon src={FolderIcon} alt="icon"/>
                              </CardIcons>
                           </CardImgContainer>
                           <CardH2>{info.cardH2}</CardH2>
                           <CardCoinInfo>
                              <CoinData>
                                 <CoinMatic>{info.cardH3}</CoinMatic>
                                 <CoinPrice>${info.price}</CoinPrice>
                              </CoinData>
                              <CoinShare>
                                 <img src={PurpleShare} alt="icon"/>
                              </CoinShare>
                           </CardCoinInfo>
                        </CardTop>
                        <CardBottom>
                           <CardAvatarContainer>
                              <CardAvatar src={info.avatar} alt="avatar"/>
                           </CardAvatarContainer>
                           <CardName>@{info.username}</CardName>
                        </CardBottom>
                     </CardBody>
                  ))
               }
            </TrendingCarousel>
            }
         </TrendingContainer>
      </TrendingBody>
   )
}

export default TrendingSection