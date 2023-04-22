import { useEffect, useState } from "react"
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> e2f7458d2c4889dbb5c0d9eebbb90ef1d181f8d1
import ItemList from "../ItemList/ItemList"
import Carusel from "../carusel/carusel"
import { useParams } from 'react-router-dom'
import { getProducts } from "../../services/firebase/products"
<<<<<<< HEAD
=======
=======
import {getProducts, getProductsByCategory} from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import Carusel from "../carusel/carusel"
import { useParams } from 'react-router-dom'
>>>>>>> a5fa37f48d88737406de0bb847c7485678572bc5
>>>>>>> e2f7458d2c4889dbb5c0d9eebbb90ef1d181f8d1


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
<<<<<<< HEAD
    const [error, setError] = useState(false)
=======
<<<<<<< HEAD
    const [error, setError] = useState(false)
=======
>>>>>>> a5fa37f48d88737406de0bb847c7485678572bc5
>>>>>>> e2f7458d2c4889dbb5c0d9eebbb90ef1d181f8d1

    const { categoryId } = useParams()

    useEffect(() => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> e2f7458d2c4889dbb5c0d9eebbb90ef1d181f8d1
      
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
<<<<<<< HEAD
=======
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
>>>>>>> e2f7458d2c4889dbb5c0d9eebbb90ef1d181f8d1
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