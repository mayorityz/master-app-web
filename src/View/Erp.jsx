import React, { useState, useEffect } from 'react'
import BreadCrumb from '../Component/BreadCrumb'
import ContainerFluid from '../Component/ContainerFluid'
import APIQUERY from '../Utils/api'

import { Link } from 'react-router-dom'

export default function Erp({ title, crumb }) {
  const [users, setUsers] = useState([])
  const [display, setDisplay] = useState('')
  const [drugs, setDrugs] = useState([])
  const [chva, setChva] = useState('')
  const [entryDate, setEntryDate] = useState('')
  const [inputList, setInputList] = useState([
    { drug: '', qty: 0, status: 'request' },
  ])

  const [name, setName] = useState('')
  const [qty, setQty] = useState('')
  const [drugId, setDrugId] = useState('')
  const [displayTwo, setDisplayTwo] = useState('')

  let popUp = (data) => {
    setName(data.name)
    setQty(data.quantity)
    setDrugId(data._id)
  }

  useEffect(() => {
    fetchChvas()
    getAllDrugs()
  }, [])

  const fetchChvas = async () => {
    let response = await APIQUERY('/users/getAllUsers', 'GET', {})
    if (response.status === 200) {
      setUsers(response.data)
    }
  }

  const getAllDrugs = async () => {
    let response = await APIQUERY('/drugs/all-drugs', 'GET', {})
    if (response.status === 200) {
      setDrugs(response.data)
    }
  }

  const handleInputChange = (e, index) => {
    const { name, value } = e.target
    const list = [...inputList]
    list[index][name] = value
    setInputList(list)
  }

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList]
    list.splice(index, 1)
    setInputList(list)
  }

  // handle click event of the Add button
  const handleAddClick = () => {
    // check no of drugs before we proceed
    if (inputList.length >= drugs.length) return
    else setInputList([...inputList, { drug: '', qty: 0, status: 'request' }])
  }

  let submit = async (e) => {
    e.preventDefault()
    setDisplay('Saving! Please Wait!!')
    let data = { uid: chva, entryDate, drugs: inputList }
    let request = await APIQUERY('/erp/new-entry', 'POST', data)
    if (request.status === 200)
      setDisplay(`Selected CHVA has received drug assignment`)
    else setDisplay(request.message)
  }

  let updateDrug = async (e) => {
    e.preventDefault()
    setDisplayTwo('updating drug details')
    let data = {
      id: drugId,
      quantity: qty,
      name,
    }
    let request = await APIQUERY('/drugs/edit-drug', 'POST', data)
    if (request.status === 200) setDisplayTwo(`Updated Successfully!`)
    else setDisplayTwo(`An error has occured on the server`)
    setDisplayTwo('')
  }

  let deleteDrug = async (id) => {
    let req = await APIQUERY('/drugs/remove-drug', 'POST', { id })
    window.location = '/erp'
  }

  return (
    <div>
      <BreadCrumb title={title} crumb={crumb} />
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              + Create A <Link to="/dashboard/new-drug">New Drug </Link>
            </div>
          </div>
        </div>
      </div>
      <br />
      <ContainerFluid>
        <div class="col-md-6">
          <div class="card">
            <div className="card-header">Enter A New ERP Record</div>
            <div class="card-body">
              <form action="" onSubmit={submit}>
                <div class="form-group row">
                  <div className="col-md-6">
                    <label for="">Select CHVA</label>
                    <select
                      name=""
                      class="form-control"
                      id=""
                      required
                      onChange={({ target: { value } }) => setChva(value)}
                      value={chva}
                    >
                      <option value="">-- Select Account --</option>
                      {users.map((user) => (
                        <option value={user._id} key={user._id}>
                          {user.firstname} {user.lastname}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div class="col-md-6">
                    <label for="">Entry Date</label>
                    <input
                      type="date"
                      class="form-control"
                      required
                      onChange={({ target: { value } }) => setEntryDate(value)}
                      value={entryDate}
                    />
                  </div>
                </div>
                <label for="">Starting Stock</label>
                {inputList.map((x, i) => (
                  <div class="form-group row">
                    <div class="col-md-6">
                      <select
                        id=""
                        class="form-control"
                        name="drug"
                        value={x.drug}
                        onChange={(e) => handleInputChange(e, i)}
                        required
                      >
                        <option value="">-- Select Drug --</option>
                        {drugs.map((drug, i) => (
                          <option key={drug._id}>{drug.name}</option>
                        ))}
                      </select>
                    </div>
                    <div class="col-md-2">
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Qty"
                        name="qty"
                        value={x.qty}
                        onChange={(e) => handleInputChange(e, i)}
                        required
                      />
                    </div>
                    <div className="col-md-2">
                      <div className="btn-box">
                        {inputList.length !== 1 && (
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={handleRemoveClick}
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                <div className="row">
                  <div className="col-md-6">
                    <div class="d-grid gap-2">
                      <button
                        class="btn btn-primary btn-sm"
                        type="button"
                        onClick={handleAddClick}
                      >
                        Add More Drug Entry
                      </button>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <button class="btn btn-success btn-sm">Submit Entry</button>
                  </div>
                </div>

                {display && <h6 className="text-center pt-4">{display}</h6>}
              </form>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card">
            <div className="card-header">Inventory</div>
            <div class="card-body">
              <table class="table table-hover table-responsive table-stripped">
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Title</th>
                    <th>Last Updated</th>
                    <th>Amount Left</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {drugs.map((drug, i) => (
                    <tr key={drug._id}>
                      <td>{i + 1}.</td>
                      <td>{drug.name}</td>
                      <td>{drug.createdAt}</td>
                      <td>{drug.quantity}</td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => deleteDrug(drug._id)}
                        >
                          delete
                        </button>
                        <button
                          class="btn btn-warning btn-sm"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onClick={() => popUp(drug)}
                        >
                          Update
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
                Update Drug
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form onSubmit={updateDrug}>
                <div className="form-group">
                  <label htmlFor="">Update Name Of Drug:</label>
                  <input
                    type="text"
                    onChange={({ target: { value } }) => setName(value)}
                    className="form-control"
                    value={name}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Update Drug's Quantity:</label>
                  <input
                    type="number"
                    onChange={({ target: { value } }) => setQty(value)}
                    className="form-control"
                    value={qty}
                  />
                </div>
                <button className="btn btn-success btn-sm">Update Drug</button>
                <div>
                  {displayTwo && (
                    <h6 className="text-center pt-4">{displayTwo}</h6>
                  )}
                </div>
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
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
