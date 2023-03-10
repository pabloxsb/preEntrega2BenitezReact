import CartWidget from '../CartWidget/CartWidget'
import React from 'react'
import {Link} from 'react-router-dom'
import NavBar from '../NavBar/NavBar.css'

const Navbar = () => {
  return (
    <div>
      <nav className="NavBar navbar navbar-expand-lg ">
           <div className="container-fluid">
                 <Link to='/'>
                  <img src='./malawi.png' width='90' />
                 </Link>
                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                       <div className="navbar-nav mx-auto">
                           <Link className="nav-link" to='/' >Inicio</Link>
                           <Link className="nav-link" to='/Fish'>Fish</Link>
                            <Link className="nav-link" to='/AboutUs'>About Us</Link>
                           
                         </div>
                         <CartWidget/>
                      </div>
             </div>
         </nav>
     <div/>
     </div>
  )
}

export default Navbar
