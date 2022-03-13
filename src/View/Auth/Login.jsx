import React, { useState } from 'react'
import APIQUERY from '../../Utils/api'

export default function Login() {
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [msg, setMsg] = useState('')

  let Login = async (e) => {
    e.preventDefault()
    try {
      let request = await APIQUERY('/users/login', 'POST', { email, password })
      if (request.data.length === 0) setMsg('User Not Found!')
      else {
        // store in local storage.
        let userDetails = request.data[0]
        localStorage.setItem('_masterapp', userDetails._id)
        setMsg(`Welcome ${userDetails.firstname}, please wait!`)
        window.location = '/dashboard'
      }
    } catch (error) {
      setMsg('Internal Server Error!')
    }
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-4 align-self-center" style={{ marginTop: 150 }}>
          <h4 className="text-center">LOGIN</h4>
          <hr />
          <form action="" onSubmit={Login}>
            <div className="form-group">
              <label htmlFor="">Enter Email Address : </label>
              <input
                type="email"
                name=""
                className="form-control form-control-lg"
                required
                value={email}
                onChange={({ target: { value } }) => setEmail(value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Enter Password: </label>
              <input
                type="password"
                name=""
                className="form-control  form-control-lg"
                required
                value={password}
                onChange={({ target: { value } }) => setPassword(value)}
              />
            </div>
            {msg && <div className="alert alert-secondary">{msg}</div>}
            <div class="d-grid gap-2">
              <button class="btn btn-primary btn-lg">LOGIN</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}