import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { useNavigate } from "react-router-dom"

const CartWidget = () => {

    const {totalQuantity, total} = useContext(CartContext)

    const navigate = useNavigate()


    return (
        <div onClick={() => navigate('/cart')} >
           <i className="bi bi-cart3"></i>
            {totalQuantity} total ${total}
        </div>
    )
}

export default CartWidget