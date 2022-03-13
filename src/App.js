import React, { createContext, useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Component/Header.jsx'
import Sidebar from './Component/Sidebar.jsx'
import './Component/style.css'
import Wrapper from './Component/Wrapper.jsx'

export let ToggleContext = createContext(false)

function App() {
  let [toggleState, setX] = useState(false)
  let [isLoading, setLoading] = useState(true)
  const updateToggle = () => {
    setX(!toggleState)
  }

  useEffect(() => {
    // check that the stuff is ready
    let check = localStorage.getItem('_masterapp')
    if (!check) window.location = '/'

    setLoading(false)
  }, [])

  if (isLoading) {
    return (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            backgroundColor: '#f6f6f6',
            width: 300,
            height: 300,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h5>Please Wait!!!</h5>
        </div>
      </div>
    )
  }

  return (
    <ToggleContext.Provider value={toggleState}>
      <div>
        <Header onPress={updateToggle} />
        <main className="main">
          <Sidebar />
          <Wrapper>
            <Outlet />
          </Wrapper>
        </main>
      </div>
    </ToggleContext.Provider>
  )
}

export default App
