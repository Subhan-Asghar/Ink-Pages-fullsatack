import React from 'react'

const BookCard = ({ book }) => (
  <div className='bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-2'>
    <img
      src={book.img}
      alt={book.title}
      className='w-full h-auto '
    />
    <div className='p-6'>
      <h3 className='text-xl font-semibold text-gray-800 mb-3'>{book.title}</h3>
      <p className='text-sm text-gray-500 mb-2 capitalize'>{book.category}</p>
      <p className='text-lg text-gray-900 font-bold mb-4'>${book.price}</p>
      <button className='py-2 px-6 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg w-full hover:from-purple-700 hover:to-purple-900 transition-colors duration-300 ease-in-out shadow-md'>
        Buy Now
      </button>
    </div>
  </div>
)

export default BookCard
