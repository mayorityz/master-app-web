import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className="bg_image">
      <div className="container">
        <div className="row ">
          <div className="col-md-6"></div>
          <div className="col-md-6 landing">
            <p className="text-upper">About the Master App.</p>
            <p>
              MasterApp is the first 3-in-1 Super App in Nigeria with a modular
              design built for public health projects by Promane and Promade
              Limited.
            </p>
            <p>
              It features a learning hub for reinforcement learning, coaching
              and training of field teams, health professionals and volunteers.
              It also has an automated GIS integrated Field Report display and
              the Enterprise Resource Planning portal for managing requisitions
              and supply chain of consumables hence addressing public health
              project needs all in one App.
            </p>
            <hr />
            <p>View Our Projects</p>

            <div className="row">
              <div className="col-md-4">
                <p className="links">
                  <Link to="/login">- Anrin</Link>
                </p>
              </div>
              <div className="col-md-4">
                <p className="links">
                  <Link to="#">- Project Two</Link>
                </p>
              </div>
              <div className="col-md-4">
                <p className="links">
                  <Link to="#">- Project Three</Link>
                </p>
              </div>
              <div className="col-md-4">
                <p className="links">
                  <Link to="#">- Project Four</Link>
                </p>
              </div>
              <div className="col-md-4">
                <p className="links">
                  <Link to="#">- Project Five</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
