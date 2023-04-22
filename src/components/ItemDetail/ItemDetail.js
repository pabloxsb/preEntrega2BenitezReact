import ItemCount from "../ItemCount/ItemCoun"
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> e2f7458d2c4889dbb5c0d9eebbb90ef1d181f8d1
import { useState } from "react"
import ItemDetai from "../ItemDetail/ItemDetail.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
<<<<<<< HEAD
import { Link } from "react-router-dom"

=======
import { useNotification } from "../../Notification/Notification"
>>>>>>> e2f7458d2c4889dbb5c0d9eebbb90ef1d181f8d1


const ItemDetail = ({id, name, category, price, description, img, stock}) => {
    const[quantity, setQuantity] = useState(0)
<<<<<<< HEAD

=======
    const { setNotification } = useNotification ()
>>>>>>> e2f7458d2c4889dbb5c0d9eebbb90ef1d181f8d1
    const { addItem } = useContext(CartContext)


    const handleOnAdd = (quantity) => {
        const productToAdd ={
            id,name,price,quantity, stock
        }

        setQuantity(quantity)  

        addItem(productToAdd)
<<<<<<< HEAD

      

              
=======
        setNotification ('success', `Se agrego correctamente ${quantity} ${name}`)
      
              
=======
import ItemDetai from "../ItemDetail/ItemDetail.css"

const ItemDetail = ({id, name, price, description, img, stock}) => {

    const handleOnAdd = (quantity) => {
        const objProduct ={
            id,name,price,quantity,stock
        }
>>>>>>> a5fa37f48d88737406de0bb847c7485678572bc5
>>>>>>> e2f7458d2c4889dbb5c0d9eebbb90ef1d181f8d1
    }


    return (
        <div className="ItemDetai">
            <h2 className="TextDes">{name}</h2>
            <img src={img} alt={name} className="Imagen"></img>
            <h3 className="TextDes">Precio:{price}</h3>
            <p className="TextDes">Stock:{stock}</p>
            <p className="TextDes">{description}</p>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> e2f7458d2c4889dbb5c0d9eebbb90ef1d181f8d1
            <div>
                {
                        stock > 0 ? <ItemCount onAdd={handleOnAdd} stock={stock}/> : <div> No hay stock disponible </div>
                }
            
            </div>
<<<<<<< HEAD
=======
=======
            <ItemCount onAdd={handleOnAdd}/>
>>>>>>> a5fa37f48d88737406de0bb847c7485678572bc5
>>>>>>> e2f7458d2c4889dbb5c0d9eebbb90ef1d181f8d1
        </div>
    )
}

export default ItemDetail