import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
  // return (
  //   <div className="bg_image">
  //     <div className="container">
  //       <div className="row justify-content-center">
  //         <div className="col-md-10 landing">
  //           <p
  //             className="text-upper bg_text"
  //             style={{ fontWeight: 'bold', fontSize: 35 }}
  //           >
  //             Welcome to Master App!
  //           </p>
  //           {/* <p className="bg_text">
  //             The first 3-in-1 Super App with a modular design built for public
  //             health projects by Promane and Promade Limited.
  //           </p> */}
  //           {/* <p className="bg_text">
  //             It features a learning hub for reinforcement learning, coaching
  //             and training of field teams, health professionals and volunteers.
  //             It also has an automated GIS integrated Field Report display and
  //             an Enterprise Resource Planning portal with predictive analytics
  //             for supply chain management.
  //           </p> */}

  //           {/* <p className="bg_text">
  //             Gain mastery of public health projects with Master App.
  //           </p> */}
  //           <hr />
  //           <p className="bg_text" style={{ fontWeight: 'bold', fontSize: 23 }}>
  //             View Our Projects
  //           </p>

  //           <div className="row">
  //             <div className="col-md-4">
  //               <p className="links">
  //                 <Link to="/login">- Anrin</Link>
  //               </p>
  //             </div>
  //             <div className="col-md-4">
  //               <p className="links">
  //                 <Link to="#">- Project Two</Link>
  //               </p>
  //             </div>
  //             <div className="col-md-4">
  //               <p className="links">
  //                 <Link to="#">- Project Three</Link>
  //               </p>
  //             </div>
  //             <div className="col-md-4">
  //               <p className="links">
  //                 <Link to="#">- Project Four</Link>
  //               </p>
  //             </div>
  //             <div className="col-md-4">
  //               <p className="links">
  //                 <Link to="#">- Project Five</Link>
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // )

  return (
    <div className="bg_bg">
      <nav className="landing_nav">
        <div>
          <span>Master App</span>
        </div>
        <div>
          <ul>
            <li>
              <a href="/login">Anrin</a>
            </li>
            <li>
              <a href="#">Project One</a>
            </li>
            <li>
              <a href="#">Project Two</a>
            </li>
            <li>
              <a href="#">Project Three</a>
            </li>
            <li>
              <a href="#">Project Four</a>
            </li>
            <li>
              <a href="#">Project Five</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4" style={{ marginTop: 250 }}>
            <div className="landing_content">
              <h2 className="text-center">Welcome to Master App!</h2>

              <hr />

              <p>
                The first 3-in-1 Super App with a modular design built for
                public health projects by Promane and Promade Limited.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
