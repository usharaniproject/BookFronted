import React from 'react'
import Banner from '../components/Banner'
// import BannerCard from './BannerCard'
import BestSellerBook from './BestSellerBooks'
import FavBook from './FavBook'
import PromoBanner from './PromoBanner'
import AnotherBooks from './AnotherBooks'
import Review from './Review'

const home = () => {
  return (
   <div>
    <Banner/>
   <BestSellerBook/>
  <FavBook/>
  <PromoBanner/>
  <AnotherBooks/>
  <Review/>
   </div>

  )
}

export default home
