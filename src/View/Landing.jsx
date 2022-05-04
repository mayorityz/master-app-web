import React, { useState } from 'react'
import { FiAlignJustify } from 'react-icons/fi'

export default function Landing() {
  const [toggle, setToggle] = useState(false)

  return (
    <div className="bg_bg">
      <nav className="landing_nav">
        <div>
          <span>Master App</span>
        </div>
        <div>
          <ul>
            <li>
              <a href="/login" style={{ color: 'green' }}>
                ANRIN
              </a>
            </li>
            <li>
              <a href="#">P1</a>
            </li>
            <li>
              <a href="#">P2</a>
            </li>
            <li>
              <a href="#">P3</a>
            </li>
            <li>
              <a href="#">P4</a>
            </li>
          </ul>
          <span className="nav_mobile">
            <FiAlignJustify
              color="#000"
              size={25}
              onClick={() => setToggle(!toggle)}
            />
          </span>
          <div
            className="nav_sidebar_slide"
            style={{ display: toggle ? 'block' : 'none' }}
          >
            <ul>
              <li>
                <a href="/login">- ANRIN</a>
              </li>
              <li>
                <a href="#">- P1</a>
              </li>
              <li>
                <a href="#">- P2</a>
              </li>
              <li>
                <a href="#">- P3</a>
              </li>
              <li>
                <a href="#">- P4</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4" style={{ marginTop: 250 }}>
            <div className="landing_content">
              <h2 className="text-center">Welcome to Master App!</h2>

              <hr />

              <p>
                The first all-encompassing 3-in-1 multi-module Public Health App
                for monitoring, evaluation, accountability and learning (MEAL).{' '}
              </p>

              <p>
                Now your project teams have access to GIS integrated field
                report, insights for supply chain management powered by ML and a
                decentralized reinforcement learning hub for your field teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
