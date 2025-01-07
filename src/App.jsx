import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import { Route, Routes, Navigate } from 'react-router-dom'


function App() {

  const [login, setLogin] = useState(false);

  useEffect(() => {
    const mail = localStorage.getItem('mail')

    if (mail) {
      setLogin(true);
    } else {
      setLogin(false);
    }

  }, [])


  return (


    <div>

      {
        login ? <Main /> : <Routes>

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<Navigate to='/login' />} />
        </Routes>
      }
      
    </div>
  )
}

export default App



function Main() {
  return (
    <div>
      <Home />
    </div>
  )
}
