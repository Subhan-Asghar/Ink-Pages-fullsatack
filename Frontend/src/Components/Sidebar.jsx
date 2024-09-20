import React, { useState } from 'react'

const Sidebar = ({ searchTitle, searchCategory, setTitle }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className='md:hidden fixed top-2 right-4 bg-purple-600 text-white p-4 w-12 h-12 rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 ease-in-out z-30 flex items-center justify-center'>
        {isOpen ? '✖️' : '☰'}
      </button>

      {/* Sidebar */}
      <div
        className={`bg-gradient-to-b from-gray-900 to-gray-800 w-72 h-screen fixed top-0 left-0 text-white flex flex-col justify-start shadow-2xl rounded-r-lg transition-transform duration-300 ease-in-out z-20 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:top-16 md:shadow-none`}>
        {/* Search Bar */}
        <div className='flex justify-center mt-8 px-4'>
          <input
            onChange={(e) => setTitle(e.target.value)}
            className='h-12 w-48 text-black pl-4 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-600 shadow-lg'
            placeholder='Search...'
            type='text'
          />
          <button
            onClick={searchTitle}
            className='w-12 bg-purple-600 hover:bg-purple-700 text-white rounded-r-lg transition duration-300 ease-in-out shadow-lg'>
            🔍
          </button>
        </div>

        {/* Book Categories */}
        <ul className='space-y-6 p-6 mt-8'>
          {['Fantasy', 'Horror', 'Fiction', 'Mystery', 'Thriller'].map((category) => (
            <li key={category}>
              <button
                onClick={() => searchCategory(category)}
                className='w-full text-left bg-gray-700 hover:bg-purple-700 hover:shadow-lg py-3 px-6 rounded-lg transition duration-300 ease-in-out'>
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className='fixed inset-0 bg-black opacity-50 z-10 md:hidden'></div>
      )}
    </>
  )
}

export default Sidebar
