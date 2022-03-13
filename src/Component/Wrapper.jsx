import React, { useContext } from 'react'
import { ToggleContext } from '../App'

export default function Wrapper({ children }) {
  let toggle = useContext(ToggleContext)
  return <div class={`content ${toggle ? '' : 'mobile_body'}`}>{children}</div>
}
/**
 * <Route path="/">
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

 */
