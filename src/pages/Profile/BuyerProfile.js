import React from 'react'
import BuyerSidebar from '../../components/BuyerSidebar'
import BuyerProfileContent from '../../components/BuyerProfileContent'

const BuyerProfile = () => {
  return (
    <div className='w-full min-h-[100vh] bg-webBg flex relative'>
      <BuyerSidebar/>
      <BuyerProfileContent/>
    </div>
  )
}

export default BuyerProfile
