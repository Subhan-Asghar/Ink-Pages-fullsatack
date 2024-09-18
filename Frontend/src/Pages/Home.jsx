import React from 'react'

const Home = () => {
  return (
    <>
      {/* Header */}
      <div className='bg-gradient-to-r from-purple-900 via-indigo-900 to-indigo-800 h-16 flex justify-center items-center shadow-lg'>
        <h3 className='text-gray-100 font-bold text-2xl tracking-wider'>
          Ink&Pages
        </h3>
      </div>

      {/* Sidebar */}
      <div className='bg-gray-900 w-64 h-screen fixed top-16 left-0 text-white flex flex-col justify-start shadow-xl'>
        {/* Search Bar */}
        <div className='flex justify-center mt-4 px-4'>
          <input
            className='h-10 w-40 text-black pl-4 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-600'
            placeholder='Search...'
            type='text'
          />
          <button
            className='w-10 bg-purple-600 hover:bg-purple-700 text-white rounded-r-lg transition duration-300 ease-in-out'
          >
            🔍
          </button>
        </div>

        {/* Book Categories */}
        <ul className='space-y-6 p-6'>
          <li>
            <button className='w-full text-left bg-gray-700 hover:bg-purple-700 hover:shadow-lg py-3 px-4 rounded-lg transition duration-300 ease-in-out'>
              Fantasy
            </button>
          </li>
          <li>
            <button className='w-full text-left bg-gray-700 hover:bg-purple-700 hover:shadow-lg py-3 px-4 rounded-lg transition duration-300 ease-in-out'>
              Horror
            </button>
          </li>
          <li>
            <button className='w-full text-left bg-gray-700 hover:bg-purple-700 hover:shadow-lg py-3 px-4 rounded-lg transition duration-300 ease-in-out'>
              Fiction
            </button>
          </li>
          <li>
            <button className='w-full text-left bg-gray-700 hover:bg-purple-700 hover:shadow-lg py-3 px-4 rounded-lg transition duration-300 ease-in-out'>
              Mystery
            </button>
          </li>
          <li>
            <button className='w-full text-left bg-gray-700 hover:bg-purple-700 hover:shadow-lg py-3 px-4 rounded-lg transition duration-300 ease-in-out'>
              Thriller
            </button>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Home
