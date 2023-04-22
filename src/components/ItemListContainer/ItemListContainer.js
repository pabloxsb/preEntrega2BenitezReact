import { useEffect, useState } from "react"
<<<<<<< HEAD
import ItemList from "../ItemList/ItemList"
import Carusel from "../carusel/carusel"
import { useParams } from 'react-router-dom'
import { getProducts } from "../../services/firebase/products"
=======
import {getProducts, getProductsByCategory} from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import Carusel from "../carusel/carusel"
import { useParams } from 'react-router-dom'
>>>>>>> a5fa37f48d88737406de0bb847c7485678572bc5


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
<<<<<<< HEAD
    const [error, setError] = useState(false)
=======
>>>>>>> a5fa37f48d88737406de0bb847c7485678572bc5

    const { categoryId } = useParams()

    useEffect(() => {
<<<<<<< HEAD
      
        getProducts(categoryId)
            .then(products => {
                setProducts(products)
            })
            .catch(error => {
                setError(error)
            })
            .finally(() => {
                setLoading(false)
            })
  
    }, [categoryId])

    if(loading) {
        return <h1 style={{color:'white'}}>Cargando...</h1>
    }

    if(error){
        return <h1>Vuelva a cargar la pagina</h1>
=======
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
>>>>>>> a5fa37f48d88737406de0bb847c7485678572bc5
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