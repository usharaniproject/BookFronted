import React from 'react'
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Checkbox, Label, Select, TextInput ,Textarea} from "flowbite-react";
const EditBook = () => {
  const {id}= useParams();
  const {bookTitle,authorisation,imageUrl,category,bookDescription,bookPdfUrl}=useLoaderData()

  const bookCategories=[
    "Fiction",
    "Psychology",
    "Graphical Novels",
    "Young Adult",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Classics",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-Help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Culture",
    "Education",
    "Environment and Ecology",
    "Comics",
    "Biography",
    "Historical Fiction",
    "Thriller",
    "EBooks",
    "Music",
    "Science"
  ]

  const [selectedBookCategory,setSelectedBookCategory] = useState(bookCategories[0]);
  const handleChangeSelectedValue = (event) =>{
    console.log(event.target.value)
    setSelectedBookCategory(event.target.value);
  }

  //On Submitting the Book
  const handleUpdate =(event) =>{
event.preventDefault();
const form =event.target;

const  bookTitle=form.bookTitle.value;
const  authorisation=form.authorisation.value;
const imageUrl=form.imageUrl.value;
const category=form.category.value;
const bookDescription=form.bookDescription.value;
const bookPdfUrl=form.bookPdfUrl.value;
  
   const updateBookObj={
    bookTitle,authorisation,imageUrl,category,bookDescription,bookPdfUrl
   }
    // console.log(bookObj)
  //Updating the Book Data
  fetch(`https://bookbackend-wvco.onrender.com/book/${id}`,{
    method:"PATCH",
    headers:{
      "Content-type":"application/json"
    },
    body:JSON.stringify(updateBookObj)
  }).then(res => res.json()).then(data =>{
    alert("Book Updated Successsfully");
  
  })
  }
  return (
    
    <div className='px-4 my-12'>
      {/* <Navbar/> */}
      <h2 className='mb-8 text-3xl font-bold'>Update <span className='text-blue-700'> the Book Data</span></h2>
    
      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/*  First Name*/}
      <div className='flex gap-8'>
        {/* Book Name*/}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title"/>
        </div>
        <TextInput id="bookTitle" name='bookTitle' type="text" defaultValue={bookTitle} placeholder="Book Name" required />
      </div>
      {/* Author Name */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorisation" value="Author Name" />
        </div>
        <TextInput id="authorisation" name='authorisation' type="text" defaultValue={authorisation} placeholder="Author Name" required />
      </div>
      </div> 


      {/* Second Row */}
      <div className='flex gap-8'>
        {/* Book Image URL*/}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageUrl" value="Book Image URL"/>
        </div>
        <TextInput id="imageUrl" name='imageUrl' type="text" defaultValue={imageUrl} placeholder="Book Image URL" required />
      </div>
      {/* Category */}
      <div className='lg:w-1/2'>
      <div className="mb-2 block">
          <Label htmlFor="inputState" value="Book  Category"/>
        </div>
        <Select id="inputState" name="category" defaultValue={category} className='w-full rounded' value={selectedBookCategory}
        onChange={handleChangeSelectedValue}>
         {
      bookCategories.map((option)=> <option key={option} value={option}>{option}</option>)
            }
        </Select>
      </div>
      </div>
      {/* Third Row*/}
      <div>
        {/* Book Description */}
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea id="bookDescription" name="bookDescription" defaultValue={bookDescription} placeholder="Write Your Book Description..." className='w-full' required rows={5} />
       
      </div>

      {/* Book PDF Link*/}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPdfUrl" value="Book PDF Url" />
        </div>
        <TextInput id="bookPdfUrl" type="text" defaultValue={bookPdfUrl} placeholder="Book URL Pdf" required />
      </div>
     
      <Button type="submit" className='mt-5 bg-blue-700 text-white'>Update Book</Button>
    </form>
    </div>
  )
}

export default EditBook
