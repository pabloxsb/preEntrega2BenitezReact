import React, { useContext, useState } from 'react';
import { createOrdenCompra, getOrdenCompra } from '../../services/firebase/order';
import { getProducts,getProductsById } from '../../services/firebase/products';
import { CartContext } from '../../context/CartContext'; 
import Swal from 'sweetalert2';
<<<<<<< HEAD
=======
import { useNavigate } from 'react-router-dom';
>>>>>>> e2f7458d2c4889dbb5c0d9eebbb90ef1d181f8d1



const Checkout = () => {

    const {getTotal, cart, clearCart, total} = useContext(CartContext)
    const datosFormulario = React.useRef()
<<<<<<< HEAD
    
 
   

=======
    let navigate = useNavigate()
    
 
>>>>>>> e2f7458d2c4889dbb5c0d9eebbb90ef1d181f8d1
    const consultarFormulario = (e) => {
        e.preventDefault()
        const datForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datForm)
<<<<<<< HEAD
        const objOrder = {
            buyer: {e},
            items: cart,
            total: total
        }

        console.log(objOrder)
       
        const aux = [...cart]
=======
       
        const aux = [...cart]
        console.log(aux)
>>>>>>> e2f7458d2c4889dbb5c0d9eebbb90ef1d181f8d1

        aux.forEach(prodCarrito => {
            getProducts(prodCarrito.id).then(prod => {
                if(prod.stock >= prodCarrito.quantity) {
                    prod.stock -= prodCarrito.quantity
                    getProductsById(prodCarrito.id, prod)
                } else {
                }
            })
        })

        createOrdenCompra(cliente, getTotal , new Date().toISOString()).then(ordenCompra => {
            getOrdenCompra(ordenCompra.id)
            .then(item => {
                Swal.fire(
                    'Compra finalizada',
                    `¡Muchas gracias por su compra, su orden es ${item.id}!`,
                    'success'
                )
                clearCart()
                e.target.reset()
            }).catch(error => {
                Swal.fire(
                    'Error',
                    `Hubo un error con su orden. Vuelva a intentarlo`,
                    'error'
                )
            })
            
        })
    }
        
        return (
<<<<<<< HEAD
            <div className='FormularioReact'>
                <h1 className='h1Formulario'>Complete sus datos para terminar la compra</h1>
                <form onSubmit={consultarFormulario} ref={datosFormulario}>
                <div>
                    <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control" name="nombre" />
                </div>
                <div>
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" />
                </div>
                <div>
                    <label htmlFor="email2" className="form-label">Repetir Email</label>
                    <input type="email" className="form-control" name="email2" />
                </div>
                <div>
                    <label htmlFor="dni" className="form-label">DNI</label>
                    <input type="number" className="form-control" name="dni" />
                </div>
                <div>
                    <label htmlFor="celular" className="form-label">Numero telefonico</label>
                    <input type="number" className="form-control" name="celular" />
                </div>
                <div>
                    <label htmlFor="direccion" className="form-label">Dirección</label>
                    <input type="text" className="form-control" name="direccion" />
                </div>
                <button type="submit" className="botonFormulario">Finalizar Compra</button>
            </form>
            </div>
        )
=======
            <div className="container">
            <form onSubmit={consultarFormulario} ref={datosFormulario}>
                <div className="form">
                    <label htmlFor="nombre" className="formData">Nombre y Apellido</label>
                    <input type="text" className="formDataNew" name="nombre" />
                </div>
                <div className="form">
                    <label htmlFor="email" className="formData">Email</label>
                    <input type="email" className="formDataNew" name="email" />
                </div>
                <div className="form">
                    <label htmlFor="email2" className="formData">Repetir Email</label>
                    <input type="email" className="formDataNew" name="email2" />
                </div>
                <div className="form">
                    <label htmlFor="dni" className="formData">DNI</label>
                    <input type="number" className="formDataNew" name="dni" />
                </div>
                <div className="form">
                    <label htmlFor="celular" className="formData">Numero telefonico</label>
                    <input type="number" className="formDataNew" name="celular" />
                </div>
                <div className="form">
                    <label htmlFor="direccion" className="formData">Dirección</label>
                    <input type="text" className="formDataNew" name="direccion" />
                </div>
                <button className='buttonConfirm' type="submit">Generar Orden</button>
            </form>
        </div>
        );
>>>>>>> e2f7458d2c4889dbb5c0d9eebbb90ef1d181f8d1
}

export default Checkout