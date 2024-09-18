import React, { useEffect, useState } from 'react'
import axios from 'axios'
const BookCard = ({ book }) => (
    <div className='bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-2'>
      <img src={book.img} alt={book.title} className='w-full h-48 object-cover' />
      <div className='p-4'>
        <h3 className='text-lg font-semibold text-gray-900 mb-2'>{book.title}</h3>
        <p className='text-sm text-gray-500 mb-1 capitalize'>{book.category}</p>
        <p className='text-gray-900 font-bold text-lg'>${book.price}</p>
        <button className='mt-4 py-2 px-4 bg-purple-600 text-white rounded-lg w-full hover:bg-purple-700 transition-colors duration-300 ease-in-out'>
          Buy Now
        </button>
      </div>
    </div>
  )
  export default BookCard;