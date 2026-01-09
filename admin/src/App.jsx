import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import SideBar from './Components/SideBar'
import { Switch, Route, Redirect } from 'react-router-dom'
import Add from './Pages/Add'
import List from './Pages/List'
import Orders from './Pages/Orders'
import Login from './Components/Login'
import { ToastContainer } from 'react-toastify'

export const backendUrl = import.meta.env.VITE_BACKEND_URL
export const currency = "$"

const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem('token') ? localStorage.getItem('token') : ''
  )

  useEffect(() => {
    localStorage.setItem('token', token)
  }, [token])

  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer />
      {
        token === ''
          ? <Login setToken={setToken} />
          : <>
              <Navbar setToken={setToken} />
              <hr />
              <div className='w-full flex'>
                <SideBar />
                <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
                  <Switch>
                    <Route exact path="/">
                      <Redirect to="/list" />
                    </Route>

                    <Route path="/add">
                      <Add token={token} />
                    </Route>

                    <Route path="/list">
                      <List token={token} />
                    </Route>

                    <Route path="/orders">
                      <Orders token={token} />
                    </Route>
                  </Switch>
                </div>
              </div>
            </>
      }
    </div>
  )
}

export default App
