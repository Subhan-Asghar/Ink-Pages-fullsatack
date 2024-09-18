import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BookCard from '../Components/BookCard'
import Sidebar from '../Components/Sidebar'
const Home = () => {
  const [data, setData] = useState([])
  const [title, setTitle] = useState('')

  // Fetch books by title
  const searchTitle = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/book/title?title=${title}`)
      setData(res.data.data)
    } catch (err) {
      console.log('Error', err)
    }
  }

  // Fetch books by category
  const searchCategory = async (category) => {
    try {
      const res = await axios.get(`http://localhost:3000/book/category?category=${category}`)
      setData(res.data.data)
    } catch (err) {
      console.log('Error', err)
    }
  }

  // Fetch all books on initial render
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:3000/')
        setData(res.data.data)
      } catch (err) {
        console.log('Error', err)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      {/* Header */}
      <div className='bg-gradient-to-r from-purple-900 via-indigo-900 to-indigo-800 h-16 fixed top-0 left-0 w-full z-50 flex justify-center items-center shadow-lg'>
        <h3 className='text-gray-100 font-bold text-2xl tracking-wider'>Ink&Pages</h3>
      </div>

      {/* Sidebar */}
      <Sidebar searchTitle={searchTitle} searchCategory={searchCategory} setTitle={setTitle} />

      {/* Book Cards */}
      <div className='ml-0 md:ml-72 mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-6'>
        {data.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </>
  )
}

export default Home