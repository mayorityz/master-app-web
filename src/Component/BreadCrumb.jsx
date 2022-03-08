import React from 'react'

export default function BreadCrumb({ title, crumb }) {
  return (
    <div>
      <h3 className="crumb_header">{title}</h3>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {crumb}
          </li>
        </ol>
      </nav>
    </div>
  )
}
