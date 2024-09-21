import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'

const Delete = ({ id }) => {
  const cardDelete = () => {
    try {
      axios.delete(`http://localhost:3000/admin/delete/${id}`)
        .then((res) => {
          window.location.reload();

        })
    }
    catch (err) {
      console.log("Error", err)
    }
  }

  return (
    <>
      <button
        onClick={cardDelete}
        className='sm:mt-2 flex items-center justify-center py-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded-lg  transition-colors duration-300 ease-in-out shadow-md'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.139 21H7.861a2 2 0 01-1.994-1.858L5 7m9 0V4a2 2 0 10-4 0v3m-1 0h6m-3 0v8m-4-8h8" />
        </svg>
        Delete
      </button>

    </>
  )
}

export default Delete