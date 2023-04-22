import ItemCount from "../ItemCount/ItemCoun"
import { useState } from "react"
import ItemDetai from "../ItemDetail/ItemDetail.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"



const ItemDetail = ({id, name, category, price, description, img, stock}) => {
    const[quantity, setQuantity] = useState(0)

    const { addItem } = useContext(CartContext)


    const handleOnAdd = (quantity) => {
        const productToAdd ={
            id,name,price,quantity, stock
        }

        setQuantity(quantity)  

        addItem(productToAdd)

      

              
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