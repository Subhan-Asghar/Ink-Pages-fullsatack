import React, { useState, useContext,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logout from '../context/ContextApi'

const Admin = () => {
  const {login,setlogin,handleLogin }=useContext(Logout)
  const [key, setKey] = useState('')
  const [check, setCheck] = useState(false)
  const correctKey = 'admin123' 
  useEffect(() => {
    const savedLogin = localStorage.getItem('login');
    if (savedLogin === 'true') {
      setCheck(true);
    }
  }, []);

  const keycheck=()=>{
    if(key==correctKey){
      handleLogin()
      setCheck(true)
    }
    else{
      alert("Incorrect key")
    }
  }
  const logout=()=>{
    setCheck(false);
    localStorage.removeItem('login');
  }

  return (
    <>
      {/* Admin Page Header */}
      <div className='h-16 w-full flex justify-center items-center bg-gradient-to-r from-purple-700 to-purple-900 text-white shadow-md'>
        <h3 className='font-bold text-2xl tracking-wide'>Admin Panel</h3>
      </div>

      <div className='flex justify-center mt-8'>
        <input
          onChange={(e) => setKey(e.target.value)}
          className='h-12 w-64 text-black pl-4 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-600 shadow-md'
          placeholder='Enter Admin Key...'
          type='text'
        />
        <button
        onClick={()=>{keycheck(key)}}
          className='w-12 h-12 bg-purple-600 hover:bg-purple-700 text-white rounded-r-lg transition duration-300 ease-in-out shadow-md flex justify-center items-center'>
          🔍
        </button>
      </div>

      {check && (
        <div className='flex flex-col items-center mt-8 space-y-4'>
          <div className='flex space-x-4'>
            <button className='bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out shadow-lg'>
             <Link to={'/admin/create'}>Add Book</Link> 
            </button>
            <button className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out shadow-lg'>
              <Link to={'/admin/edit'}> Update/Delete Book</Link>
            </button>
          </div>
          <button 
          onClick={logout}
          className='bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out shadow-lg'>
            Logout
          </button>
        </div>
      )}
    </>
  )
}

export default Admin
