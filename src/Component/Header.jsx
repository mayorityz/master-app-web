import React, { useContext } from 'react'
import { ToggleContext } from '../App'

export default function Header({ onPress }) {
  let sideBarCont = useContext(ToggleContext)

  return (
    <header className="header">
      <span onClick={onPress} className="menu_toggle">
        {sideBarCont ? 'Close' : 'Open'} Menu
      </span>
    </header>
  )
}
