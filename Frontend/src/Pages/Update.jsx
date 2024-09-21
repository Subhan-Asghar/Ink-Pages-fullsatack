import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Create = () => {
  const {id}=useParams();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [img, setImg] = useState('');
  const [category, setCategory] = useState('');
  useEffect(()=>{
    try{
      axios.get(`http://localhost:3000/admin/book/${id}`)
      .then((res)=>{
        const result=res.data.data;
        console.log(result)
        setTitle(result.title)
        setPrice(result.price)
        setImg(result.img)
        setCategory(result.category)
      })
    }catch(err){{
      console.log("Error", err)
    }}

  },[])

  const handleSubmit = async () => {
  
    const data = {
      title,
      price,
      img,
      category,
    };

    try {
      const res = await axios.put(`http://localhost:3000/admin/update/${id}`, data);
      console.log(res.data);
      alert("Book Updated")
    } catch (err) {
      console.log('error', err);
    }
  };

  return (
    <>
      <div className='h-16 w-full flex justify-center items-center bg-gradient-to-r from-purple-700 to-purple-900 text-white shadow-md'>
        <h3 className='font-bold text-2xl tracking-wide'>Edit Book</h3>
      </div>

      <div className='max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-6'>
        <div className='flex flex-col space-y-4' >
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
            type='number'
            value={price}
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
          onClick={handleSubmit}
            type='submit'
            className='bg-purple-600 text-white p-3 rounded-md hover:bg-purple-700 transition duration-200 ease-in-out'
          >
            Add Book
          </button>
        </div>
      </div>
    </>
  );
};

export default Create;
