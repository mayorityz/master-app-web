import React, { useState, useEffect } from 'react'
import BreadCrumb from '../Component/BreadCrumb'
import ContainerFluid from '../Component/ContainerFluid'
import KwaraLogo from '../Component/KwaraLogo'
import APIQUERY from '../Utils/api'

export default function Users({ title, crumb }) {
  const [users, setUsers] = useState([])

  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [level, setLevel] = useState('')
  const [location, setLocation] = useState('')
  const [ward, setWard] = useState('')
  const [lga, setLga] = useState('')
  const [password, setPassword] = useState('')

  const [firstnameE, setFirstNameE] = useState('')
  const [lastnameE, setLastNameE] = useState('')
  const [emailE, setEmailE] = useState('')
  const [levelE, setLevelE] = useState('')
  const [locationE, setLocationE] = useState('')
  const [wardE, setWardE] = useState('')
  const [lgaE, setLgaE] = useState('')
  const [passwordE, setPasswordE] = useState('')
  const [id, setId] = useState('')

  const [display, setDisplay] = useState('')
  const [displayTwo, setDisplayTwo] = useState('')
  const [modalData, setModalData] = useState({})

  useEffect(() => {
    fetchChvas()
  }, [])

  const fetchChvas = async () => {
    let response = await APIQUERY('/users/getAllUsers', 'GET', {})
    if (response.status === 200) {
      setUsers(response.data)
    }
  }

  let createNewAccount = async (e) => {
    e.preventDefault()
    setDisplay('Please Wait')

    let body = {
      firstname,
      lastname,
      email,
      level,
      location,
      ward,
      lga,
      password,
    }
    let req = await APIQUERY('/users/newaccount', 'POST', body)
    if (req.code === 200) {
      setDisplay('Upload Successful')
    }
  }

  let pullData = (data) => {
    setModalData(data)
    setFirstNameE(data.firstname)
    setLastNameE(data.lastname)
    setEmailE(data.email)
    setLevelE(data.level)
    setLocationE(data.location)
    setWardE(data.ward)
    setLgaE(data.lga)
    setPasswordE(data.password)
    setId(data._id)
  }

  let submitEdit = async (e) => {
    e.preventDefault()
    setDisplayTwo('Updating Record. Please Wait!!')
    let body = {
      firstname: firstnameE,
      lastname: lastnameE,
      email: emailE,
      level: levelE,
      location: locationE,
      ward: wardE,
      lga: lgaE,
      password: passwordE,
      id,
    }

    let req = await APIQUERY('/users/edit-account', 'POST', body)
    if (req.code === 200) {
      setDisplayTwo('Update Successful')
    } else {
      setDisplayTwo('Server Error')
    }
    setDisplayTwo('')
  }

  let deleteAccount = async (e, id) => {
    e.preventDefault()
    setDisplayTwo('Deleting! Please Wait!!')

    let body = { id }

    let req = await APIQUERY('/users/delete-account', 'POST', body)
    if (req.code === 200) {
      setDisplayTwo('Delete Successful')
    } else {
      setDisplayTwo('Server Error')
    }
    setDisplayTwo('')
  }

  return (
    <div>
      <BreadCrumb title="CHVA's History" crumb="Users' Account" />

      <ContainerFluid>
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">Enter CHVA's Details</div>
            <div class="card-body">
              <form onSubmit={createNewAccount}>
                <div class="form-group row">
                  <div class="col-md-6">
                    <label for="">First Name : </label>
                    <input
                      placeholder="First Name"
                      class="form-control"
                      onChange={({ target: { value } }) => setFirstName(value)}
                      value={firstname}
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="">Last Name : </label>
                    <input
                      placeholder="Last Name"
                      class="form-control"
                      onChange={({ target: { value } }) => setLastName(value)}
                      value={lastname}
                      required
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-6">
                    <label for="">Email Address : </label>
                    <input
                      placeholder="Enter Email"
                      class="form-control"
                      onChange={({ target: { value } }) => setEmail(value)}
                      value={email}
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="">CHVA's Level : </label>
                    <select
                      class="form-control"
                      onChange={({ target: { value } }) => setLevel(value)}
                      value={level}
                      required
                    >
                      <option>-- select the chva's level --</option>
                      <option>-- LV1 --</option>
                      <option>-- LV2 --</option>
                      <option>-- LV3 --</option>
                      <option>-- LV4 --</option>
                      <option>-- LV5 --</option>
                      <option>-- Super Admin --</option>
                    </select>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-6">
                    <label for="">Location</label>
                    <input
                      placeholder="Enter CHVA's Location"
                      class="form-control"
                      onChange={({ target: { value } }) => setLocation(value)}
                      value={location}
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="">Ward</label>
                    <input
                      placeholder="Enter CHVA's Ward"
                      class="form-control"
                      onChange={({ target: { value } }) => setWard(value)}
                      value={ward}
                      required
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-6">
                    <label for="">Local Government Area</label>
                    <input
                      placeholder="Enter LGA"
                      class="form-control"
                      onChange={({ target: { value } }) => setLga(value)}
                      value={lga}
                      required
                    />
                  </div>

                  <div class="col-md-6">
                    <label for="">
                      Password : Note Password in a safe place
                    </label>
                    <input
                      placeholder="Set Account Password"
                      class="form-control"
                      onChange={({ target: { value } }) => setPassword(value)}
                      value={password}
                      required
                    />
                  </div>
                </div>

                {display && (
                  <div className="text-center alert alert-primary">
                    {display}
                  </div>
                )}
                <button class="btn btn-success btn-sm btn-block">
                  Submit Details
                </button>
              </form>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card">
            <div className="card-header">Existing CHVAs.</div>
            <div class="card-body table-responsive">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Lv</th>
                    <th>Ward</th>
                    <th>Location</th>
                    <th>LGA</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr>
                      <td>
                        {user.firstname} {user.lastname}
                      </td>
                      <td>{user.email}</td>
                      <td>{user.level}</td>
                      <td>{user.ward}</td>
                      <td>{user.location}</td>
                      <td>{user.lga}</td>
                      <td>
                        <button
                          class="btn btn-warning btn-sm"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onClick={() => pullData(user)}
                        >
                          edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </ContainerFluid>
      <KwaraLogo />
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Edit {firstnameE}'s Profile.
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form action="" onSubmit={submitEdit}>
                <div className="form-group row">
                  <div className="col-md-6">
                    <label htmlFor="">First Name</label>
                    <input
                      type="text"
                      placeholder="Enter First Name"
                      value={firstnameE}
                      className="form-control"
                      onChange={({ target: { value } }) => setFirstNameE(value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="">Last Name</label>
                    <input
                      type="text"
                      placeholder="Enter First Name"
                      value={lastnameE}
                      className="form-control"
                      onChange={({ target: { value } }) => setLastNameE(value)}
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-6">
                    <label for="">Email Address : </label>
                    <input
                      placeholder="Enter Email"
                      class="form-control"
                      onChange={({ target: { value } }) => setEmailE(value)}
                      value={emailE}
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="">CHVA's Level : </label>
                    <select
                      class="form-control"
                      onChange={({ target: { value } }) => setLevelE(value)}
                      value={levelE}
                      required
                    >
                      <option>-- select the chva's level --</option>
                      <option>-- LV1 --</option>
                      <option>-- LV2 --</option>
                      <option>-- LV3 --</option>
                      <option>-- LV4 --</option>
                      <option>-- LV5 --</option>
                      <option>-- Super Admin --</option>
                    </select>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-6">
                    <label for="">Location</label>
                    <input
                      placeholder="Enter CHVA's Location"
                      class="form-control"
                      onChange={({ target: { value } }) => setLocationE(value)}
                      value={locationE}
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="">Ward</label>
                    <input
                      placeholder="Enter CHVA's Ward"
                      class="form-control"
                      onChange={({ target: { value } }) => setWardE(value)}
                      value={wardE}
                      required
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-6">
                    <label for="">Local Government Area</label>
                    <input
                      placeholder="Enter LGA"
                      class="form-control"
                      onChange={({ target: { value } }) => setLgaE(value)}
                      value={lgaE}
                      required
                    />
                  </div>

                  <div class="col-md-6">
                    <label for="">Password.</label>
                    <input
                      placeholder="Set Account Password"
                      class="form-control"
                      onChange={({ target: { value } }) => setPasswordE(value)}
                      value={passwordE}
                      required
                    />
                  </div>
                </div>
                <div>
                  {displayTwo && (
                    <div className="text-center alert alert-primary">
                      {displayTwo}
                    </div>
                  )}
                </div>

                <button className=" btn btn-success btn-sm">
                  Submit Update
                </button>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-danger"
                onClick={(e) => deleteAccount(e, id)}
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
