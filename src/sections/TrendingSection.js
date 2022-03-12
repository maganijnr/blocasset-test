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

import './Trending.css'


import {trendingCards} from '../data/data'
import Vector from '../assets/releaseVector.svg'
import HeartIcon from '../assets/icons/heartIcon.svg'
import ShareIcon from '../assets/icons/shareIcon.svg'
import ArrowDownIcon from '../assets/icons/arrowDownIcon.svg'
import FolderIcon from '../assets/icons/folderIcon.svg'
import PurpleShare from '../assets/icons/shareVector.svg'
import Carousel from 'react-elastic-carousel'

function TrendingSection() {
   const dim = window.innerWidth
   return (
      <TrendingBody>
         <TrendingContainer>
            <TrendingHeader>
               <TrendingTitle>Trending</TrendingTitle>
               <TrendingP>
                  Newly minted assets from top artists around the world
               </TrendingP>
               <TrendingVector>
                  <img src={Vector} alt="vectore"/>
               </TrendingVector>
            </TrendingHeader>
            {/* {   dim > 1025 &&  <Carousel 
          itemsToShow={4}
          showArrows={false}
          initialActiveIndex={20}
          itemPadding={[0, 0, 50, 20]}
          >     
        {  trendingCards.map((item ) => {
            return (
              <div key={item.id} className='new-releases-container two'>
                  <img src={item.image} alt={item.name} className="new-release-image"/>

                  <div className='new-release-interfaces'>
                      <div className='new-release-interface'>
                        <img src={ArrowDownIcon} alt="Icon" />
                      </div>
                      <div className='new-release-interface'>
                        <img src={HeartIcon} alt="Icon" />
                      </div>
                      <div className='new-release-interface'>
                        <img src={ShareIcon} alt="Icon" />
                      </div>
                      <div className='new-release-interface'>
                        <img src={FolderIcon} alt="Icon" />
                      </div>
                  </div>

                  <div>
                    <h2 className='new-release-image-name'>{item.name}</h2>
                  </div>
                
                <div className='new-releases-prices'>
                  <div>
                    <h2>{item.price} Matic</h2>
                    <h3>${item.priceTwo}</h3>
                  </div>
                  <div>
                    <img src={PurpleShare} alt="polygon" className='polygon' />
                  </div>
                </div>

                <div className='new-release-owner'>
                  <img src={item.ownerImage} alt={item.owner} />
                  <h4>{item.owner}</h4>
                </div>
              </div>
            )
            })
      }
          </Carousel> }

      {   dim > 601 && dim < 1025 &&  <Carousel 
          itemsToShow={3}
          showArrows={false}
          initialActiveIndex={20}
          itemPadding={[0, 0, 50, 20]}
          >     
        {  trendingCards.map((item ) => {
            return (
              <div key={item.id} className='new-releases-container'>
                  <img src={item.image} alt={item.name} className="new-release-image"/>

                  <div className='new-release-interfaces'>
                      <div className='new-release-interface'>
                        <img src={ArrowDownIcon} alt="Icon" />
                      </div>
                      <div className='new-release-interface'>
                        <img src={HeartIcon} alt="Icon" />
                      </div>
                      <div className='new-release-interface'>
                        <img src={ShareIcon} alt="Icon" />
                      </div>
                      <div className='new-release-interface'>
                        <img src={FolderIcon} alt="Icon" />
                      </div>
                  </div>

                  <div>
                    <h2 className='new-release-image-name'>{item.name}</h2>
                  </div>
                
                <div className='new-releases-prices'>
                  <div>
                    <h2>{item.price} Matic</h2>
                    <h3>${item.priceTwo}</h3>
                  </div>
                  <div>
                    <img src={PurpleShare} alt="polygon" className='polygon' />
                  </div>
                </div>

                <div className='new-release-owner'>
                  <img src={item.ownerImage} alt={item.owner} />
                  <h4>{item.owner}</h4>
                </div>
              </div>
            )
            })
      }
          </Carousel> }
      {   dim < 601 &&   <Carousel 
          itemsToShow={1}
          showArrows={false}
          initialActiveIndex={5}
          itemPadding={[0, 0, 50]}
          >     
        {  trendingCards.map((item ) => {
            return (
             item.id < 12 && <div key={item.id} className='new-releases-container'>
                  <img src={item.image} alt={item.name} className="new-release-image"/>

                  <div className='new-release-interfaces'>
                      <div className='new-release-interface'>
                        <img src={ArrowDownIcon} alt="Icon" />
                      </div>
                      <div className='new-release-interface'>
                        <img src={HeartIcon} alt="Icon" />
                      </div>
                      <div className='new-release-interface'>
                        <img src={ShareIcon} alt="Icon" />
                      </div>
                      <div className='new-release-interface'>
                        <img src={FolderIcon} alt="Icon" />
                      </div>
                  </div>

                  <div>
                    <h2 className='new-release-image-name'>{item.name}</h2>
                  </div>
                
                <div className='new-releases-prices'>
                  <div>
                    <h2>{item.price} Matic</h2>
                    <h3>${item.priceTwo}</h3>
                  </div>
                  <div>
                    <img src={PurpleShare} alt="polygon" className='polygon' />
                  </div>
                </div>

                <div className='new-release-owner'>
                  <img src={item.ownerImage} alt={item.owner} />
                  <h4>{item.owner}</h4>
                </div>
              </div>
            )
            })
      }
          </Carousel> } */}
            <TrendingCarousel 
               itemsToShow={4} 
               autoPlaySpeed={2000} 
               showArrows={false} 
               enableAutoPlay={true} 
               easing="ease" 
               initialActiveIndex={20}
               itemPadding={[0, 0, 50, 20]}
               outerSpacing={2}
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
         </TrendingContainer>
      </TrendingBody>
   )
}

export default TrendingSection