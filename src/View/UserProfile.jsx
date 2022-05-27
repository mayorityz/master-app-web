import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BreadCrumb from '../Component/BreadCrumb'
import APIQUERY from '../Utils/api'

export default function UserProfile() {
  let { userid } = useParams()
  let [details, setDetails] = useState([])
  let [drugs, setDrugs] = useState([])
  let [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      let req = await APIQUERY('/users/getUser', 'POST', { id: userid })
      let reqErp = await APIQUERY('/erp/fetch-user-drugs', 'POST', {
        id: userid,
      })

      setDetails(req.data[0])
      setDrugs(reqErp.data.drugs)
    })()
  }, [])

  return (
    <div>
      <BreadCrumb title="CHVA Details" crumb="Users' Account" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 bg-white p-4">
            <h3>
              {details.firstname} {details.lastname}
            </h3>
            <h3>{details.email}</h3>

            <h6>Level : {details.level}</h6>
            <h6>Ward : {details.ward}</h6>
            <h6>Local Govt. Area : {details.lga}</h6>
            <h6>Location : {details.location}</h6>
            <hr />
            <h2>Assigned Drugs</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Drug</th>
                  <th>Quantity</th>
                  <th>Current Status</th>
                </tr>
              </thead>
              <tbody>
                {drugs.map((drug) => (
                  <tr>
                    <td>{drug.drug}</td>
                    <td>{drug.qty}</td>
                    <td>{drug.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
