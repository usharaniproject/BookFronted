import React, { useRef, useState } from 'react';
import { Avatar } from "flowbite-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar } from 'react-icons/fa6';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import FavBookImg from '../assets/banner-books/FavBookImg.jpg'
import pic1 from '../assets/banner-books/pic1.jpg'
import pic2 from '../assets/banner-books/pic2.jpg'
import pic3 from '../assets/banner-books/pic3.jpg'
import pic4 from '../assets/banner-books/pic4.jpg'
import pic5 from '../assets/banner-books/pic5.jpg'
import pic6 from '../assets/banner-books/pic6.jpg'
import pic7 from '../assets/banner-books/pic7.jpg'
// import required modules
import { Pagination } from 'swiper/modules';
const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center mb-10 leading sung'>Our Customers</h2>
      <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border pb-10 mb-10'>
            <div className='space-y-6'>
                {/* Stars */}
                <div className='text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                </div>
                {/* text */}
                <div className='mt-8'>
                    <p className='mb-5'>"The Night Circus is a magical journey that captivated me from the first page. Morgenstern's enchanting prose and vivid descriptions make the circus come alive. The intertwining stories of the characters are beautifully crafted, and the mystical elements add a layer of wonder. This book is a must-read for anyone who loves fantasy and romance."</p>
          <Avatar
           alt='avatar of jese'
            img={pic1}  
            rounded
            className='w-10 mb-4'
           />
           <h5 className='text-lg font-medium'>Maithli</h5>
           <p className='text-base'>CEO Of Delighted Organisations</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border pb-10 mb-10'>
        <div className='space-y-6'>
                {/* Stars */}
                <div className='text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                </div>
                {/* text */}
                <div className='mt-8'>
                    <p className='mb-5'>"Educated is a powerful and inspiring memoir that left a lasting impact on me. Westover's story of overcoming her unconventional and challenging upbringing to achieve an education is both heartbreaking and uplifting. Her writing is raw and honest, and her resilience is truly remarkable. It is highly recommend for an inspiring read."</p>
          <Avatar
           alt='avatar of jese'
            img={pic2}  
            rounded
            className='w-10 mb-4'
           />
           <h5 className='text-lg font-medium'>Kavya</h5>
           <p className='text-base'>Working Professional</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border pb-10 mb-10'>
        <div className='space-y-6'>
                {/* Stars */}
                <div className='text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                </div>
                {/* text */}
                <div className='mt-8'>
                    <p className='mb-5'>"Delia Owens weaves a compelling tale of isolation, survival, and resilience in Where the Crawdads Sing. The natural beauty of the North Carolina marshlands is beautifully described, and the protagonist, Kya, is a character you can't help but root for. The blend of mystery and coming-of-age elements kept me engaged throughout.</p>
          <Avatar
           alt='avatar of jese'
            img={pic3}  
            rounded
            className='w-10 mb-4 h-10'
           />
           <h5 className='text-lg font-medium'>Sidharth</h5>
           <p className='text-base'>Software Engineer</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border pb-10 mb-10'>
        <div className='space-y-6'>
                {/* Stars */}
                <div className='text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                </div>
                {/* text */}
                <div className='mt-8'>
                    <p className='mb-5'>"The Night Circus is a magical journey that captivated me from the first page. Morgenstern's enchanting prose and vivid descriptions make the circus come alive. The intertwining stories of the characters are beautifully crafted, and the mystical elements add a layer of wonder. This book is a must-read for anyone who loves fantasy and romance."</p>
          <Avatar
           alt='avatar of jese'
            img={pic4}  
            rounded
            className='w-10 mb-4 h-10'
           />
           <h5 className='text-lg font-medium'>Roshan</h5>
           <p className='text-base'>Manager</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border pb-10 mb-10'>
        <div className='space-y-6'>
                {/* Stars */}
                <div className='text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                </div>
                {/* text */}
                <div className='mt-8'>
                    <p className='mb-5'>"The Great Gatsby is a timeless classic that captures the essence of the Roaring Twenties. Fitzgerald's elegant writing and complex characters make it a compelling read. The themes of ambition, love, and the American Dream are still relevant today.The beauty of the prose and the depth of the characters make it a book worth revisiting."</p>
          <Avatar
           alt='avatar of jese'
            img={pic5}  
            rounded
            className='w-10 mb-4 h-10'
           />
           <h5 className='text-lg font-medium'>Adhwitha</h5>
           <p className='text-base'>Law Student</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border pb-10 mb-10'>
        <div className='space-y-6'>
                {/* Stars */}
                <div className='text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                </div>
                {/* text */}
                <div className='mt-8'>
                    <p className='mb-5'>"Educated is a powerful and inspiring memoir that left a lasting impact on me. Westover's story of overcoming her unconventional and challenging upbringing to achieve an education is both heartbreaking and uplifting. Her writing is raw and honest, and her resilience is truly remarkable. It is  highly recommend for an inspiring read."</p>
          <Avatar
           alt='avatar of jese'
            img={pic6}  
            rounded
            className='w-10 mb-4 h-10'
           />
           <h5 className='text-lg font-medium'>Ajay</h5>
           <p className='text-base'>Mechanical Engineer</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border pb-10 mb-10'>
        <div className='space-y-6'>
                {/* Stars */}
                <div className='text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                </div>
                {/* text */}
                <div className='mt-8'>
                    <p className='mb-5'>"The Great Gatsby is a timeless classic that captures the essence of the Roaring Twenties. Fitzgerald's elegant writing and complex characters make it a compelling read. The themes of ambition, love, and the American Dream are still relevant today. While the story's tragic elements can be quite somber, the beauty of the prose and the depth of the characters make it a book worth revisiting."</p>
          <Avatar
           alt='avatar of jese'
            img={pic7}  
            rounded
            className='w-10 mb-4 h-10'
           />
           <h5 className='text-lg font-medium'>Usha</h5>
           <p className='text-base'>Lecturer</p>
                </div>
            </div>
        </SwiperSlide> 
      </Swiper>
      </div>
    </div>
  )
}

export default Review
