import Item from "../Item/Item"
import Itemc from "../ItemList/Itemc.css"

const ItemList = ({products}) => {
    return(
        <div className="Items text-center">
            <div className="row align-items-center">
             {
                 products.map(product => {
                    return <Item key={product.id} {...product}/>
                 })
       
       
             }
             </div>
        </div>
    )
}

export default ItemList