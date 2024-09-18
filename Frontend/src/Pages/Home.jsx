import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {
  const [data, setData] = useState([])
  const [title, settitle] = useState([])
  const search_title=async(title)=>{
    try {
      const res = await axios.get(`http://localhost:3000/book/title?title=${title}`)
      const result = res.data.data
      console.log(result)
      setData(result)
    } catch (err) {
      console.log('Error', err)
    }

  }
  const search_category=async(category)=>{
    try {
      const res = await axios.get(`http://localhost:3000/book/category?category=${category}`)
      const result = res.data.data
      console.log(result)
      setData(result)
    } catch (err) {
      console.log('Error', err)
    }

  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:3000/')
        const result = res.data.data
        console.log(result)
        setData(result)
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
  <h3 className='text-gray-100 font-bold text-2xl tracking-wider'>
    Ink&Pages
  </h3>
</div>


      {/* Sidebar */}
      <div className='bg-gray-900 w-64 h-screen md:fixed top-0 md:top-16 left-0 text-white flex flex-col justify-start shadow-xl md:shadow-none'>
        {/* Search Bar */}
        <div className='flex justify-center mt-4 px-4'>
          <input
          onChange={(e)=>{settitle(e.target.value)}}
            className='h-10 w-40 text-black pl-4 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-600'
            placeholder='Search...'
            type='text'
          />
          <button
          onClick={()=>{search_title(title)}}
          className='w-10 bg-purple-600 hover:bg-purple-700 text-white rounded-r-lg transition duration-300 ease-in-out'>
            🔍
          </button>
        </div>

        {/* Book Categories */}
        <ul className='space-y-6 p-6'>
          <li>
            <button
            onClick={()=>{search_category('fantasy')}}
             className='w-full text-left bg-gray-700 hover:bg-purple-700 hover:shadow-lg py-3 px-4 rounded-lg transition duration-300 ease-in-out'>
              Fantasy
            </button>
          </li>
          <li>
            <button 
            onClick={()=>{search_category('horror')}}
            className='w-full text-left bg-gray-700 hover:bg-purple-700 hover:shadow-lg py-3 px-4 rounded-lg transition duration-300 ease-in-out'>
              Horror
            </button>
          </li>
          <li>
            <button
            onClick={()=>{search_category('fiction')}}
            className='w-full text-left bg-gray-700 hover:bg-purple-700 hover:shadow-lg py-3 px-4 rounded-lg transition duration-300 ease-in-out'>
              Fiction
            </button>
          </li>
          <li>
            <button 
            onClick={()=>{search_category('mystery')}}
            className='w-full text-left bg-gray-700 hover:bg-purple-700 hover:shadow-lg py-3 px-4 rounded-lg transition duration-300 ease-in-out'>
              Mystery
            </button>
          </li>
          <li>
            <button 
            onClick={()=>{search_category('thiller')}}
            className='w-full text-left bg-gray-700 hover:bg-purple-700 hover:shadow-lg py-3 px-4 rounded-lg transition duration-300 ease-in-out'>
              Thriller
            </button>
          </li>
        </ul>
      </div>

      {/* Book Cards */}
      <div className='ml-0 md:ml-72 mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-6'>
        {data.map((book) => (
          <div
            key={book._id}
            className='bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-2'
          >
            <img
              src={book.img}
              alt={book.title}
              className='w-full h-48 object-cover'
            />
            <div className='p-4'>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                {book.title}
              </h3>
              <p className='text-sm text-gray-500 mb-1 capitalize'>{book.category}</p>
              <p className='text-gray-900 font-bold text-lg'>${book.price}</p>
              <button className='mt-4 py-2 px-4 bg-purple-600 text-white rounded-lg w-full hover:bg-purple-700 transition-colors duration-300 ease-in-out'>
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home
