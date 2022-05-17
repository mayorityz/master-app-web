import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './View/Auth/Login'
import Dashboard from './View/Dashboard'
import Users from './View/Users'
import Erp from './View/Erp'
import WorkData from './View/WorkData'
import LearningHub from './View/LearningHub'
import CreateDrug from './View/CreateDrug'
import Landing from './View/Landing'
import PrivacyPolicy from './View/PrivacyPolicy'

ReactDOM.render(
  <BrowserRouter>
    {/* <App /> */}
    <Routes path="/">
      <Route index element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/dashboard" element={<App />}>
        <Route index element={<Dashboard />} />
        <Route path="/dashboard/users" element={<Users />} />
        <Route path="/dashboard/learning" element={<LearningHub />} />
        <Route path="/dashboard/work-data" element={<WorkData />} />
        <Route path="/dashboard/erp" element={<Erp />} />
        <Route path="/dashboard/new-drug" element={<CreateDrug />} />
      </Route>
    </Routes>
    {/* <Routes path="/dashboard" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="/text" element={<Users />} />
    </Routes> */}
  </BrowserRouter>,
  document.getElementById('root'),
)

reportWebVitals()
