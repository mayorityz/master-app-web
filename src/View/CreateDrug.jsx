import React, { useState, useEffect } from 'react'
import BreadCrumb from '../Component/BreadCrumb'
import APIQUERY from '../Utils/api'

export default function CreateDrug({ title, crumb }) {
  const [display, setDisplay] = useState('')
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')

  const createEntry = async (e) => {
    e.preventDefault()
    setDisplay('Saving Drug To Database')
    let data = { name, quantity }
    let request = await APIQUERY('/drugs/new-drug-entry', 'POST', data)
    if (request.status === 200) setDisplay('Drug Added Successfully')
    else setDisplay('Internal Server Error!')
  }
  return (
    <div>
      <BreadCrumb title={title} crumb={crumb} />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">Add Drug To Inventory</div>
              <div className="card-body">
                <form action="">
                  <div className="form-group">
                    <label htmlFor="">Enter Name Of Drug</label>
                    <input
                      type="text"
                      placeholder="Drug Name"
                      className="form-control"
                      required
                      onChange={({ target: { value } }) => setName(value)}
                      value={name}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Enter Quantity</label>
                    <input
                      type="number"
                      placeholder="Quantity"
                      className="form-control"
                      required
                      onChange={({ target: { value } }) => setQuantity(value)}
                      value={quantity}
                    />
                  </div>
                  <div class="d-grid gap-2">
                    <button
                      class="btn btn-primary btn-lg"
                      onClick={createEntry}
                    >
                      Submit Entry
                    </button>
                  </div>
                  {display && <h6 className="text-center pt-4">{display}</h6>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
