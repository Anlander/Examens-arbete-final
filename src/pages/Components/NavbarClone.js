import React from 'react'
import { Link } from 'react-router-dom'


const NavbarClone = () => {
  return (
    <nav id="navbar-clone" className="navbar is-fresh is-transparent" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
             <div className="title">Teacher-Services</div>
          </a>
        </div>
        <div id="cloned-navbar-menu" className="navbar-menu is-fixed">
          <div className="navbar-start">

          </div>

          <div className="navbar-end">
            <Link to="/" className="navbar-item is-secondary">
                Home
            </Link>
            <Link to="/Services" className="navbar-item is-secondary">
                Services
            </Link>
            <div className="navbar-item has-dropdown is-hoverable">
              <Link className="navbar-link">
                  Service
              </Link>

              <div className="navbar-dropdown">
                <a className="navbar-item">
                    Service list
                </a>
                <a className="navbar-item">
                    offers
                </a>
                <a className="navbar-item">
                    profile
                </a>
              </div>
            </div>
            <Link to="/Login" className="navbar-item is-secondary modal-trigger" data-modal="auth-modal">
                Log in
            </Link>
            <a className="navbar-item">
              <Link to="/Register" className="button signup-button rounded secondary-btn raised">
                 Sign up
              </Link>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavbarClone
