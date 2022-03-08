import React, { createContext, useState } from 'react'
import Header from './Component/Header.jsx'
import Sidebar from './Component/Sidebar.jsx'
import Content from './Component/Wrapper.jsx'
import './Component/style.css'

export let ToggleContext = createContext(false)

function App() {
  let [toggleState, setX] = useState(false)
  const updateToggle = () => {
    setX(!toggleState)
  }

  return (
    <ToggleContext.Provider value={toggleState}>
      <div>
        <Header onPress={updateToggle} />
        <main className="main">
          <Sidebar />
          <Content />
        </main>
      </div>
    </ToggleContext.Provider>
  )
}

export default App
