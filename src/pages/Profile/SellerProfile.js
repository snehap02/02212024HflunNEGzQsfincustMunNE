import React from 'react'
import SellerSidebar from '../../components/SellerSidebar'
import SellerProfileContent from '../../components/SellerProfileContent'

const SellerProfile = () => {
  return (
    <div className='w-full min-h-[100vh] bg-webBg flex'>
      <SellerSidebar/>
      <SellerProfileContent/>
    </div>
  )
}

export default SellerProfile
