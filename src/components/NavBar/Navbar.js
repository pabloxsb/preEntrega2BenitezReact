import CartWidget from '../CartWidget/CartWidget'
import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import NavBar from '../NavBar/NavBar.css'
import malawi from '../imagen/malawi.png'


const Navbar = () => {
  return (
    <div>
      <nav className="NavBar navbar navbar-expand-lg ">
           <div className="container-fluid">
                 <Link to='/'>
                  <img src={malawi} width='90' />
                 </Link>
                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                       <div className="navbar-nav mx-auto">
                           <NavLink to='/' className={"nav-link"}>Inicio</NavLink>
                           <NavLink className={"nav-link"} to='/category/ciclido'>Ciclico</NavLink>
                           <NavLink className={"nav-link"} to='/category/carpa'>Carpa</NavLink>
                            <NavLink className={"nav-link"} to='/AboutUs'>About Us</NavLink>
                           
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
