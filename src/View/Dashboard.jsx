import React, { useState, useEffect } from 'react'
import BreadCrumb from '../Component/BreadCrumb'
import ContainerFluid from '../Component/ContainerFluid'
import KwaraLogo from '../Component/KwaraLogo'
import APIQUERY from '../Utils/api'

export default function Dashboard({ title, crumb }) {
  const [chvas, setChva] = useState([])
  const [stock, setStock] = useState([])
  const [empty, setEmpty] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchChvas()
    getAllDrugs()

    setLoading(false)
  }, [])

  const fetchChvas = async () => {
    let response = await APIQUERY('/users/getAllUsers', 'GET', {})
    if (response.status === 200) {
      setChva(response.data)
    }
  }

  const getAllDrugs = async () => {
    let response = await APIQUERY('/drugs/all-drugs', 'GET', {})
    if (response.status === 200) {
      setStock(response.data)
    }
  }

  return (
    <div>
      <BreadCrumb title="Welcome" crumb="Admin Dashboard" />

      <ContainerFluid>
        <div className="col-md-3">
          <div className="card">
            <div className="card-header">No. Of CHVAs</div>
            <div className="card-body dash_txt">{chvas.length}.</div>
          </div>
          <br />
          <div className="card">
            <div className="card-header">Total Items in Stock</div>
            <div className="card-body dash_txt">{stock.length}.</div>
          </div>
          <br />
          <div className="card">
            <div className="card-header">Almost Out Of Stock</div>
            <div className="card-body dash_txt">O.</div>
          </div>
        </div>
        <div className="col-md-4"></div>
        <div className="col-md-4"></div>
      </ContainerFluid>

      <KwaraLogo />
    </div>
  )
}
