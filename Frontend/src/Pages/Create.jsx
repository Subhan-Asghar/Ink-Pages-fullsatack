import React, { useState } from 'react';
import axios from 'axios';

const Create = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [img, setImg] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title,
      price,
      img,
      category,
    };

    try {
      const res = await axios.post('http://localhost:3000/admin/create', data);
      console.log(res.data);

      // Reset form fields
      setTitle('');
      setPrice(0);
      setImg('');
      setCategory('');
    } catch (err) {
      console.log('error', err);
    }
  };

  return (
    <>
      <div className='h-16 w-full flex justify-center items-center bg-gradient-to-r from-purple-700 to-purple-900 text-white shadow-md'>
        <h3 className='font-bold text-2xl tracking-wide'>Add Book</h3>
      </div>

      <div className='max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-6'>
        <form className='flex flex-col space-y-4' onSubmit={handleSubmit}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type='text'
            name='title'
            placeholder='Book Title'
            className='p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
            required
          />
          <input
            value={price}
            type='number'
            name='price'
            onChange={(e) => setPrice(e.target.value)}
            placeholder='Price'
            className='p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
            required
          />
          <select
            name='category'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className='p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
            required
          >
            <option value=''>Select Category</option>
            <option value='Fantasy'>Fantasy</option>
            <option value='Horror'>Horror</option>
            <option value='Fiction'>Fiction</option>
            <option value='Mystery'>Mystery</option>
            <option value='Thriller'>Thriller</option>
          </select>
          <input
            value={img}

            type='url'
            onChange={(e) => setImg(e.target.value)}
            name='imgLink'
            placeholder='Image Link'
            className='p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
            required
          />
          <button
            type='submit'
            className='bg-purple-600 text-white p-3 rounded-md hover:bg-purple-700 transition duration-200 ease-in-out'
          >
            Add Book
          </button>
        </form>
      </div>
    </>
  );
};

export default Create;
