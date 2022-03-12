import Navbar from '../components/Navbar'

//Sections
import HeroSection from '../sections/HeroSection'
import CryptoCardsSection from '../sections/CryptoCardsSection'
import ReleaseSection from '../sections/ReleaseSection'
import TrendingSection from '../sections/TrendingSection'
import SpecialSection from '../sections/SpecailSection'
import WorkSection from '../sections/WorkSection'
import NetworkSection from '../sections/NetworkSection'
import FooterSection from '../sections/FooterSection'

function Home() {
   return (
      <>
         <Navbar/>
         <HeroSection/>
         <CryptoCardsSection/>
         <ReleaseSection/>
         {/* <TrendingSection/> */}
         <SpecialSection/>
         <WorkSection/>
         <NetworkSection/>
         <FooterSection/>
      </>
   )
}

export default Home