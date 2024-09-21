import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Delete from './Delete';

const View = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState('');

  const searchTitle = (title) => {
    try {
      axios.get(`http://localhost:3000/book/title?title=${title}`)
        .then((res) => {
          setData(res.data.data);
          console.log(res.data.data);
        });
    } catch (err) {
      console.log('Error', err);
    }
  };

  return (
    <>
      <div className='h-16 w-full flex justify-center items-center bg-gradient-to-r from-purple-700 to-purple-900 text-white shadow-md'>
        <h3 className='font-bold text-2xl tracking-wide'>Edit Book</h3>
      </div>

      <div className='flex justify-center mt-8'>
        <input
          onChange={(e) => setTitle(e.target.value)}
          className='h-12 w-64 text-black pl-4 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-600 shadow-md'
          placeholder='Enter Book Title...'
          type='text'
        />
        <button
          onClick={() => searchTitle(title)}
          className='w-12 h-12 bg-purple-600 hover:bg-purple-700 text-white rounded-r-lg transition duration-300 ease-in-out shadow-md flex justify-center items-center'>
          🔍
        </button>
      </div>
      <div className='ml-0 md:ml-72 mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-6'>

        {data.length > 0 ? (

          data.map((book) => (
            <div key={book._id} className='mt-4'>
              <div className='bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-2'>
                <img
                  src={book.img}
                  alt={book.title}
                  className='w-full h-auto object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-gray-800 mb-3'>{book.title}</h3>
                  <p className='text-sm text-gray-500 mb-2 capitalize'>{book.category}</p>
                  <p className='text-lg text-gray-900 font-bold mb-4'>${book.price}</p>
                  <div className='flex flex-col'>
                    <button className='flex items-center justify-center py-2 px-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg w-full hover:from-purple-700 hover:to-purple-900 transition-colors duration-300 ease-in-out shadow-md'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 2.487c.467-.467 1.22-.467 1.687 0l2.963 2.963c.467.467.467 1.22 0 1.687l-9.193 9.193-4.254 1.062 1.062-4.254 9.193-9.193z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.75 8.25L15.75 4.25" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 6h-1v1M4.5 19.5l-.866.866L4.5 22l.866-.866-.866-.866zm14.086-6.5h-.916m0-2.25h-.75" />
                      </svg>
                      <Link to={`/admin/update/${book._id}`}> Edit</Link>
                     
                    </button>
                  <Delete id={book._id}/>

                  </div>

                </div>
              </div>
            </div>
          ))
        ) : (
          <div className='mt-4 text-center text-gray-500'>
            No books found. Try searching by title.
          </div>
        )}
      </div>
    </>
  );
};

export default View;
