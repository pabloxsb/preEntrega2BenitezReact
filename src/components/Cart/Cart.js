import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'


const Cart = () => {
    const { cart, total } = useContext(CartContext)
    
    if (cart.length === 0) {
        return(
          <>
            <div>
            <img src="" alt='carrito vacio'></img>
            </div>
            <p className='custom-cart'>No Hay elementos en el carrito</p>
            <Link to="/" className='nav-link'>Hacer compras</Link>
          </>
        )
      }

    return (
      <div>
      <h1>Cart</h1>
      <div>
      {
          cart.map(prod => {
              return (
                  <div key={prod.id}>
                      <h1>{prod.name}</h1>
                      <p>Cantidad:{prod.quantity}</p>
                  </div>
              )
          })
      }
        </div>
        <div>Precio Total de la compra: ${total}</div>
        <div>
        <Link to='/checkout'>Finalizar Compra</Link>
        </div>
  </div>
    )
}

export default Cart