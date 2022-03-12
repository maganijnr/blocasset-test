import {
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
   CardName,
} from './styles/CardStyles'

import HeartIcon from '../assets/icons/heartIcon.svg'
import ShareIcon from '../assets/icons/shareIcon.svg'
import ArrowDownIcon from '../assets/icons/arrowDownIcon.svg'
import FolderIcon from '../assets/icons/folderIcon.svg'
import PurpleShare from '../assets/icons/shareVector.svg'


function Card({data}) {
   const {image, avatar, username, price, cardH2, cardH3} = data
   return (
      <CardBody>
         <CardTop>
            <CardImgContainer>
               <CardImg src={image} alt="img"/>
               <CardIcons>
                  <CardIcon src={ArrowDownIcon} alt="icon"/>
                  <CardIcon src={HeartIcon} alt="icon"/>
                  <CardIcon src={ShareIcon} alt="icon"/>
                  <CardIcon src={FolderIcon} alt="icon"/>
               </CardIcons>
            </CardImgContainer>
            <CardH2>{cardH2}</CardH2>
            <CardCoinInfo>
               <CoinData>
                  <CoinMatic>{cardH3}</CoinMatic>
                  <CoinPrice>${price}</CoinPrice>
               </CoinData>
               <CoinShare>
                  <img src={PurpleShare} alt="icon"/>
               </CoinShare>
            </CardCoinInfo>
         </CardTop>
         <CardBottom>
            <CardAvatarContainer>
               <CardAvatar src={avatar} alt="avatar"/>
            </CardAvatarContainer>
            <CardName>@{username}</CardName>
         </CardBottom>
      </CardBody>
   )
}

export default Card