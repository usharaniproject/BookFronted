// import React from 'react'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { FaCartShopping } from 'react-icons/fa6'
// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const BookCards = ({headline,books}) => {
    // console.log(books)
  return (
    <div className='my-16 px-4 lg:px-24 container'>
      <h3 className='text-4xl text-center font-bold text-black my-5'>{headline}</h3>
      {/*  cards*/}
        <div className='mt-12'>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-full"
      >
       
        {
            books.map(book =>  <SwiperSlide key={book._id}>
                    <Link to={`/book/${book._id}`}>
                        <div className='relative'>
                            <img src={book.imageUrl} alt=''/>
                            <div className='absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded'>
                                <FaCartShopping className='w-4 h-4 text-white'/>
                            </div>
                        </div>
                        <div>
                            <div >
                            <h3>{book.bookTitle}</h3>
                            <p>{book.authorisation}</p>
                            </div>
                            <div>
                                <p>$100.00</p>
                            </div>
                        </div>
                    </Link>

            </SwiperSlide>)
        }
      </Swiper>
        </div>
    </div>
  )
}

export default BookCards
