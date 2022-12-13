import React from 'react'
import {Layout} from '../../components'
import DownloadAppendix from '../../components/homeComponent/downloadAppendix/DownloadAppendix'
import FirstCarousel from '../../components/homeComponent/firstCarousel/FirstCarousel'
import FirstProductsSwiper from '../../components/homeComponent/firstProductsSwiper/FirstProductsSwiper'
import FirstSwiper from '../../components/homeComponent/firstSwiper/FirstSwiper'
import SecondProductsSwiper from '../../components/homeComponent/secondProductsSwiper/SecondProductsSwiper'
import SecondSwiper from '../../components/homeComponent/secondSwiper/SecondSwiper'
import SpecilaAbilities from '../../components/homeComponent/specialAbilities/SpecilaAbilities'
import ThirdProductSwiper from '../../components/homeComponent/thirdProductsSwiper/ThirdProductSwiper'

const Home = () => {
  return (
    <Layout>
      <FirstCarousel />
      <FirstSwiper />
      <SecondSwiper />
      <FirstProductsSwiper />
      <SecondProductsSwiper />
      <ThirdProductSwiper />
      <DownloadAppendix />
      <SpecilaAbilities />
    </Layout>
  )
}

export default Home