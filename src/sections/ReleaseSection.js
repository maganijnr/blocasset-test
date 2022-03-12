import {
   ReleaseBody,
   ReleaseContainer,
   ReleaseHeader,
   ReleaseTitle,
   ReleaseP,
   ReleaseVector,
   ReleaseCards,
   ReleaseButton
} from './styles/ReleaseStyles'
import Card from '../components/Card'

import Vector from '../assets/releaseVector.svg'
import {releaseCards} from '../data/data'
import {useEffect, useState} from 'react'
import Grid from '@mui/material/Grid';

function getWindowDimensions() {
   const { innerWidth: width, innerHeight: height } = window;
   return {
      width,
      height
   };
}

function useWindowDimensions() {
   const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

   useEffect(() => {
      function handleResize() {
         setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, []);

   return windowDimensions;
}

function ReleaseSection() {
   const { width } = useWindowDimensions();
   const [array, setArray] = useState([])

   useEffect(() => {
      if(width > 1024){
         setArray(releaseCards)
      } else if (width > 768){
         const cardSlice = releaseCards.slice(0,6)
         setArray(cardSlice)
      } else {
         const cardSlice = releaseCards.slice(0,4)
         setArray(cardSlice)
      }
   },[width])

   return (
      <ReleaseBody>
         <ReleaseContainer>
            <ReleaseHeader>
               <ReleaseTitle>New Releases</ReleaseTitle>
               <ReleaseP>
                  Newly minted assets from top artists around the world+
               </ReleaseP>
               <ReleaseVector>
                  <img src={Vector} alt="vectore"/>
               </ReleaseVector>
            </ReleaseHeader>
            <ReleaseCards>
               { 
                  array.map((info) => (
                     <Card data={info} key={info.id}/>
                  ))
               }
            </ReleaseCards>
            <ReleaseButton>Load More</ReleaseButton>
         </ReleaseContainer>
      </ReleaseBody>
   )
}

export default ReleaseSection