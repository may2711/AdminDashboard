import React from 'react'

const Navbar = ({Toggle}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a href="#" className="navbar-brand d-block d-md-none" onClick={Toggle}>
      <i className="bi bi-justify"></i>
    </a>
    <a className="navbar-brand" href="#">Dashboard</a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
  
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item border rounded">
          <a className="nav-link" aria-current="page" href="#"><i className="bi bi-search me-2"></i>Search</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Account</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Log out</a>
        </li>
      </ul>

    </div>
  </div>
</nav>
  )
}

export default Navbar