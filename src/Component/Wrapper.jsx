import React, { useContext } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Dashboard from './../View/Dashboard'
import Learning from './../View/LearningHub'
import Erp from './../View/Erp'
import WorkData from './../View/WorkData'
import Users from './../View/Users'
import CreateDrug from '../View/CreateDrug'
import { ToggleContext } from '../App'

export default function Wrapper({ children, title, crumb }) {
  let toggle = useContext(ToggleContext)
  return (
    <div class={`content ${toggle ? '' : 'mobile_body'}`}>
      <Routes>
        <Route path="/">
          <Route
            index
            element={<Dashboard title="Welcome" crumb="Admin Dashboard" />}
          />
          <Route
            path="learning"
            element={
              <Learning
                crumb="Learning Hub"
                title="Create Learning Experiences"
              />
            }
          />
          <Route
            path="users"
            element={<Users title="CHVA's History" crumb="User Account" />}
          />
          <Route
            path="work-data"
            element={
              <WorkData title="CHVA's Workdata Home" crumb="Work Data" />
            }
          />
          <Route
            path="erp"
            element={<Erp title="ERP Supplies Record" crumb="ERP" />}
          />
          <Route
            path="new-drug"
            element={
              <CreateDrug
                title="New Drug Entry"
                crumb="Add Drug To Inventory"
              />
            }
          />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
      <Outlet />
    </div>
  )
}
