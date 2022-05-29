import React, { Component } from 'react'
import './Navbar.css'
export default class Navbar extends Component {
  render() {
    return (
      <div className='d-flex justify-content-between nav-bar '>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <span className="text-capitalize ps-3">
            <a className="navbar-brand nav-logo1" href="#">PINX</a>
            <a className="navbar-brand nav-logo2" href="#">Global Market</a>
            <a className="navbar-brand nav-text" href="#">NEWS</a>
            <a className="navbar-brand nav-text" href="#">CORPORATE</a>
            <a className="navbar-brand nav-text" href="#">LEARN</a>
            <a className="navbar-brand nav-text" href="#">FAQS</a>
            <a className="navbar-brand nav-text" href="#">ABOUT</a>
          </span>
        </nav>
        <div className="row height d-flex justify-content-center align-items-center">
          <div className="col-md-8">
            <div className="search">
              <i className="fa fa-search"></i>
              <input type="text" className="form-control" placeholder="Search..." />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
