import React, { useEffect, useState } from 'react'
import { Card } from "flowbite-react";
const Shop = () => {
  const [books,setbooks]=useState([]);
  useEffect(()=>{
   fetch("https://bookbackend-wvco.onrender.com/all-books").then(res => res.json()).then(data => setbooks(data))
  },[])
  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-4xl font-bold text-center'>All Books are <span className='text-blue-700'>Available Here</span></h2>
      <div className='grid gap-10 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {
          books.map(book =>  <Card>
            <img src={book.imageUrl} alt='' className='h-96'/>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {/* Noteworthy technology acquisitions 2021 */}
              <p>{book.bookTitle}</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
             <p>
             Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
             </p>
            </p>
            <button className='bg-blue-700  mb-0 py-2 rounded font-semibold text-white'>Buy Now</button>
          </Card>
          )
        }
      </div>
    </div>
  )
}

export default Shop
