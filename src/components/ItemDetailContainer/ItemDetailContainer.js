import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getProductsById } from "../../services/firebase/products"
import { useAsync } from "../../hooks/useAsync"



const ItemDetailContainer = () => {
    
    const {itemId} = useParams()

    const getProductsWithId = () => getProductsById(itemId)

    const { data: product, error, loading } = useAsync(getProductsWithId, [itemId])
    


    return (
        <div>
        <h1>Detalle de producto</h1>
        <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer