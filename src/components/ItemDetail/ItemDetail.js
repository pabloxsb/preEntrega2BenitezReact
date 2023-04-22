import ItemCount from "../ItemCount/ItemCoun"
import { useState } from "react"
import ItemDetai from "../ItemDetail/ItemDetail.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { useNotification } from "../../Notification/Notification"


const ItemDetail = ({id, name, category, price, description, img, stock}) => {
    const[quantity, setQuantity] = useState(0)
    const { setNotification } = useNotification ()
    const { addItem } = useContext(CartContext)


    const handleOnAdd = (quantity) => {
        const productToAdd ={
            id,name,price,quantity, stock
        }

        setQuantity(quantity)  

        addItem(productToAdd)
        setNotification ('success', `Se agrego correctamente ${quantity} ${name}`)
      
              
    }


    return (
        <div className="ItemDetai">
            <h2 className="TextDes">{name}</h2>
            <img src={img} alt={name} className="Imagen"></img>
            <h3 className="TextDes">Precio:{price}</h3>
            <p className="TextDes">Stock:{stock}</p>
            <p className="TextDes">{description}</p>
            <div>
                {
                        stock > 0 ? <ItemCount onAdd={handleOnAdd} stock={stock}/> : <div> No hay stock disponible </div>
                }
            
            </div>
        </div>
    )
}

export default ItemDetail