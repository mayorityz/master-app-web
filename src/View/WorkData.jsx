import React, { useState, useEffect } from 'react'
import BreadCrumb from '../Component/BreadCrumb'
import ContainerFluid from '../Component/ContainerFluid'
import APIQUERY from '../Utils/api'

export default function WorkData({ title, crumb }) {
  const [users, setUsers] = useState([])
  const [display, setDisplay] = useState('')

  const [uid, setUid] = useState('')
  const [description, setDesc] = useState('')
  const [quantity, setQua] = useState('')
  const [modalData, setModalData] = useState({})

  const [requests, setRequests] = useState([])

  useEffect(() => {
    fetchChvas()
    fetchPendingRequests()
  }, [])

  const fetchChvas = async () => {
    let response = await APIQUERY('/users/getAllUsers', 'GET', {})
    if (response.status === 200) {
      setUsers(response.data)
    }
  }

  const fetchPendingRequests = async () => {
    let response = await APIQUERY('/data-entry/pending-request', 'GET', {})
    if (response.status === 200) {
      setRequests(response.data)
    }
  }

  let submit = async (e) => {
    e.preventDefault()
    setDisplay('Please Wait')

    let body = {
      uid: modalData._id,
      description,
      quantity,
    }

    console.log(body)
    let req = await APIQUERY('/data-entry/new-entry', 'POST', body)
    if (req.status === 200) {
      setDisplay('Upload Successful')
    }
  }

  let confirm = async (id) => {
    let req = await APIQUERY('/data-entry/make-as-complete', 'POST', { id })
    window.location.reload()
  }

  return (
    <div>
      <BreadCrumb title={title} crumb={crumb} />
      <ContainerFluid>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              Record Request ({requests.length})
            </div>
            <div className="card-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>From</th>
                    <th>To</th>
                    <th>CHVA's Name</th>
                    <th>Action</th>
                    <th>Add Entry</th>
                  </tr>
                </thead>
                <tbody>
                  {requests.map((request) => (
                    <tr key={request._id}>
                      <td>{request.from}</td>
                      <td>{request.to}</td>
                      <td>{request.fullname}</td>
                      <td>
                        <button
                          className="btn btn-success btn-sm"
                          onClick={() => confirm(request._id)}
                        >
                          Mark As Done
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-warning btn-sm"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onClick={() => setModalData(request)}
                        >
                          Add Entry
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          {/* <div class="card">
            <div className="card-header">Create New CHVA Entry</div>
            <div class="card-body">
              <form action="" onSubmit={submit}>
                <div class="form-group">
                  <label for="">Select CHVA Account</label>
                  <select
                    name=""
                    class="form-control"
                    id=""
                    required
                    onChange={({ target: { value } }) => setUid(value)}
                    value={uid}
                  >
                    <option value="">-- Select Account --</option>
                    {users.map((user) => (
                      <option value={user._id} key={user._id}>
                        {user.firstname} {user.lastname}
                      </option>
                    ))}
                  </select>
                </div>
                <div class="form-group row">
                  <div class="col-md-6">
                    <label for="">Description</label>
                    <input
                      placeholder="Enter Data Description"
                      class="form-control"
                      required
                      onChange={({ target: { value } }) => setDesc(value)}
                      value={description}
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="">Quanitity</label>
                    <input
                      placeholder=""
                      type="number"
                      class="form-control"
                      required
                      onChange={({ target: { value } }) => setQua(value)}
                      value={quantity}
                    />
                  </div>
                </div>
                {display && (
                  <div className="text-center alert alert-primary">
                    {display}
                  </div>
                )}
                <button class="btn btn-lg btn-block btn-success">
                  Submit Record
                </button>
              </form>
            </div>
          </div> */}
        </div>
      </ContainerFluid>
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
                - Update To {modalData.fullname}'s Request
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="card">
                <div className="card-header">Enter New CHVA Entry</div>
                <div class="card-body">
                  <form action="" onSubmit={submit}>
                    <div class="form-group row">
                      <div class="col-md-6">
                        <label for="">Description</label>
                        <input
                          placeholder="Enter Data Description"
                          class="form-control"
                          required
                          onChange={({ target: { value } }) => setDesc(value)}
                          value={description}
                        />
                      </div>
                      <div class="col-md-6">
                        <label for="">Quanitity</label>
                        <input
                          placeholder=""
                          type="number"
                          class="form-control"
                          required
                          onChange={({ target: { value } }) => setQua(value)}
                          value={quantity}
                        />
                      </div>
                    </div>
                    {display && (
                      <div className="text-center alert alert-primary">
                        {display}
                      </div>
                    )}
                    <button class="btn btn-lg btn-block btn-success">
                      Submit Record
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
