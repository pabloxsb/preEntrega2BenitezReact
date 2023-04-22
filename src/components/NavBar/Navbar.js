import CartWidget from '../CartWidget/CartWidget'
import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import NavBar from '../NavBar/NavBar.css'
import malawi from '../imagen/malawi.png'
<<<<<<< HEAD
import { useAuth } from '../../context/AuthContext'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import { useEffect, useState } from 'react'

=======
>>>>>>> a5fa37f48d88737406de0bb847c7485678572bc5


const Navbar = () => {
  const [categories, setCategories] = useState ([])
  const { user } = useAuth()

  useEffect (() => {
    const categoriesRef = query(collection(db, 'categories'), orderBy('order'))

    getDocs(categoriesRef)
      .then(snapshot => {
        const categoriesAdapted = snapshot.docs.map(doc => {
          const data = doc.data()

          return {id: doc.id, ...data }
        })

        setCategories(categoriesAdapted)
      }).catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <div>
      <nav className="NavBar navbar navbar-expand-lg ">
           <div className="container-fluid">
                 <Link to='/'>
                  <img src={malawi} width='90' />
                 </Link>
                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                       <div className="navbar-nav mx-auto">
                           <NavLink to='/' className={"nav-link"}>Inicio</NavLink>
<<<<<<< HEAD
                           {
                            categories.map( cat => {
                              return(
                                <NavLink key={cat.id} className={"nav-link"} to={`/category/${cat.slug}`}>{cat.label}</NavLink>
                              )
                            })
                           }
                          
=======
                           <NavLink className={"nav-link"} to='/category/ciclido'>Ciclico</NavLink>
                           <NavLink className={"nav-link"} to='/category/carpa'>Carpa</NavLink>
                            <NavLink className={"nav-link"} to='/AboutUs'>About Us</NavLink>
                           
>>>>>>> a5fa37f48d88737406de0bb847c7485678572bc5
                         </div>
                         {
                          user ? (
                            <CartWidget/>
                          ) : (
                            <NavLink className={"nav-link"} to='/Login'>Login</NavLink>
                          )
                         }
                         
                         
                      </div>
             </div>
         </nav>
     <div/>
     </div>
  )
}

export default Navbar
