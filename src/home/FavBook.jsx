import React from 'react'
import { Link } from 'react-router-dom';

import FavBookImg from '../assets/banner-books/FavBookImg.jpg'
const FavBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
      <div className='md:w-1/2'>
           <img src={FavBookImg} alt='' className='rounded md:w-15/12'/>
      </div>
      <div className='md:w-1/2 space-y-6'>
        <h2 className='text-4xl pl-8 font-bold my-5 md:w-3/4 leading-snug'>Find Your Favourite
         <span className='text-blue-700'>  Book Here!</span></h2>
         <p className='mb-10 text-lg md:w-5/6 pl-8'>lorem ipsum dolor sit,amet consectutur adipiscing elit. Porro, assumenda? Repellendus,iste corrupti? Tempore Laudantium repellendus accusamus accusantinum sed
          architecto adio, nisi expedita quas quidem nesciunt debitis dolore nan aspetnatut praesentium assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
          animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam consequatur!</p>
          <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
            <div>
                <h3 className='text-3xl font-bold pl-8'>800+</h3>
                <p className='text-base pl-8'>Book Listing</p>
            </div>
            <div>
                <h3 className='text-3xl font-bold pl-8'>550+</h3>
                <p className='text-base pl-8'>Register Users</p>
            </div>
            <div>
                <h3 className='text-3xl font-bold pl-8'>1200+</h3>
                <p className='text-base pl-8'>PDF Downloads</p>
            </div>
          </div>
          <div className='pl-8'>
            <Link to="/shop" ><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded 
          hover:bg-black transition-all duration-300 pl-9'>Explore More</button></Link>
          </div>
      </div>
    </div>
  )
}

export default FavBook
