import React from 'react'

const BookCard = ({ book }) => (
  <div className='bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-2 max-w-xs mx-auto'>
    <img
      src={book.img}
      alt={book.title}
      className='w-40 h-60 object-cover'
    />
    <div className='p-4'>
      <h3 className='text-lg font-semibold text-gray-800 mb-2'>{book.title}</h3>
      <p className='text-xs text-gray-500 mb-1 capitalize'>{book.category}</p>
      <p className='text-md text-gray-900 font-bold mb-3'>${book.price}</p>
      <button className='py-1 px-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg w-full hover:from-purple-700 hover:to-purple-900 transition-colors duration-300 ease-in-out shadow-md'>
        Buy Now
      </button>
    </div>
  </div>
)

export default BookCard;
