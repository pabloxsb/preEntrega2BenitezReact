import ItemCount from "../ItemCount/ItemCoun"
import ItemDetai from "../ItemDetail/ItemDetail.css"

const ItemDetail = ({id, name, price, description, img, stock}) => {

    const handleOnAdd = (quantity) => {
        const objProduct ={
            id,name,price,quantity,stock
        }
    }


    return (
        <div className="ItemDetai">
            <h2 className="TextDes">{name}</h2>
            <img src={img} alt={name} className="Imagen"></img>
            <h3 className="TextDes">Precio:{price}</h3>
            <p className="TextDes">Stock:{stock}</p>
            <p className="TextDes">{description}</p>
            <ItemCount onAdd={handleOnAdd}/>
        </div>
    )
}

export default ItemDetail