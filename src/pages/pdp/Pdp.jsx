import React from 'react'
import {Layout} from '../../components'
import BottomPdpComponent from '../../components/pdpComponent/bottomPdpComponent/BottomPdpComponent'
import MidPdpComponent from '../../components/pdpComponent/midPdpComponent/MidPdpComponent'
import TopPdpComponent from '../../components/pdpComponent/topPdpComponent/TopPdpComponent'

const Pdp = () => {
  return (
    <Layout>
      
      <TopPdpComponent />
      <MidPdpComponent />
      <BottomPdpComponent />

    </Layout>
  )
}

export default Pdp