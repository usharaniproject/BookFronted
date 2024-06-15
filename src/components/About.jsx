import React from 'react'
import book from '../../public/book.png'
import girl from '../../public/us.png'
const About = () => {
  return (
    <>
    <div className='max-w-screen-3xl container ml-38 mx-auto mt-40 flex md:px-20 px-4 flex-col md:flex-row'>
     <div className='w-full md:w-1/2 mt-10'> {/* md:mt-32 */}
      <div className='space-y-8 '>
      <h1 className='text-4xl font-bold'>Hello, Welcome here to know more about
         <span className='text-blue-700'> Our Organisation</span></h1>
         <p className='text-xl'>Welcome to Delight Book Strore, your local haven for literary enthusiasts! Nestled in the heart of Hyderabad, our bookstore is a vibrant community hub where readers, writers, and dreamers come together to explore the magic of books. From the latest bestsellers and timeless classics to unique finds and local authors, we offer a carefully curated selection to satisfy every taste. With cozy reading nooks, engaging events, and a passionate staff ready to share personalized recommendations, Delight Book Strore is more than just a place to buy books—<span className='text-blue-700 text-2xl'> it's an abode to bibliophile.</span></p>
      </div>
      </div>
      <div className='w-full md:w-1/2'>
      <img src={book} className='w-100 h-92 ml-20 ' alt="" />
      </div>
      </div>

      <div className='max-w-screen-3xl container ml-38 mx-auto mt-30 flex md:px-20 px-4 flex-col md:flex-row'>
      <div className='w-full md:w-1/2 '>
      <div className='space-y-8 '>
      <img src={girl} className='w-100 h-92 ml-20 mt-40' alt="" />
      </div>
      </div>
      <div className='w-full md:w-1/2 mb-20'>
        <div  className='space-y-8 '>
        <h3 className='text-4xl font-bold mt-40 ml-30' >About Our Organisation</h3>
        <p className='text-xl'>Established in 1985,Delight Book Strore began its journey as a small, independent shop nestled in the charming streets of [City/Region]. Founded by my Grandfather R.Narasimha, a passionate bibliophile, the bookstore was born out of a deep love for literature and a dream to create a sanctuary for readers and writers alike.</p>
        <p className='text-xl'>At Delight Book Strore, we pride ourselves on offering a diverse and carefully curated selection of books that cater to every reader's taste. Our collection spans various genres and categories, ensuring that there's something for everyone, whether you're a casual reader, a dedicated bibliophile, or looking for the perfect gift.</p>
        <h2 className='text-4xl'>Categories</h2>
        <p className='text-xl'>Fiction, Non-Fiction, Children's Books ,Graphic Novels and Comics, Poetry and Many More</p>
        <p className='text-xl'>At Delight Book Strore, we celebrate the voices and stories of authors from around the world. We believe in the power of storytelling to inspire, educate, and entertain, and we are committed to supporting both established and emerging writers. Our author-related offerings are designed to connect you with the creators behind the books you love and to introduce you to new and diverse voices in literature.</p>
        <p className='text-xl'>We invite you to visit Delight Book Strore and experience the warmth and charm of our bookstore. Whether you're looking for your next great read, attending one of our many events, or simply enjoying a quiet moment among the shelves, you'll find a home at Delight Book Strore.</p>
        </div>
      </div>
      </div>
    </>
  )
}

export default About
