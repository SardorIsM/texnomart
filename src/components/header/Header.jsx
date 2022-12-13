import React, {  useState } from 'react'
import BasketModule from '../module/basket/BasketModule'
import BottomHeader from './bottomHeader/BottomHeader'
import MidHeader from './midHeader/MidHeader'
import TopHeader from './topHeader/TopHeader'
import { Overlay, CatalogOverlay } from '../../utils';
import LoginModule from '../module/login/LoginModule'
import Catalog from '../catalog/Catalog'
import ScrollHeader from './scrollHeader/ScrollHeader'


const Header = () => {

  const [isBasketModuleActive, setIsBasketModuleActive] = useState(false)
  const [isLoginModuleActive, setIsLoginModuleActive] = useState(false)
  const [isCatalogActive, setCatalogActive] = useState(false)
  // useEffect(() => {
  //   if (isBasketModuleActive,isLoginModuleActive) {
  //     document.body.style.overflow = "hidden"
  //   }
  //   else {
  //     document.body.style.overflow = "auto"
  //   }
  // }, [isBasketModuleActive, isLoginModuleActive])

  return (
    <header className='navbar'>
      <TopHeader />
      <MidHeader setIsBasketModuleActive={setIsBasketModuleActive} setIsLoginModuleActive={setIsLoginModuleActive} />
      <LoginModule isLoginModuleActive={isLoginModuleActive} setIsLoginModuleActive={setIsLoginModuleActive} />
      <BasketModule isBasketModuleActive={isBasketModuleActive} setIsBasketModuleActive={setIsBasketModuleActive}/>
      <BottomHeader isCatalogActive={isCatalogActive} setCatalogActive={setCatalogActive} />
      <ScrollHeader setIsBasketModuleActive={setIsBasketModuleActive} setIsLoginModuleActive={setIsLoginModuleActive} isCatalogActive={isCatalogActive} setCatalogActive={setCatalogActive} />
      <Catalog isCatalogActive={isCatalogActive} />
      {isBasketModuleActive && <Overlay state={isBasketModuleActive} callback={setIsBasketModuleActive} />}
      {isLoginModuleActive && <Overlay state={isLoginModuleActive} callback={setIsLoginModuleActive} />}
      {isCatalogActive && <CatalogOverlay state={isCatalogActive} callback={setCatalogActive} />}

    </header >
  )
}

export default Header