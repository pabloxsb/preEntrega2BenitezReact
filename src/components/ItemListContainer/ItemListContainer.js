import { useEffect, useState } from "react"
import {getProducts, getProductsByCategory} from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import Carusel from "../carusel/carusel"
import { useParams } from 'react-router-dom'


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(products => {
                setProducts(products)
               
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading (false)
            })
    }, [categoryId])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    if (products && products.length === 0) {
        return <h1>No hay stock</h1>
    }

    
    return (
        <div>
            <Carusel/>
             <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer