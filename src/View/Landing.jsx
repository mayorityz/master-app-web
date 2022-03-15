import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-6 offset-md-3 landing">
          <p>SELECT PROJECT</p>
          <p>
            <Link to="/login"> ANRIN PROJECT</Link>{' '}
          </p>
          <p>PROJECT TWO</p>
          <p>PROJECT THREE</p>
          <p>PROJECT FOUR</p>
          <p>PROJECT FIVE</p>
        </div>
      </div>
    </div>
  )
}
