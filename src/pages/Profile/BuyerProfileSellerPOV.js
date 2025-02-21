import React from 'react'
import BuyerSidebarSellerPOV from '../../components/BuyerSidebarSellerPOV'
import BuyerContentSellerPOV from '../../components/BuyerContentSellerPOV'

const BuyerProfileSellerPOV = () => {
  return (
    <div className='w-full min-h-[100vh] bg-webBg flex'>
      <BuyerSidebarSellerPOV/>
      <BuyerContentSellerPOV/>
    </div>
  )
}

export default BuyerProfileSellerPOV
