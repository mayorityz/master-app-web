import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from './anrin.jpeg'
import { ToggleContext } from '../App'

export default function Sidebar() {
  let toggle = useContext(ToggleContext)

  return (
    <div className={`sidebar ${toggle ? '' : 'mobile_sidebar'}`}>
      <div className="imgContainer">
        <img src={Logo} alt="" style={{ maxWidth: '100%' }} />
      </div>
      <div className="navigation">
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/users">Manage Account</Link>
          </li>
          <li>
            <Link to="/learning">Learning Hub</Link>
          </li>
          <li>
            <Link to="/work-data">Field Report</Link>
          </li>
          <li>
            <Link to="/erp">Requisitions</Link>
          </li>
          <li>
            <Link to="/#">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}