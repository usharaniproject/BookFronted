import React from 'react'
import { useState,useEffect } from 'react'
import BookCards from '../components/BookCards'
const AnotherBooks = () => {
    const [books,setBooks]=useState([])
    useEffect(()=>{
    fetch("https://bookbackend-wvco.onrender.com/all-books").then(res =>res.json()).then(data => setBooks(data.slice(8,16)))
    },[])
 
 return (
   <div>
     <BookCards books={books} headline="Other Books"/>
   </div>
 )
}

export default AnotherBooks
