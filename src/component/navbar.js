import React from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary navbar-fixed-top">
            <div className="container-fluid">
            <img src="https://img.icons8.com/external-kmg-design-outline-color-kmg-design/32/000000/external-calculator-education-kmg-design-outline-color-kmg-design.png"/>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/bmi">BMI</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/bank">Bank</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/ppn">Ppn</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Konversi Bilangan
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <li><Link className="dropdown-item" to="/biner">Konversi Bilangan Biner</Link></li>
                      <li><Link className="dropdown-item" to="/okta">Konversi Bilangan Okta</Link></li>
                      <li><Link className="dropdown-item" to="/decimal">Konversi Bilangan Decimal</Link></li>
                      <li><Link className="dropdown-item" to="/hexadecimal">Konversi Bilangan Hexadecimal</Link></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        )
    }
}