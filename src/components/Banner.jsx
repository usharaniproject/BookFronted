import React from 'react'
import BannerCard from '../home/BannerCard'
const Banner = () => {
  return (
    <div className='px-4 lg:px-24 container bg-teal-100 flex items-center'>
    <div className='flex w-full  container flex-col md:flex-row justify-between items-center gap-12 py-40'>
      {/*  left div  */}
      <div className='md:w-1/2 space-y-8 h-half'>
        <h2 className='text-4xl font-bold leading-sung text-black'>Buy and Sell Your Books <span className='text-blue-700'>for the Best Prices</span></h2>
        <p className='md:w-4/5'> lorem ipsum dolor sit,amet consectutur adipiscing elit. Porro, assumenda? Repellendus,iste corrupti? Tempore Laudantium repellendus accusamus accusantinum sed
          architecto adio, nisi expedita quas quidem nesciunt debitis dolore nan aspetnatut praesentium assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
          animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam consequatur!
          </p>
          <div>
            {/* <input type='search' name='search'  id='search' placeholder='search a book' 
            className='px-3 py-3 rounded-s-sm outline-none'/> */}
            {/* <button className='bg-blue-700 h-19 px-6 py-3 text-white font-medium hover:bg-black
             transition-all ease-in duration-200'>Search</button> */}
          </div>
      </div>
        
      <div>
        <BannerCard/>
      </div>
    </div>
    </div>
   
  )
}

export default Banner
