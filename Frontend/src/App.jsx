import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Admin from './Pages/Admin'
import Create from './Pages/Create'
import Logout from './context/ContextApi'
import { useState } from 'react'

function App() {
  const [login, setlogin] = useState(false)

  return (
    <>
    <Logout.Provider value={{login,setlogin}}>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/admin' element={<Admin/>}></Route>
      <Route path={'/admin/create'} element={login?<Create/>:<Admin/>}></Route>
    </Routes>
    </Logout.Provider>
    </>
  )
}

export default App
