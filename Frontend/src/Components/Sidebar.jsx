import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Sidebar = ({ searchTitle, searchCategory, setTitle }) => (
  <div className='bg-gray-900 w-64 h-screen md:fixed top-0 md:top-16 left-0 text-white flex flex-col justify-start shadow-xl md:shadow-none'>
    {/* Search Bar */}
    <div className='flex justify-center mt-4 px-4'>
      <input
        onChange={(e) => setTitle(e.target.value)}
        className='h-10 w-40 text-black pl-4 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-600'
        placeholder='Search...'
        type='text'
      />
      <button
        onClick={searchTitle}
        className='w-10 bg-purple-600 hover:bg-purple-700 text-white rounded-r-lg transition duration-300 ease-in-out'>
        🔍
      </button>
    </div>

    {/* Book Categories */}
    <ul className='space-y-6 p-6'>
      {['Fantasy', 'Horror', 'Fiction', 'Mystery', 'Thriller'].map((category) => (
        <li key={category}>
          <button
            onClick={() => searchCategory(category.toLowerCase())}
            className='w-full text-left bg-gray-700 hover:bg-purple-700 hover:shadow-lg py-3 px-4 rounded-lg transition duration-300 ease-in-out'>
            {category}
          </button>
        </li>
      ))}
    </ul>
  </div>
)

export default Sidebar